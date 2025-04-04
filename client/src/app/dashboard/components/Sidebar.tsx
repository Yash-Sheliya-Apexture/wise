"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiCreditCard, FiUserPlus, FiSettings } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { GoArrowUp } from "react-icons/go";
import { VscSignOut } from "react-icons/vsc"; // No longer needed
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth"; // Import useAuth hook

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface NavLink {
  label: string;
  icon: keyof typeof icons;
  route: string;
}

const icons = {
  RiHomeLine,
  GrTransaction,
  BsSend,
  GoArrowUp,
  FiCreditCard,
  FiUserPlus,
  FiSettings,
};

const navLinksData: NavLink[] = [
  { label: "Dashboard", icon: "RiHomeLine", route: "/dashboard" },
  {
    label: "Transactions",
    icon: "GrTransaction",
    route: "/dashboard/transactions",
  },
  { label: "Send Money", icon: "BsSend", route: "/dashboard/send" },
  { label: "Add Money", icon: "GoArrowUp", route: "/dashboard/add-money" },
  {
    label: "Recipients",
    icon: "FiUserPlus",
    route: "/dashboard/recipients",
  },
  { label: "Settings", icon: "FiSettings", route: "/dashboard/your-account" },
];

const bottomNavLinksData: NavLink[] = [
  { label: "Home", icon: "RiHomeLine", route: "/dashboard" },
  {
    label: "Transactions",
    icon: "GrTransaction",
    route: "/dashboard/transactions",
  },
  {
    label: "beneficiaries",
    icon: "FiUserPlus",
    route: "/dashboard/beneficiaries",
  },
  { label: "settings", icon: "FiSettings", route: "/dashboard/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState<boolean | null>(null);
  const { logout } = useAuth(); // Get logout function from useAuth

  useEffect(() => {
    const checkMobileView = () => setIsMobileView(window.innerWidth < 1024);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sidebarOpen &&
        isMobileView === true
      ) {
        toggleSidebar();
      }
    };

    if (sidebarOpen && isMobileView === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, isMobileView, toggleSidebar]);

  const handleLogout = () => {
    // Removed event parameter - button onClick doesn't need it directly
    logout(); // Call the logout function from AuthContext
    router.push("/auth/login"); // Redirect to login page after logout
    if (sidebarOpen && isMobileView) {
      toggleSidebar(); // Close sidebar on mobile after logout
    }
  };

  return (
    <>
      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && isMobileView && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/45 z-10 lg:hidden"
        />
      )}

      {isMobileView === null ||
      isMobileView === false ||
      (sidebarOpen && isMobileView === true) ? (
        <motion.div
          ref={sidebarRef}
          className={`w-64 fixed h-screen inset-y-0 left-0 lg:relative lg:z-0 z-20 ${
            isMobileView ? "" : "translate-x-0"
          } ${
            sidebarOpen && isMobileView
              ? "translate-x-0"
              : isMobileView
              ? "-translate-x-full"
              : "translate-x-0"
          }`}
          initial={isMobileView ? { x: "-100%" } : {}}
          animate={isMobileView ? { x: sidebarOpen ? 0 : "-100%" } : {}}
          exit={isMobileView ? { x: "-100%" } : {}}
          transition={isMobileView ? { duration: 0.3, ease: "easeInOut" } : {}}
        >
          <div className="flex flex-col items-center justify-center lg:h-28 h-20">
            <Link href="/dashboard">
              <Image
                src="/assets/images/wise-logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="h-[calc(100%-112px)] overflow-y-auto">
            <nav>
              {navLinksData.map((item: NavLink) => {
                const IconComponent = icons[item.icon];
                const isActive = pathname === item.route;

                return (
                  <Link
                    key={item.route}
                    href={item.route}
                    onClick={(e) => {
                      if (sidebarOpen && isMobileView) {
                        toggleSidebar();
                      }
                    }}
                    className={`w-full flex items-center space-x-3 py-3 px-4 font-medium rounded-full transition duration-200 mb-2 ${
                      isActive
                        ? "bg-primary/60 text-neutral-900 dark:bg-primarybox dark:text-primary"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-primary"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={handleLogout} // Call handleLogout function on click
              className="w-full flex items-center space-x-3 py-3 group px-4 font-medium rounded-full transition duration-200 mb-2 text-gray cursor-pointer" // Added absolute positioning and p-4 for padding
            >
              <VscSignOut className="w-6 h-6 group-hover:text-neutral-900 dark:text-gray-300 dark:group-hover:text-primary" />
              <span className="text-gray font-medium group-hover:text-neutral-900 dark:text-gray-300 dark:group-hover:text-primary">
                Logout
              </span>
            </button>
          </div>
        </motion.div>
      ) : null}

      {/* Small screen bottom sidebar */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full border-t border-lightgray bg-white flex justify-center items-center space-x-6 py-4 z-10">
        {bottomNavLinksData.map((item: NavLink) => {
          const IconComponent = icons[item.icon];
          const isActive = pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`flex flex-col items-center justify-center ${
                isActive
                  ? "text-primary"
                  : "text-gray-500 hover:text-neutral-800"
              }`}
            >
              {IconComponent && <IconComponent className="size-5 mb-2" />}
              <span className="text-xs capitalize">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
