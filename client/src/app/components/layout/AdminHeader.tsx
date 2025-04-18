// // frontend/src/components/layout/AdminHeader.tsx
"use client";

import React from "react";
import UserProfile from "@/app/components/UserProfile";
import { UserProfileProps } from "@/app/components/UserProfile";
import { FaBars } from "react-icons/fa";

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  const adminUserProfileProps: UserProfileProps = {
    userName: "Rudra Sutariya",
    profileImageUrl: "/assets/images/Char.jpg",
  };

  return (
    <header className="border-b">
      {/* Subtle shadow and border */}
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600 hover:text-gray-700 focus:outline-none"
        >
          <FaBars className="h-5 w-5" /> {/* Smaller menu icon */}
        </button>
        <div className="hidden lg:block">
          {/* You can add header content here if needed for larger screens */}
        </div>
        {/* User Profile Component */}
        <UserProfile {...adminUserProfileProps} />
      </div>
    </header>
  );
};

export default AdminHeader;

// frontend/src/app/components/layout/AdminHeader.tsx
// "use client";

// import React from "react";
// import { FaBars } from "react-icons/fa";

// interface AdminHeaderProps {
//   toggleSidebar: () => void;
// }

// const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
//   return (
//     <header className="bg-gray-100 dark:bg-gray-800 border-b p-4 flex justify-between items-center">
//       <div>
//         <button
//           onClick={toggleSidebar}
//           className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md"
//         >
//           <FaBars className="h-6 w-6" />
//         </button>
//       </div>
//       <div>
//         {/* Header Content (e.g., user info, notifications) */}
//         <p className="text-gray-700 dark:text-gray-300">Admin Header</p>
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;
