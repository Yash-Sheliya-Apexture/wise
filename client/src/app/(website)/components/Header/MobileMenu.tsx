// components/MobileMenu.tsx
// components/MobileMenu.tsx
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import plane from "../../../../../public/assets/icons/plane.webp";

// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
//   toggleFeaturesDropdown: () => void;
//   isFeaturesOpen: boolean;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({
//   isOpen,
//   onClose,
//   toggleFeaturesDropdown,
//   isFeaturesOpen,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed w-full h-[calc(100vh-5rem)] bg-white z-50 overflow-y-auto">
//       <div className="flex flex-col justify-between h-full">
//         <div className="p-6 space-y-4">
//           {/*  Navigation Links */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/personal"
//               passHref
//               className="block bg-lightgreen px-4 py-1 rounded-full font-medium"
//               onClick={onClose}
//             >
//               Personal
//             </Link>
//             <Link
//               href="/business"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Business
//             </Link>
//             <Link
//               href="/platform"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Platform
//             </Link>
//           </div>

//           <div>
//             {/* Features (with dropdown) */}
//             <div>
//               <button
//                 onClick={toggleFeaturesDropdown}
//                 className="block w-full text-left py-2  font-medium text-lg"
//               >
//                 Features
//               </button>
//               {isFeaturesOpen && (
//                 <div className="mt-2 pl-4">
//                   {/*  Features Dropdown Content */}

//                   <div>
//                     <div className="p-4 flex flex-col justify-start bg-green/10">
//                       <Image src={plane} alt="Plane" width={56} height={56} />

//                       <div>
//                         <p className="font-light text-gray">
//                           Learn how millions of customers move their money
//                           globally
//                         </p>
//                       </div>
//                     </div>

//                     <div className="p-4 flex flex-col gap-4">
//                       {/* Link 1 */}
//                       <Link
//                         href="/sendmoney"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send money</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-32"></span>
//                       </Link>

//                       {/* Link 2 */}
//                       <Link
//                         href="/sendlargeamount"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send large amounts</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-44"></span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <Link
//               href="/pricing"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Pricing
//             </Link>
//             <Link
//               href="/help"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Help
//             </Link>
//             <Link href="/en" passHref onClick={onClose}>
//               <div className="flex items-center  py-2  font-medium text-lg">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
//                   alt="Indian Flag"
//                   className="h-5 w-5 rounded-full mr-1 object-cover"
//                 />
//                 <span>EN</span>
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div className="p-6 flex sm:flex-row flex-col items-center gap-2">
//           {/*  Login and Register */}
//           <Link
//             href="/login"
//             passHref
//             className="block w-full p-2 bg-white hover:bg-green/10 border border-green rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Log in
//           </Link>
//           <Link
//             href="/register"
//             passHref
//             className="block w-full p-2 bg-lightgreen hover:bg-lightgreen-hover rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Register
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MobileMenu;





// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import plane from "../../../../../public/assets/icons/plane.webp";

// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
//   toggleFeaturesDropdown: () => void;
//   isFeaturesOpen: boolean;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({
//   isOpen,
//   onClose,
//   toggleFeaturesDropdown,
//   isFeaturesOpen,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed w-full h-[calc(100vh-5rem)] bg-white z-50 overflow-y-auto">
//       <div className="flex flex-col justify-between h-full">
//         <div className="p-6 space-y-4">
//           {/*  Navigation Links */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/personal"
//               passHref
//               className="block bg-lightgreen px-4 py-1 rounded-full font-medium"
//               onClick={onClose}
//             >
//               Personal
//             </Link>
//             <Link
//               href="/business"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Business
//             </Link>
//             <Link
//               href="/platform"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Platform
//             </Link>
//           </div>

//           <div>
//             {/* Features (with dropdown) */}
//             <div>
//               <button
//                 onClick={toggleFeaturesDropdown}
//                 className="block w-full text-left py-2  font-medium text-lg"
//               >
//                 Features
//               </button>
//               {isFeaturesOpen && (
//                 <div className="mt-2 pl-4">
//                   {/*  Features Dropdown Content */}

//                   <div>
//                     <div className="p-4 flex flex-col justify-start bg-green/10">
//                       <Image src={plane} alt="Plane" width={56} height={56} />

//                       <div>
//                         <p className="font-light text-gray">
//                           Learn how millions of customers move their money
//                           globally
//                         </p>
//                       </div>
//                     </div>

//                     <div className="p-4 flex flex-col gap-4">
//                       {/* Link 1 */}
//                       <Link
//                         href="/sendmoney"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send money</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-32"></span>
//                       </Link>

//                       {/* Link 2 */}
//                       <Link
//                         href="/sendlargeamount"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send large amounts</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-44"></span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <Link
//               href="/pricing"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Pricing
//             </Link>
//             <Link
//               href="/help"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Help
//             </Link>
//             <Link href="/en" passHref onClick={onClose}>
//               <div className="flex items-center  py-2  font-medium text-lg">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
//                   alt="Indian Flag"
//                   className="h-5 w-5 rounded-full mr-1 object-cover"
//                 />
//                 <span>EN</span>
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div className="p-6 flex sm:flex-row flex-col items-center gap-2">
//           {/*  Login and Register */}
//           <Link
//             href="/login"
//             passHref
//             className="block w-full p-2 bg-white hover:bg-green/10 border border-green rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Log in
//           </Link>
//           <Link
//             href="/register"
//             passHref
//             className="block w-full p-2 bg-lightgreen hover:bg-lightgreen-hover rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;





// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import plane from "../../../../../public/assets/icons/plane.webp";

// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
//   toggleFeaturesDropdown: () => void;
//   isFeaturesOpen: boolean;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({
//   isOpen,
//   onClose,
//   toggleFeaturesDropdown,
//   isFeaturesOpen,
// }) => {
//   // No need for this check anymore: if (!isOpen) return null;
//     // Framer Motion handles the visibility

//   return (
//     <div className="fixed w-full h-[calc(100vh-5rem)] bg-white z-50 overflow-y-auto">
//       <div className="flex flex-col justify-between h-full">
//         <div className="p-6 space-y-4">
//           {/*  Navigation Links */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/personal"
//               passHref
//               className="block bg-lightgreen px-4 py-1 rounded-full font-medium"
//               onClick={onClose}
//             >
//               Personal
//             </Link>
//             <Link
//               href="/business"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Business
//             </Link>
//             <Link
//               href="/platform"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Platform
//             </Link>
//           </div>

//           <div>
//             {/* Features (with dropdown) */}
//             <div>
//               <button
//                 onClick={toggleFeaturesDropdown}
//                 className="block w-full text-left py-2  font-medium text-lg"
//               >
//                 Features
//               </button>
//               {isFeaturesOpen && (
//                 <div className="mt-2 pl-4">
//                   {/*  Features Dropdown Content */}

//                   <div>
//                     <div className="p-4 flex flex-col justify-start bg-green/10">
//                       <Image src={plane} alt="Plane" width={56} height={56} />

//                       <div>
//                         <p className="font-light text-gray">
//                           Learn how millions of customers move their money
//                           globally
//                         </p>
//                       </div>
//                     </div>

//                     <div className="p-4 flex flex-col gap-4">
//                       {/* Link 1 */}
//                       <Link
//                         href="/sendmoney"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send money</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-32"></span>
//                       </Link>

//                       {/* Link 2 */}
//                       <Link
//                         href="/sendlargeamount"
//                         passHref
//                         className="group relative inline-flex items-center gap-2 text-green font-medium cursor-pointer"
//                         onClick={onClose}
//                       >
//                         <p>Send large amounts</p>
//                         <IoIosArrowForward
//                           size={18}
//                           className="opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3"
//                         />
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-44"></span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <Link
//               href="/pricing"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Pricing
//             </Link>
//             <Link
//               href="/help"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Help
//             </Link>
//             <Link href="/en" passHref onClick={onClose}>
//               <div className="flex items-center  py-2  font-medium text-lg">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
//                   alt="Indian Flag"
//                   className="h-5 w-5 rounded-full mr-1 object-cover"
//                 />
//                 <span>EN</span>
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div className="p-6 flex sm:flex-row flex-col items-center gap-2">
//           {/*  Login and Register */}
//           <Link
//             href="/login"
//             passHref
//             className="block w-full p-2 bg-white hover:bg-green/10 border border-green rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Log in
//           </Link>
//           <Link
//             href="/register"
//             passHref
//             className="block w-full p-2 bg-lightgreen hover:bg-lightgreen-hover rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;












// components/MobileMenu/MobileMenu.tsx

// "use client";
// import React, {useState} from "react";
// import Link from "next/link";
// import FeatureDropdown from "../../../components/FeatureDropdown"; // Import

// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
//   const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // State for Features dropdown

//     const toggleFeaturesDropdown = () => {
//         setIsFeaturesOpen(!isFeaturesOpen);
//     };

//   return (
//     <div
//       className={`fixed w-full h-[calc(100vh-5rem)] bg-white z-50 overflow-y-auto transition-transform duration-300 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex flex-col justify-between h-full">
//         <div className="p-6 space-y-4">
//           {/*  Navigation Links */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/personal"
//               passHref
//               className="block bg-lightgreen px-4 py-1 rounded-full font-medium"
//               onClick={onClose}
//             >
//               Personal
//             </Link>
//             <Link
//               href="/business"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Business
//             </Link>
//             <Link
//               href="/platform"
//               passHref
//               className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
//               onClick={onClose}
//             >
//               Platform
//             </Link>
//           </div>

//           <div>
//             {/* Features (with dropdown) */}
//             <FeatureDropdown
//                 buttonText="Features"
//                 buttonClassName="block w-full text-left py-2  font-medium text-lg" // Important for styling
//                 isMobile={true}                                               //  <--- Pass isMobile
//                 isOpen={isFeaturesOpen}                                       //  <--- Pass isOpen
//                 toggleDropdown={toggleFeaturesDropdown}                        //  <--- Pass toggle
//                 onLinkClick={onClose}
//             />


//             <Link
//               href="/pricing"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Pricing
//             </Link>
//             <Link
//               href="/help"
//               passHref
//               className="block py-2  font-medium text-lg"
//               onClick={onClose}
//             >
//               Help
//             </Link>
//             <Link href="/en" passHref onClick={onClose}>
//               <div className="flex items-center  py-2  font-medium text-lg">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
//                   alt="Indian Flag"
//                   className="h-5 w-5 rounded-full mr-1 object-cover"
//                 />
//                 <span>EN</span>
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div className="p-6 flex sm:flex-row flex-col items-center gap-2">
//           {/*  Login and Register */}
//           <Link
//             href="/login"
//             passHref
//             className="block w-full p-2 bg-white hover:bg-green/10 border border-green rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Log in
//           </Link>
//           <Link
//             href="/register"
//             passHref
//             className="block w-full p-2 bg-lightgreen hover:bg-lightgreen-hover rounded-full font-medium text-lg text-center"
//             onClick={onClose}
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;








// components/MobileMenu.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import FeatureDropdown from "@/app/components/ui/FeatureDropdown"; // Import FeatureDropdown, adjust path

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  featureLinks: { href: string; text: string }[];
  topContent: React.ReactNode; //  <--- Receive topContent
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  featureLinks,
  topContent, //  <--- Destructure topContent
}) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // State for Features dropdown

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  return (
    <div
      className={`fixed w-full h-[calc(100vh-5rem)] bg-white z-50 overflow-y-auto transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="p-6 space-y-4">
          {/*  Navigation Links */}
          <div className="flex items-center gap-4">
            <Link
              href="/personal"
              passHref
              className="block bg-lightgreen px-4 py-1 rounded-full font-medium"
              onClick={onClose}
            >
              Personal
            </Link>
            <Link
              href="/business"
              passHref
              className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
              onClick={onClose}
            >
              Business
            </Link>
            <Link
              href="/platform"
              passHref
              className="block px-4 py-1 rounded-full  font-medium hover:bg-gray-200"
              onClick={onClose}
            >
              Platform
            </Link>
          </div>

          <div>
            {/* Features (with dropdown) */}
            <FeatureDropdown
              buttonText="Features"
              links={featureLinks}
              buttonClassName="block w-full text-left py-2  font-medium text-lg"
              isMobile={true}
              isOpen={isFeaturesOpen}
              toggleDropdown={toggleFeaturesDropdown}
              onLinkClick={onClose}
            />

            <Link
              href="/pricing"
              passHref
              className="block py-2  font-medium text-lg"
              onClick={onClose}
            >
              Pricing
            </Link>
            <Link
              href="/help"
              passHref
              className="block py-2  font-medium text-lg"
              onClick={onClose}
            >
              Help
            </Link>
            <Link href="/en" passHref onClick={onClose}>
              <div className="flex items-center  py-2  font-medium text-lg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="Indian Flag"
                  className="h-5 w-5 rounded-full mr-1 object-cover"
                />
                <span>EN</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="p-6 flex sm:flex-row flex-col items-center gap-2">
          {/*  Login and Register */}
          <Link
            href="/login"
            passHref
            className="block w-full p-2 bg-white hover:bg-green/10 border border-green rounded-full font-medium text-lg text-center"
            onClick={onClose}
          >
            Log in
          </Link>
          <Link
            href="/register"
            passHref
            className="block w-full p-2 bg-lightgreen hover:bg-lightgreen-hover rounded-full font-medium text-lg text-center"
            onClick={onClose}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;