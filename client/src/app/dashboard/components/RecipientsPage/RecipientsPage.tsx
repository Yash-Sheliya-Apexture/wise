// // RecipientsPage.tsx
// "use client";
// import React, { useState, ChangeEvent } from "react";
// import { FiSearch } from "react-icons/fi";
// import RecipientList from "@/app/dashboard/components/RecipientList";
// import { sampleRecipients } from "../../../data/transactions";
// import { CiBank } from "react-icons/ci";
// import { FaCirclePlus } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from 'next/navigation'; // Import useRouter hook

// export default function RecipientsPag() {
// const [searchTerm, setSearchTerm] = useState<string>("");
// const router = useRouter(); // Initialize useRouter hook for navigation

// const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
// setSearchTerm(event.target.value);
// };

// const filteredRecipients = sampleRecipients.filter((recipient) => {
// const recipientName = recipient.accountHolderName;
// if (recipientName) {
// return recipientName.toLowerCase().includes(searchTerm.toLowerCase());
// }
// return false;
// });

// const handleAddRecipientClick = () => {
// // Navigate to the add recipient page when the button is clicked
// router.push('/dashboard/recipients/addrecipient'); // Assuming your add recipient page is located at /dashboard/recipients/add
// };

// return (
// <section className="Beneficiaries-Page py-10">
// <div className="container mx-auto">
// <div className="mb-8">
// {/* Recipients Title */}
// <h1 className="text-3xl font-semibold text-main">Recipients</h1>
// </div>

// {/* Search and Add Recipient */}
// <div className="flex items-center space-x-4 mb-6">
// <div className="relative flex-1">
// <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
// <FiSearch className="h-5 w-5 text-gray" aria-hidden="true" />
// </div>
// <input
// type="text"
// className="block w-full pl-14 pr-3 py-3 border border-lightborder rounded-full focus:outline-none focus:ring-main focus:border-main"
// placeholder="Search existing recipients"
// value={searchTerm}
// onChange={handleSearchChange}
// />
// </div>
// {/* Add recipient button with onClick handler */}
// <button
// type="button"
// className="inline-flex items-center px-10 py-3 border border-primary rounded-full font-medium text-primary focus:outline-none focus:ring-primary focus:border-primary cursor-pointer"
// onClick={handleAddRecipientClick} // Call handleAddRecipientClick function on button click
// >
// Add recipient
// </button>
// </div>

// {/* Conditional Rendering of Sections */}
// {filteredRecipients.length > 0 ? (
// <div>
// {/* All Label */}
// <div>
// <h3 className="text-gray font-medium relative after:content-[''] after:block after:w-full after:h-0.5 after:rounded-full after:bg-gray/20 after:mt-1">
// All
// </h3>

// {/* Recipients List */}
// <div className="pt-4 space-y-2">
// {filteredRecipients.map((recipient) => (
// <RecipientList
// key={recipient.id}
// recipient={recipient}
// isSelected={false}
// showCheckbox={false}
// />
// ))}
// </div>
// </div>
// </div>
// ) : (
// <div>
// {/* Can't find Label */}
// <div>
// <h3 className="text-gray font-medium relative after:content-[''] after:block after:w-full after:h-0.5 after:rounded-full after:bg-gray/20 after:mt-1">
// Can't find your recipient?
// </h3>

// <div className="mt-4 hover:bg-lightgray p-4 rounded-2xl -mx-4 transition-colors duration-500 ease-in-out cursor-pointer">
// <div className="flex items-center justify-between">
// <div className="flex items-center">
// <div className="w-12 h-12 rounded-full bg-lightborder flex items-center justify-center relative">
// <CiBank size={24}/>

// <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full overflow-hidden">
// <FaCirclePlus className="text-green-400 bg-white" />
// </div>
// </div>
// <div className="ml-4">
// <h5 className="font-medium text-main capitalize">
// Enter their bank detials
// </h5>

// <p className="text-sm text-gray-600">
// you'll need their acoount information
// </p>
// </div>
// </div>
// <div className="">
// <IoIosArrowForward className="h-5 w-5 text-gray-500" />
// </div>
// </div>
// </div>
// </div>
// </div>
// )}
// </div>
// </section>
// );
// }

// // frontend/src/app/dashboard/recipients/page.tsx
// "use client";
// import React, { useState, ChangeEvent, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";
// import RecipientList from "@/app/dashboard/components/RecipientList";
// import { CiBank } from "react-icons/ci";
// import { FaCirclePlus } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from 'next/navigation';
// import { useAuth } from '../../../hooks/useAuth';
// import recipientService from '../../../services/recipient';

// export default function RecipientsPage() {
// const [searchTerm, setSearchTerm] = useState<string>("");
// const router = useRouter();
// const { token } = useAuth();
// const [recipients, setRecipients] = useState([]);
// const [loadingRecipients, setLoadingRecipients] = useState(true);
// const [error, setError] = useState<string | null>(null);

// useEffect(() => {
// const fetchRecipients = async () => {
// setLoadingRecipients(true);
// setError(null);
// try {
// const data = await recipientService.getUserRecipients(token);
// setRecipients(data);
// } catch (err: any) {
// setError(err.message || 'Failed to load recipients.');
// console.error("Error fetching recipients:", err);
// } finally {
// setLoadingRecipients(false);
// }
// };

// if (token) {
// fetchRecipients();
// }
// }, [token]);

// const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
// setSearchTerm(event.target.value);
// };

// const filteredRecipients = recipients.filter((recipient) => {
// const recipientName = recipient.accountHolderName;
// if (recipientName) {
// return recipientName.toLowerCase().includes(searchTerm.toLowerCase());
// }
// return false;
// });

// const handleAddRecipientClick = () => {
// router.push('/dashboard/recipients/addrecipient');
// };

// if (loadingRecipients) {
// return <section className="Beneficiaries-Page py-10"><div className="container mx-auto">Loading recipients...</div></section>;
// }

// if (error) {
// return <section className="Beneficiaries-Page py-10"><div className="container mx-auto text-red-500">Error loading recipients: {error}</div></section>;
// }

// return (
// <section className="Beneficiaries-Page py-10">
// <div className="container mx-auto">
// <div className="mb-8">
// <h1 className="text-3xl font-semibold text-main">Recipients</h1>
// {/* Conditionally render in small screen */}
// {isSmallScreen && ( // Conditionally render based on isSmallScreen state
// <button
// className="bg-primary text-secondary font-medium px-4 py-1 rounded-full"
// onClick={handleAddRecipientClick} // Add onClick handler for small screen button
// >
// Add
// </button>
// )}
// </div>

// <div className="flex items-center space-x-4 mb-6">
// <div className="relative flex-1">
// <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
// <FiSearch className="h-5 w-5 text-gray" aria-hidden="true" />
// </div>
// <input
// type="text"
// className="block w-full pl-14 pr-10 py-3 border border-lightborder rounded-full focus:outline-none focus:ring-main focus:border-main" // Increased pr-10 to accommodate cancel icon
// placeholder="Search existing recipients"
// value={searchTerm}
// onChange={handleSearchChange}
// />
// {searchTerm && ( // Conditionally render the cancel icon
// <button
// onClick={clearSearchTerm}
// className="absolute inset-y-0 right-3 flex items-center text-gray hover:text-main focus:outline-none" // Position cancel icon
// >
// <MdCancel size={24} aria-hidden="true" />
// </button>
// )}
// </div>
// <button
// type="button"
// className="inline-flex items-center px-10 py-3 border border-primary rounded-full font-medium text-primary focus:outline-none focus:ring-primary focus:border-primary cursor-pointer"
// onClick={handleAddRecipientClick}
// >
// Add recipient
// </button>
// </div>

// {filteredRecipients.length > 0 ? (
// <div>
// <div>
// <h3 className="text-gray font-medium relative after:content-[''] after:block after:w-full after:h-0.5 after:rounded-full after:bg-gray/20 after:mt-1">
// All
// </h3>
// <div className="pt-4 space-y-2">
// {filteredRecipients.map((recipient) => (
// <RecipientList
// key={recipient._id}
// recipient={recipient}
// isSelected={false}
// showCheckbox={false}
// />
// ))}
// </div>
// </div>
// </div>
// ) : (
// <div>
// <div>
// <h3 className="text-gray font-medium relative after:content-[''] after:block after:w-full after:h-0.5 after:rounded-full after:bg-gray/20 after:mt-1">
// Can't find your recipient?
// </h3>

// <div className="mt-4 hover:bg-lightgray p-4 rounded-2xl -mx-4 transition-colors duration-500 ease-in-out cursor-pointer" onClick={handleAddRecipientClick}>
// <div className="flex items-center justify-between">
// <div className="flex items-center">
// <div className="w-12 h-12 rounded-full bg-lightborder flex items-center justify-center relative">
// <CiBank size={24}/>
// <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full overflow-hidden">
// <FaCirclePlus className="text-green-400 bg-white" />
// </div>
// </div>
// <div className="ml-4">
// <h5 className="font-medium text-main capitalize">
// Enter their bank detials
// </h5>
// <p className="text-sm text-gray-600">
// you'll need their acoount information
// </p>
// </div>
// </div>
// <div className="">
// <IoIosArrowForward className="h-5 w-5 text-gray-500" />
// </div>
// </div>
// </div>
// </div>
// </div>
// )}
// </div>
// </section>
// );
// }

// frontend/src/app/dashboard/recipients/page.tsx
"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import RecipientList from "@/app/dashboard/components/RecipientList";
import { CiBank } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../hooks/useAuth";
import recipientService from "../../../services/recipient";
import { MdCancel } from "react-icons/md"; // Import MdCancel icon

export default function RecipientsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const { token } = useAuth();
  const [recipients, setRecipients] = useState([]);
  const [loadingRecipients, setLoadingRecipients] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false); // State to track screen size

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example breakpoint, adjust as needed
    };

    checkScreenSize(); // Check initial screen size
    window.addEventListener("resize", checkScreenSize); // Add listener for resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup listener on unmount
    };
  }, []);

  useEffect(() => {
    const fetchRecipients = async () => {
      setLoadingRecipients(true);
      setError(null);
      try {
        const data = await recipientService.getUserRecipients(token);
        setRecipients(data);
      } catch (err: any) {
        setError(err.message || "Failed to load recipients.");
        console.error("Error fetching recipients:", err);
      } finally {
        setLoadingRecipients(false);
      }
    };

    if (token) {
      fetchRecipients();
    }
  }, [token]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  const filteredRecipients = recipients.filter((recipient) => {
    const recipientName = recipient.accountHolderName;
    if (recipientName) {
      return recipientName.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const handleAddRecipientClick = () => {
    router.push("/dashboard/recipients/addrecipient");
  };

  if (loadingRecipients) {
    return (
      <section className="Beneficiaries-Page py-10">
        <div className="container mx-auto">Loading recipients...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="Beneficiaries-Page py-10">
        <div className="container mx-auto text-red-500">
          Error loading recipients: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="Beneficiaries-Page py-10">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between ">
          <h1 className="sm:text-3xl text-2xl font-semibold text-mainheading dark:text-white">Recipients</h1>
          {/* Conditionally render in small screen */}
          {isSmallScreen && ( // Conditionally render based on isSmallScreen state
            <button
              className="bg-primary text-neutral-900 hover:bg-primaryhover font-medium px-4 py-1 rounded-full transition-all duration-75 ease-linear cursor-pointer"
              onClick={handleAddRecipientClick} // Add onClick handler for small screen button
            >
              Add
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <FiSearch className="h-5 w-5 text-neutral-900 dark:text-white" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="w-full rounded-full h-12.5 py-3 pl-12 pr-3 border transition-shadow ease-in-out duration-300 border-neutral-900 hover:shadow-darkcolor dark:hover:shadow-whitecolor dark:border-white focus:outline-0 focus:ring-0 dark:focus:shadow-whitecolor focus:shadow-darkcolor placeholder:text-neutral-900 dark:placeholder:text-white" // Increased pr-10 to accommodate cancel icon
              placeholder="Search existing recipients"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && ( // Conditionally render the cancel icon
              <button
                onClick={clearSearchTerm}
                className="absolute inset-y-0 right-3 flex items-center text-neutral-900 dark:text-primary focus:outline-none cursor-pointer" // Position cancel icon
              >
                <MdCancel size={24} aria-hidden="true" />
              </button>
            )}
          </div>
          {!isSmallScreen && (
            <button
              type="button"
              className="inline-flex items-center bg-primary text-neutral-900 hover:bg-primaryhover space-x-3 py-3 px-4 h-12.5 font-medium rounded-full transition-all duration-75 ease-linear cursor-pointer"
              onClick={handleAddRecipientClick}
            >
              Add recipient
            </button>
          )}
        </div>

        {filteredRecipients.length > 0 ? (
          <div>
            <div>
              <h3 className="font-medium text-gray-600 dark:text-white mb-3 relative after:content-[''] after:block after:w-full after:h-px after:bg-gray-200 dark:after:bg-primarybox after:mt-1">
                All
              </h3>
              <div className="space-y-2">
                {filteredRecipients.map((recipient) => (
                  <RecipientList
                    key={recipient._id}
                    recipient={recipient}
                    isSelected={false}
                    showCheckbox={false}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h3 className="font-medium text-gray-600 dark:text-white mb-3 relative after:content-[''] after:block after:w-full after:h-px after:bg-gray-200 dark:after:bg-primarybox after:mt-1">
                Can't find your recipient?
              </h3>

              <div
                className="block hover:bg-lightgray dark:hover:bg-primarybox p-2 sm:p-4 rounded-2xl transition-all duration-75 ease-linear cursor-pointer"
                onClick={handleAddRecipientClick}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-lightborder dark:bg-secondarybox flex items-center justify-center relative">
                      <CiBank size={24} className="text-neutral-900 dark:text-white"/>
                      <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full overflow-hidden">
                        <FaCirclePlus className="text-green-400 bg-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-neutral-900 dark:text-white text-sm md:text-base">
                        Enter their bank detials
                      </h5>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
                        you'll need their acoount information
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <IoIosArrowForward className="h-5 w-5 text-neutral-900 dark:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
