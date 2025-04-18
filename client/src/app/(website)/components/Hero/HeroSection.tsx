// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt  } from "react-icons/ai";
// import { SlLock  } from "react-icons/sl";
// import { IoIosInformationCircleOutline } from "react-icons/io";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">

//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <PiCurrencyCircleDollar size={22} className="text-green" />
//                 <span className="font-medium text-main">Low fees</span>
//                 <span className="">- fees get cheaper the more you send</span>
//               </div>
//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <AiOutlineThunderbolt size={22} className="text-green " />
//                 <span className="font-medium text-main">Lightning fast</span>
//                 <span className="">
//                   - money typically arrives in seconds{" "}
//                   <IoIosInformationCircleOutline size={18} className="inline-block ml-2" />
//                 </span>
//               </div>
//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <SlLock size={22} className="text-green" />
//                 <span className="font-medium text-main">
//                   Perfectly predictable
//                 </span>
//                 <span className="">
//                   - lock in an exchange rate for up to 48 hours
//                 </span>
//               </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSendAmount(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setReceiveAmount(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleSendCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedSendCurrency(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedReceiveCurrency(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-gray-500 dark:text-gray-300 mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full h-16 p-3 border rounded-lg shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full"
//                     />
//                     {/* Country Dropdown :- Change Country */}
//                     <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={INR}
//                           alt="INR-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>INR</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full h-16 p-3 border border-gray-300 rounded-lg shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full"
//                     />

//                     {/* Country Dropdown :- Change Country */}
//                     <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={USD}
//                           alt="USD-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>USD</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-md flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-lg p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSendAmount(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setReceiveAmount(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleSendCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedSendCurrency(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedReceiveCurrency(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}
//                     {/* <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={INR}
//                           alt="INR-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>INR</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div> */}
//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={handleSendCurrencyChange}
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}
//                     {/* <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={USD}
//                           alt="USD-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>USD</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div> */}
//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={handleReceiveCurrencyChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   // Placeholder exchange rates (replace with API call in a real application)
//   const exchangeRates: { [key: string]: { [key: string]: number } } = {
//     INR: {
//       USD: 0.012, // 1 INR = 0.012 USD
//       EUR: 0.011, // 1 INR = 0.011 EUR
//       GBP: 0.0095, // 1 INR = 0.0095 GBP
//       INR: 1, // 1 INR = 1 INR
//     },
//     USD: {
//       INR: 83.33, // 1 USD = 83.33 INR
//       EUR: 0.92, // 1 USD = 0.92 EUR
//       GBP: 0.79, // 1 USD = 0.79 GBP
//       USD: 1, // 1 USD = 1 USD
//     },
//     EUR: {
//       INR: 90.91, // 1 EUR = 90.90 INR
//       USD: 1.09, // 1 EUR = 1.09 USD
//       GBP: 0.86, // 1 EUR = 0.86 GBP
//       EUR: 1,
//     },
//     GBP: {
//       INR: 105.26, // 1 GBP = 105.26 INR
//       USD: 1.27, // 1 GBP = 1.27 USD
//       EUR: 1.17, //1 GBP = 1.17 EUR
//       GBP: 1, // 1 GBP = 1 GBP
//     },
//   };

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "0.00"; // Or some other default/error handling
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);

//     const rate =
//       exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;
//     setReceiveAmount(convertAndFormat(newSendAmount, rate));
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     // Calculate the inverse rate for conversion
//     const rate =
//       exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//     setSendAmount(convertAndFormat(newReceiveAmount, rate));
//   };

//   // Generic currency change handler (used for both send and receive)
//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     // Use the selected currencies for rate lookup.  Default to 1 if not found.
//     const rate = isSendCurrency
//       ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//       : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;

//     if (isSendCurrency) {
//       setReceiveAmount(
//         convertAndFormat(
//           sendAmount,
//           exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         )
//       );
//     } else {
//       setSendAmount(
//         convertAndFormat(
//           receiveAmount,
//           exchangeRates[newCurrency]?.[selectedSendCurrency] || 1
//         )
//       );
//     }
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// interface ExchangeRates {
//   [key: string]: number;
// }
// interface ApiResponse {
//     success: boolean;
//     timestamp: number;
//     base: string;
//     date: string;
//     rates: ExchangeRates
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState(""); // Default to empty
//   const [receiveAmount, setReceiveAmount] = useState(""); // Default to empty
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0); // For displayed locked-in rate
//     const [sendFee, setSendFee] = useState(0)
//     const [gst, setGst] = useState(0)

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1&symbols=USD,INR,EUR,GBP"
//         );
//         const data:ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: { [key: string]: { [key: string]: number } } = {};
//           const baseRate = data.rates; // Rates relative to EUR

//             //Add base rate to Transformed Rate
//            Object.keys(baseRate).forEach(baseCurrency => {
//             transformedRates[baseCurrency] = {};
//             Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//               });
//                transformedRates[baseCurrency][baseCurrency] = 1; //1:1 conversion
//             });

//             //Added EUR to object
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//             //console.log("Transformed Rates ", transformedRates);
//           setExchangeRates(transformedRates);

//             const initialRate =
//                 transformedRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;
//             setRate(initialRate)
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount

//     // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   // Generic currency change handler (used for both send and receive)
//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       // Use the selected currencies for rate lookup.  Default to 1 if not found.
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;

//          setRate(newRate);

//       if (isSendCurrency) {
//         setReceiveAmount(
//           convertAndFormat(sendAmount, newRate)
//         );
//       } else {
//           // Using newRate directly because we already looked it up
//         setSendAmount(
//           convertAndFormat(receiveAmount, 1/newRate)
//         );
//       }
//     }
//   };

//   // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                     <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg"; // You might not need these if you use the dropdown for all currencies
// import INR from "../../../../public/assets/icons/inr.svg"; // You might not need these if you use the dropdown for all currencies

// import CountryDropdown from "../../components/CountryDropdown";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number }; // Corrected: Nested object for rates
// }
// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number }; // Rates are relative to the base
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({}); // Initialize as empty object
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1" // Removed symbols, fetch all
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates; // Rates relative to EUR (from the API)

//           // Build the transformed rates, including the base currency (EUR) itself.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // Add the 1:1 conversion
//           }
//             // Add EUR explicitly (it is already relative to itself)
//             transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.[
//               selectedReceiveCurrency
//             ] || 1;
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message.
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors.
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount.

//   // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;
//       setRate(newRate);

//       if (isSendCurrency) {
//           // New send currency, update receive amount
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       } else {
//           // New receive currency, update send amount
//         setSendAmount(convertAndFormat(receiveAmount, 1/newRate));
//       }
//     }
//   };

//     // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex md:flex-row flex-col md:items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore}
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store <span className="text-gray">1.5L reviews</span>
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore}
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play <span className="text-gray">11L reviews</span>
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (2.15%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosArrowForward,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number }; // Corrected: Nested object for rates
// }
// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number }; // Rates are relative to the base
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({}); // Initialize as empty object
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1" // Removed symbols, fetch all
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates; // Rates relative to EUR (from the API)

//           // Build the transformed rates, including the base currency (EUR) itself.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // Add the 1:1 conversion
//           }
//             // Add EUR explicitly (it is already relative to itself)
//             transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.[
//               selectedReceiveCurrency
//             ] || 1;
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message.
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors.
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount.

//   // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;
//       setRate(newRate);

//       if (isSendCurrency) {
//           // New send currency, update receive amount
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       } else {
//           // New receive currency, update send amount
//         setSendAmount(convertAndFormat(receiveAmount, 1/newRate));
//       }
//     }
//   };

//     // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div>
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (2.15%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image"; // Import Image from next/image
// import inr from "../../../../../public/assets/icons/inr.svg"; // Import INR SVG

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD"); // Default to USD
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1"
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1;
//           }
//            transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.["INR"] || 1; // INR is fixed for receive
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   // useEffect(() => {
//   //     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //     const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //     const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//   //     const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//   //       setSendFee(calculatedSendFee);
//   //       setGst(calculatedGST);
//   // }, [sendAmount]);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//       if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//         setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//       }
//   };

//  const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//      const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//         setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//     return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//                 <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold">&nbsp;2.2%&nbsp;</span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icons/inr.svg";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   date: string;
//   base: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=87da35d4dd2e48fd8c736c5fc4cfc359"
//         );
//         const data: ApiResponse = await response.json();

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   //  useEffect(() => {
//   //       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //       const calculatedSendFee = numericSendAmount * (1337 / 80000); // Example calculation based on sample data
//   //       const calculatedGST = numericSendAmount * (381.57 / 80000) // Example calculation based on sample data

//   //         setSendFee(calculatedSendFee);
//   //         setGst(calculatedGST);
//   //   }, [sendAmount]);

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Last Complete Code
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icons/inr.svg";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   date: string;
//   base: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         // Access the API key from the environment variable
//         const apiKey = process.env.NEXT_PUBLIC_CURRENCY_FREAKS_API_KEY;

//         if (!apiKey) {
//           console.error("API key is not defined in environment variables.");
//           // Handle the missing API key appropriately, e.g., display an error message.
//           setLoadingRates(false); // Stop loading even if there's an error.
//           return;  // Exit the function
//         }

//         const response = await fetch(
//           `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`
//         );
//         const data: ApiResponse = await response.json();

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   //  useEffect(() => {
//   //       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //       const calculatedSendFee = numericSendAmount * (1337 / 80000); // Example calculation based on sample data
//   //       const calculatedGST = numericSendAmount * (381.57 / 80000) // Example calculation based on sample data

//   //         setSendFee(calculatedSendFee);
//   //         setGst(calculatedGST);
//   //   }, [sendAmount]);

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // New Latest Code
// // app/components/Home/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../layout"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   rates: {
//     date: string;
//     base: string;
//     rates: { [key: string]: number };
//   }
// }

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown  //CountryDropdown is not defined in this file its in down of this page
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../layout"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// // Removed unused ApiResponse interface

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   // Removed unused selectedReceiveCurrency state and its setter
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee] = useState(0); // Removed unused setSendFee
//   const [gst] = useState(0); // Removed unused setGst
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   {/* Fixed unescaped entity */}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../../contexts/WebsiteAppContext"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// // Removed unused ApiResponse interface

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   // Removed unused selectedReceiveCurrency state and its setter
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee] = useState(0); // Removed unused setSendFee
//   const [gst] = useState(0); // Removed unused setGst
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   {/* Fixed unescaped entity */}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee {/* Changed ' to ' */}
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../../contexts/WebsiteAppContext";
// import exchangeRateService from '../../../services/exchangeRate'; // Corrected path assuming it's in src/app/services

// // Define an interface for the expected structure of the rates object
// interface RatesMap {
//   [key: string]: number;
// }

// // Define an interface for the expected service response structure
// interface ExchangeRateResponse {
//   // Adjust this based on the actual structure returned by your service
//   // Common examples include: base, date, success, timestamp etc.
//   // The crucial part is the 'rates' property.
//   rates: RatesMap;
//   // Add other properties if they exist, e.g., base?: string;
// }

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext();
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0); // Rate: 1 SendCurrency = X INR
//   const [sendFee] = useState(0);
//   const [gst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         // Assume the service returns an object like { rates: { USD: 1, INR: 83.5, ... } }
//         // Adding a type assertion here helps TypeScript, but ideally, the service function
//         // should have a specific return type (Promise<ExchangeRateResponse>).
//         const response = await exchangeRateService.getExchangeRatesForCurrencies() as ExchangeRateResponse; // Type assertion

//         // Access the rates map directly
//         const fetchedRates = response?.rates; // Use optional chaining for safety

//         if (fetchedRates && typeof fetchedRates === 'object' && Object.keys(fetchedRates).length > 0) {
//           const transformedRates: ExchangeRates = {};
//           const baseCurrencyRates = fetchedRates; // This is the map like { "USD": 1, "EUR": 0.9, "INR": 83 }

//           // Build the cross-rates object
//           // This assumes the fetchedRates are relative to a single base (e.g., USD or EUR)
//           // Let's find the base currency if not explicitly provided (often it's USD or EUR in free APIs)
//           // For simplicity, let's assume the API gives rates relative to USD or you know the base.
//           // If the API provides rates relative to EUR, adjust calculations accordingly.

//           // Example: Assuming fetchedRates are relative to a base (like USD)
//           // We want to calculate rate from ANY currency to ANY OTHER currency
//           const allCurrencies = Object.keys(baseCurrencyRates);

//           for (const fromCurrency of allCurrencies) {
//             transformedRates[fromCurrency] = {};
//             for (const toCurrency of allCurrencies) {
//                 // Rate formula: (Rate of ToCurrency / Rate of FromCurrency)
//                 // Example: USD to INR = (INR rate / USD rate)
//                 // Example: GBP to INR = (INR rate / GBP rate)
//                 transformedRates[fromCurrency][toCurrency] =
//                     (baseCurrencyRates[toCurrency] || 0) / (baseCurrencyRates[fromCurrency] || 1); // Avoid division by zero
//             }
//             transformedRates[fromCurrency][fromCurrency] = 1; // 1:1 for same currency
//           }

//           setExchangeRates(transformedRates);

//           // Set the initial rate based on the *selected* send currency to INR
//           const initialRateToINR = transformedRates[selectedSendCurrency]?.["INR"];

//           if (initialRateToINR) {
//              setRate(initialRateToINR);
//              // Recalculate receive amount if send amount already exists
//               if (sendAmount) {
//                  setReceiveAmount(convertAndFormat(sendAmount, initialRateToINR));
//               }
//           } else {
//              console.warn(`Rate from ${selectedSendCurrency} to INR not found. Defaulting.`);
//              // Provide a fallback or handle the error appropriately
//              setRate(87.2); // Fallback default
//              if (sendAmount) {
//                  setReceiveAmount(convertAndFormat(sendAmount, 87.2));
//              }
//           }

//         } else {
//           console.error("Failed to fetch exchange rates: 'rates' property missing or invalid in response", response);
//           // Handle error state, maybe set a default rate
//            setRate(87.2); // Fallback default on error
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error); // Log the actual error
//         // Handle error state
//          setRate(87.2); // Fallback default on error
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//     // Re-fetch when selectedSendCurrency changes
//   }, [selectedSendCurrency]); // Dependency array is correct

//   const convertAndFormat = (amount: string, conversionRate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount) || !conversionRate) { // Also check if rate is valid
//       return "0.00"; // Return formatted zero or empty string
//     }
//     const convertedAmount = numericAmount * conversionRate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;
//     const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, ''); // Allow only numbers and one dot
//     // Prevent multiple dots
//     if (sanitizedAmount.split('.').length > 2) {
//         return;
//     }
//     setSendAmount(sanitizedAmount);

//     if (!loadingRates && exchangeRates[selectedSendCurrency]) {
//        const currentRateToINR = exchangeRates[selectedSendCurrency]?.["INR"] || 0; // Get rate to INR
//        setRate(currentRateToINR); // Update the displayed rate
//        setReceiveAmount(convertAndFormat(sanitizedAmount, currentRateToINR));
//     } else if (!loadingRates) {
//         // Handle case where rates are loaded but the specific currency pair isn't available
//         console.warn(`Rate for ${selectedSendCurrency} to INR not available.`);
//         setReceiveAmount("0.00");
//         setRate(0); // Reset rate display
//     }
//   };

//  const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency && newCurrency !== selectedSendCurrency) { // Prevent unnecessary updates
//       setSelectedSendCurrency(newCurrency); // Update context

//       // Recalculation will happen automatically via the useEffect hook
//       // triggered by the change in selectedSendCurrency.
//       // We can also update the rate display immediately if rates are available:
//       if (!loadingRates && exchangeRates[newCurrency]) {
//           const newRateToINR = exchangeRates[newCurrency]?.["INR"] || 0;
//           setRate(newRateToINR);
//           setReceiveAmount(convertAndFormat(sendAmount, newRateToINR)); // Recalculate with new rate
//       } else if (!loadingRates) {
//            console.warn(`Rates not loaded or rate for ${newCurrency} to INR not available.`);
//            setRate(0); // Reset rate display
//            setReceiveAmount("0.00"); // Reset receive amount
//       }
//     }
//     // Receive currency is fixed to INR, so no 'else' block needed.
//   };

//   useEffect(() => {
//     const today = new Date();
//     const arrival = new Date(today);
//     // Basic estimate: add 2 business days (skipping weekends)
//     let daysToAdd = 2;
//     let currentDay = today.getDay(); // 0 = Sunday, 6 = Saturday
//     while (daysToAdd > 0) {
//         arrival.setDate(arrival.getDate() + 1);
//         currentDay = arrival.getDay();
//         if (currentDay !== 0 && currentDay !== 6) { // If not Sunday or Saturday
//             daysToAdd--;
//         }
//     }

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     if (rate > 0) {
//         // Show rate from selected Send Currency to INR
//         return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`;
//     }
//     return "Rate unavailable"; // Handle case where rate couldn't be determined
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white dark:bg-background">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto"> {/* Consider max-w-xl instead of w-xl */}
//             <div className="bg-white dark:bg-background rounded-3xl shadow-lg md:p-8 p-4 border">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-2 text-primary font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-primary text-mainheading  rounded-full py-1 px-2 inline-block mt-1"> {/* Adjusted text size */}
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label htmlFor="sendAmountInput" className="block font-medium text-gray-500 dark:text-gray-300 mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border rounded-xl  flex items-center justify-between"> {/* Added focus styles */}
//                     <input
//                       id="sendAmountInput"
//                       type="text" // Use text to allow formatting, validation handles numbers
//                       inputMode="decimal" // Hint for mobile keyboards
//                       placeholder="0.00"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-14 p-3 text-mainheading dark:text-white text-2xl font-black focus:outline-none" // Ensure input bg is transparent
//                     />
//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-mainheading dark:text-white mt-1 text-sm rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?
//                   <button type="button" className="underline cursor-pointer text-primary font-medium">
//                     We&apos;ll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label htmlFor="receiveAmountInput" className="block font-medium text-gray-500 dark:text-gray-300 mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border rounded-xl flex items-center justify-between"> {/* Added subtle bg for readonly */}
//                   <input
//                     id="receiveAmountInput"
//                     type="text" // Display only, so text is fine
//                     placeholder="0.00" // Show decimal format
//                     value={receiveAmount || "0.00"} // Display 0.00 if empty
//                     readOnly
//                     className="block w-full h-14 p-3 text-mainheading dark:text-white text-2xl font-black focus:outline-none" // Ensure input bg is transparent
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2"> {/* Adjusted padding/width */}
//                     <Image src={inr} alt="INR Flag" width={24} height={24} />
//                     <p className="text-mainheading dark:text-white  font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-gray-500 dark:text-gray-300 mb-1">
//                   Paying with
//                 </label>
//                 <div className="bg-lightgray dark:bg-background p-3 h-16 border rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-mainheading dark:text-white font-semibold">Bank transfer</span>
//                   </div>
//                   <button type="button" className="text-green font-medium bg-green/10 hover:bg-green/20 px-3 py-2 rounded-full text-sm inline-flex items-center gap-1 transition-colors"> {/* Adjusted gap */}
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between"> {/* Removed text- alignment */}
//                   <span className="text-mainheading dark:text-white">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray-500 dark:text-gray-300">0 {selectedSendCurrency}</span> {/* Adjusted color */}
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-mainheading dark:text-white ">Our fee</span>
//                   <span className="text-gray-500 dark:text-gray-300">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-mainheading dark:text-white ">GST</span>
//                   <span className="text-gray-500 dark:text-gray-300">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2" /> {/* Adjusted color */}
//                 <div className="flex justify-between text-mainheading dark:text-white font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//                <div className="mt-2 text-sm text-gray-500 dark:text-gray-300"> {/* Adjusted margin/color/spacing */}
//                 <p>You could save<span className="text-primary font-bold">2.2%</span>on the payment you make.</p> {/* Use mx-1 for spacing */}
//                 <p>
//                   Should arrive by
//                   <span className="text-primary font-medium">{arrivalDate || '...'}</span> {/* Fallback for arrival date */}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2"> {/* Adjusted gap */}
//                 <button type="button" className="w-full inline-flex items-center justify-center px-6 py-3 h-14 cursor-pointer border dark:text-white font-medium rounded-full text-mainheading  hover:bg-button transition-colors duration-300 ease-in-out"> {/* Adjusted hover */}
//                   Compare fees
//                 </button>
//                 <button type="button" className="w-full inline-flex items-center justify-center px-6 py-3 h-14 cursor-pointer border border-transparent font-medium rounded-full text-mainheading bg-primary hover:bg-primaryhover transition-colors duration-300 ease-in-out"> {/* Standard green button */}
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt  } from "react-icons/ai";
// import { SlLock  } from "react-icons/sl";
// import { IoIosInformationCircleOutline } from "react-icons/io";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">

//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <PiCurrencyCircleDollar size={22} className="text-green" />
//                 <span className="font-medium text-main">Low fees</span>
//                 <span className="">- fees get cheaper the more you send</span>
//               </div>
//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <AiOutlineThunderbolt size={22} className="text-green " />
//                 <span className="font-medium text-main">Lightning fast</span>
//                 <span className="">
//                   - money typically arrives in seconds{" "}
//                   <IoIosInformationCircleOutline size={18} className="inline-block ml-2" />
//                 </span>
//               </div>
//               <div className="flex items-center text-gray gap-2 text-lg">
//                 <SlLock size={22} className="text-green" />
//                 <span className="font-medium text-main">
//                   Perfectly predictable
//                 </span>
//                 <span className="">
//                   - lock in an exchange rate for up to 48 hours
//                 </span>
//               </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSendAmount(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setReceiveAmount(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleSendCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedSendCurrency(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedReceiveCurrency(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-gray-500 dark:text-gray-300 mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full h-16 p-3 border rounded-lg shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full"
//                     />
//                     {/* Country Dropdown :- Change Country */}
//                     <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={INR}
//                           alt="INR-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>INR</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full h-16 p-3 border border-gray-300 rounded-lg shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full"
//                     />

//                     {/* Country Dropdown :- Change Country */}
//                     <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={USD}
//                           alt="USD-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>USD</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-md flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-lg p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSendAmount(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setReceiveAmount(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleSendCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedSendCurrency(event.target.value);
//     //  Add logic here to update receiveAmount based on the new sendAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   const handleReceiveCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedReceiveCurrency(event.target.value);
//     //  Add logic here to update sendAmount based on the new receiveAmount and currency
//     //  For a real application, you'd call an API or use a conversion function
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}
//                     {/* <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={INR}
//                           alt="INR-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>INR</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div> */}
//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={handleSendCurrencyChange}
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}
//                     {/* <div className="flex items-center gap-2 w-28">
//                       <div className="flex items-center gap-2">
//                         <Image
//                           src={USD}
//                           alt="USD-Flag"
//                           width={24}
//                           height={24}
//                         />
//                         <p>USD</p>
//                       </div>
//                       <IoIosArrowDown size={18} />
//                     </div> */}
//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={handleReceiveCurrencyChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("80,000");
//   const [receiveAmount, setReceiveAmount] = useState("897.85");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("USD");

//   // Placeholder exchange rates (replace with API call in a real application)
//   const exchangeRates: { [key: string]: { [key: string]: number } } = {
//     INR: {
//       USD: 0.012, // 1 INR = 0.012 USD
//       EUR: 0.011, // 1 INR = 0.011 EUR
//       GBP: 0.0095, // 1 INR = 0.0095 GBP
//       INR: 1, // 1 INR = 1 INR
//     },
//     USD: {
//       INR: 83.33, // 1 USD = 83.33 INR
//       EUR: 0.92, // 1 USD = 0.92 EUR
//       GBP: 0.79, // 1 USD = 0.79 GBP
//       USD: 1, // 1 USD = 1 USD
//     },
//     EUR: {
//       INR: 90.91, // 1 EUR = 90.90 INR
//       USD: 1.09, // 1 EUR = 1.09 USD
//       GBP: 0.86, // 1 EUR = 0.86 GBP
//       EUR: 1,
//     },
//     GBP: {
//       INR: 105.26, // 1 GBP = 105.26 INR
//       USD: 1.27, // 1 GBP = 1.27 USD
//       EUR: 1.17, //1 GBP = 1.17 EUR
//       GBP: 1, // 1 GBP = 1 GBP
//     },
//   };

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "0.00"; // Or some other default/error handling
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);

//     const rate =
//       exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;
//     setReceiveAmount(convertAndFormat(newSendAmount, rate));
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     // Calculate the inverse rate for conversion
//     const rate =
//       exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//     setSendAmount(convertAndFormat(newReceiveAmount, rate));
//   };

//   // Generic currency change handler (used for both send and receive)
//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     // Use the selected currencies for rate lookup.  Default to 1 if not found.
//     const rate = isSendCurrency
//       ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//       : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;

//     if (isSendCurrency) {
//       setReceiveAmount(
//         convertAndFormat(
//           sendAmount,
//           exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         )
//       );
//     } else {
//       setSendAmount(
//         convertAndFormat(
//           receiveAmount,
//           exchangeRates[newCurrency]?.[selectedSendCurrency] || 1
//         )
//       );
//     }
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   1 USD = 87.1878 INR
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">1,337 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">381.57 INR</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                   <span>1,718.57 INR</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg";
// import INR from "../../../../public/assets/icons/inr.svg";

// import CountryDropdown from "../../components/CountryDropdown";

// interface ExchangeRates {
//   [key: string]: number;
// }
// interface ApiResponse {
//     success: boolean;
//     timestamp: number;
//     base: string;
//     date: string;
//     rates: ExchangeRates
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState(""); // Default to empty
//   const [receiveAmount, setReceiveAmount] = useState(""); // Default to empty
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0); // For displayed locked-in rate
//     const [sendFee, setSendFee] = useState(0)
//     const [gst, setGst] = useState(0)

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1&symbols=USD,INR,EUR,GBP"
//         );
//         const data:ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: { [key: string]: { [key: string]: number } } = {};
//           const baseRate = data.rates; // Rates relative to EUR

//             //Add base rate to Transformed Rate
//            Object.keys(baseRate).forEach(baseCurrency => {
//             transformedRates[baseCurrency] = {};
//             Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//               });
//                transformedRates[baseCurrency][baseCurrency] = 1; //1:1 conversion
//             });

//             //Added EUR to object
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//             //console.log("Transformed Rates ", transformedRates);
//           setExchangeRates(transformedRates);

//             const initialRate =
//                 transformedRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;
//             setRate(initialRate)
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount

//     // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   // Generic currency change handler (used for both send and receive)
//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       // Use the selected currencies for rate lookup.  Default to 1 if not found.
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;

//          setRate(newRate);

//       if (isSendCurrency) {
//         setReceiveAmount(
//           convertAndFormat(sendAmount, newRate)
//         );
//       } else {
//           // Using newRate directly because we already looked it up
//         setSendAmount(
//           convertAndFormat(receiveAmount, 1/newRate)
//         );
//       }
//     }
//   };

//   // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore} // Replace with your App Store logo path
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store 1.5L reviews
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore} // Replace with your Google Play logo path
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play 11L reviews
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-1/2">
//             <div className="bg-white rounded-3xl shadow-lg p-8 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 bg-cyan-100/30 rounded-md p-2">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main font-medium">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 INR</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main font-medium">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-medium">
//                   <span>Total included fees (2.15%)</span>
//                     <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCurrencyCircleDollar } from "react-icons/pi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosInformationCircleOutline,
//   IoIosArrowForward,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import appstore from "../../../../public/assets/images/app-store-logo.png";
// import playstore from "../../../../public/assets/images/play-store-logo.png";
// import USD from "../../../../public/assets/icons/usd.svg"; // You might not need these if you use the dropdown for all currencies
// import INR from "../../../../public/assets/icons/inr.svg"; // You might not need these if you use the dropdown for all currencies

// import CountryDropdown from "../../components/CountryDropdown";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number }; // Corrected: Nested object for rates
// }
// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number }; // Rates are relative to the base
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({}); // Initialize as empty object
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1" // Removed symbols, fetch all
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates; // Rates relative to EUR (from the API)

//           // Build the transformed rates, including the base currency (EUR) itself.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // Add the 1:1 conversion
//           }
//             // Add EUR explicitly (it is already relative to itself)
//             transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.[
//               selectedReceiveCurrency
//             ] || 1;
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message.
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors.
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount.

//   // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;
//       setRate(newRate);

//       if (isSendCurrency) {
//           // New send currency, update receive amount
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       } else {
//           // New receive currency, update send amount
//         setSendAmount(convertAndFormat(receiveAmount, 1/newRate));
//       }
//     }
//   };

//     // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5">
//             <div className="flex md:flex-row flex-col md:items-center gap-4">
//               <Link
//                 href="https://apps.apple.com/us/app/wise-international-transfers/id612261027"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={appstore}
//                     alt="Download on the App Store"
//                     width={24}
//                     height={24}
//                     className=" rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on App Store <span className="text-gray">1.5L reviews</span>
//                 </span>
//               </Link>
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.transferwise.android&referrer=singular_click_id%3Dc8855d7f-0ce0-4d7a-8826-05bc781ff841&utm_source=wise.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center"
//               >
//                 <div>
//                   <Image
//                     src={playstore}
//                     alt="Get it on Google Play"
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-green ml-2">
//                   4.8 ★ on Google Play <span className="text-gray">11L reviews</span>
//                 </span>
//               </Link>
//             </div>

//             <div>
//               <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-main uppercase ">
//                 Send Money Globally For Less
//               </h1>
//             </div>

//             <div className="">
//               <p className="text-lg font-semibold text-gray leading-relaxed tracking-wider text-wrap ">
//                 Join over 12.8 million people sending money everywhere —{" "}
//                 <button className="text-green underline cursor-pointer">
//                   with fees as low as 0.1%.
//                 </button>
//               </p>
//               <div className="flex flex-col gap-4 mt-6">
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <PiCurrencyCircleDollar size={22} className="text-green" />
//                   <span className="font-medium text-main">Low fees</span>
//                   <span className="">- fees get cheaper the more you send</span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <AiOutlineThunderbolt size={22} className="text-green " />
//                   <span className="font-medium text-main">Lightning fast</span>
//                   <span className="">
//                     - money typically arrives in seconds{" "}
//                     <IoIosInformationCircleOutline
//                       size={18}
//                       className="inline-block ml-2"
//                     />
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray gap-2 text-lg">
//                   <SlLock size={22} className="text-green" />
//                   <span className="font-medium text-main">
//                     Perfectly predictable
//                   </span>
//                   <span className="">
//                     - lock in an exchange rate for up to 48 hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link
//                 href="/signup"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out"
//               >
//                 Open an account in minutes
//               </Link>
//             </div>
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 bo relative">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div className="relative">
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="relative">
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (2.15%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-hover:bg-button hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import {
//   IoIosArrowForward,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";

// import { useState, useEffect } from "react";

// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number }; // Corrected: Nested object for rates
// }
// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number }; // Rates are relative to the base
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("INR");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] =
//     useState("USD");
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({}); // Initialize as empty object
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1" // Removed symbols, fetch all
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           // Transform to have all rates relative to each currency
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates; // Rates relative to EUR (from the API)

//           // Build the transformed rates, including the base currency (EUR) itself.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // Add the 1:1 conversion
//           }
//             // Add EUR explicitly (it is already relative to itself)
//             transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.[
//               selectedReceiveCurrency
//             ] || 1;
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//           // Handle the error appropriately, perhaps set a default rate or show an error message.
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         // Handle network errors.
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []); // Run only once on component mount.

//   // Calculate fees (Simplified)
//     useEffect(() => {
//       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//       const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//       const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//         setSendFee(calculatedSendFee);
//         setGst(calculatedGST);
//     }, [sendAmount]);

//   // Utility function to convert and format numbers
//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return ""; // Return empty string for invalid input
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//     if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.[selectedReceiveCurrency] || 1;

//       setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//     }
//   };

//   const handleReceiveAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const newReceiveAmount = event.target.value;
//     setReceiveAmount(newReceiveAmount);

//     if (!loadingRates) {
//          const currentRate = exchangeRates[selectedReceiveCurrency]?.[selectedSendCurrency] || 1;
//          setSendAmount(convertAndFormat(newReceiveAmount, 1/currentRate));
//     }
//   };

//   const handleCurrencyChange = (
//     isSendCurrency: boolean,
//     newCurrency: string
//   ) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);
//     } else {
//       setSelectedReceiveCurrency(newCurrency);
//     }

//     if (!loadingRates) {
//       const newRate = isSendCurrency
//         ? exchangeRates[newCurrency]?.[selectedReceiveCurrency] || 1
//         : exchangeRates[selectedSendCurrency]?.[newCurrency] || 1;
//       setRate(newRate);

//       if (isSendCurrency) {
//           // New send currency, update receive amount
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       } else {
//           // New receive currency, update send amount
//         setSendAmount(convertAndFormat(receiveAmount, 1/newRate));
//       }
//     }
//   };

//     // Helper Function to Display Rate
//   const displayRate = () => {
//       if (loadingRates) {
//           return "Loading...";
//       }

//       return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} ${selectedReceiveCurrency}`
//   }

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div>
//                   <div className=" w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between focus:outline-none focus:ring-green focus:border-main">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={receiveAmount}
//                       onChange={handleReceiveAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />

//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedReceiveCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(false, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (2.15%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save up to 5,441.86 INR</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">by Wednesday</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "@/app/components/ui/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image"; // Import Image from next/image
// import inr from "../../../../../public/assets/icon/inr.svg"; // Import INR SVG

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   success: boolean;
//   timestamp: number;
//   base: string;
//   date: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD"); // Default to USD
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.exchangeratesapi.io/v1/latest?access_key=048c243975abcd8ac5214d8f8107922b&format=1"
//         );
//         const data: ApiResponse = await response.json();

//         if (data.success) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1;
//           }
//            transformedRates["EUR"] = {};
//            Object.keys(baseRate).forEach(targetCurrency => {
//               transformedRates["EUR"][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate["EUR"];
//               });
//                transformedRates["EUR"]["EUR"] = 1; //1:1 conversion

//           setExchangeRates(transformedRates);

//           const initialRate =
//             transformedRates[selectedSendCurrency]?.["INR"] || 1; // INR is fixed for receive
//           setRate(initialRate);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   // useEffect(() => {
//   //     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //     const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //     const calculatedSendFee = numericSendAmount * (1337/80000); // Example calculation based on sample data
//   //     const calculatedGST = numericSendAmount * (381.57/80000) // Example calculation based on sample data

//   //       setSendFee(calculatedSendFee);
//   //       setGst(calculatedGST);
//   // }, [sendAmount]);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;
//     setSendAmount(newSendAmount);
//       if (!loadingRates) {
//         const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//         setReceiveAmount(convertAndFormat(newSendAmount, currentRate));
//       }
//   };

//  const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//      const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//         setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//     return (
//     <section className="Hero-Section py-12 bg-white dark:bg-background">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                    {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//                 <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                    <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                    <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold">&nbsp;2.2%&nbsp;</span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icons/inr.svg";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   date: string;
//   base: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await fetch(
//           "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=87da35d4dd2e48fd8c736c5fc4cfc359"
//         );
//         const data: ApiResponse = await response.json();

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   //  useEffect(() => {
//   //       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //       const calculatedSendFee = numericSendAmount * (1337 / 80000); // Example calculation based on sample data
//   //       const calculatedGST = numericSendAmount * (381.57 / 80000) // Example calculation based on sample data

//   //         setSendFee(calculatedSendFee);
//   //         setGst(calculatedGST);
//   //   }, [sendAmount]);

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Last Complete Code
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icons/inr.svg";

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   date: string;
//   base: string;
//   rates: { [key: string]: number };
// }

// const HeroSection: React.FC = () => {
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedSendCurrency, setSelectedSendCurrency] = useState("USD");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         // Access the API key from the environment variable
//         const apiKey = process.env.NEXT_PUBLIC_CURRENCY_FREAKS_API_KEY;

//         if (!apiKey) {
//           console.error("API key is not defined in environment variables.");
//           // Handle the missing API key appropriately, e.g., display an error message.
//           setLoadingRates(false); // Stop loading even if there's an error.
//           return;  // Exit the function
//         }

//         const response = await fetch(
//           `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`
//         );
//         const data: ApiResponse = await response.json();

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   //  useEffect(() => {
//   //       const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//   //       const feePercentage = 0.0215; // 2.15% as stated in the requirements
//   //       const calculatedSendFee = numericSendAmount * (1337 / 80000); // Example calculation based on sample data
//   //       const calculatedGST = numericSendAmount * (381.57 / 80000) // Example calculation based on sample data

//   //         setSendFee(calculatedSendFee);
//   //         setGst(calculatedGST);
//   //   }, [sendAmount]);

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // New Latest Code
// // app/components/Home/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../layout"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// interface ApiResponse {
//   rates: {
//     date: string;
//     base: string;
//     rates: { [key: string]: number };
//   }
// }

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState("INR"); // Fixed to INR
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee, setSendFee] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown  //CountryDropdown is not defined in this file its in down of this page
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../layout"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// // Removed unused ApiResponse interface

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   // Removed unused selectedReceiveCurrency state and its setter
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee] = useState(0); // Removed unused setSendFee
//   const [gst] = useState(0); // Removed unused setGst
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   {/* Fixed unescaped entity */}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import { SlLock } from "react-icons/sl";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown"; //correct path
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../../contexts/WebsiteAppContext"; // Import the context hook.
// import exchangeRateService from '../../../services/exchangeRate'; // Import the service

// interface ExchangeRates {
//   [key: string]: { [key: string]: number };
// }

// // Removed unused ApiResponse interface

// const HeroSection: React.FC = () => {
//     const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext(); //get context
//     const [sendAmount, setSendAmount] = useState("");

//   const [receiveAmount, setReceiveAmount] = useState("");
//   // Removed unused selectedReceiveCurrency state and its setter
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
//   const [loadingRates, setLoadingRates] = useState(true);
//   const [rate, setRate] = useState(0);
//   const [sendFee] = useState(0); // Removed unused setSendFee
//   const [gst] = useState(0); // Removed unused setGst
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoadingRates(true);
//       try {
//         const response = await exchangeRateService.getExchangeRatesForCurrencies();
//         const data = response.rates; // Access the rates from the service response

//         if (data && data.rates) {
//           const transformedRates: ExchangeRates = {};
//           const baseRate = data.rates;

//           // Build the exchange rates object in the desired format.
//           for (const baseCurrency of Object.keys(baseRate)) {
//             transformedRates[baseCurrency] = {};
//             for (const targetCurrency of Object.keys(baseRate)) {
//               transformedRates[baseCurrency][targetCurrency] =
//                 baseRate[targetCurrency] / baseRate[baseCurrency];
//             }
//             transformedRates[baseCurrency][baseCurrency] = 1; // 1:1 for same currency
//           }

//             //Corrected USD to INR Initialization
//           const initialRate = transformedRates[selectedSendCurrency]?.["INR"] || 87.2; // Default to a reasonable value if INR is missing.  Use the correct data structure.
//           setRate(initialRate);
//           setExchangeRates(transformedRates);
//         } else {
//           console.error("Failed to fetch exchange rates: No rates data in response", data); // More specific error log
//         }
//       } catch (error) {
//         console.error("Error fetching exchange rates:", JSON.stringify(error, null, 2)); // Log full error object
//       } finally {
//         setLoadingRates(false);
//       }
//     };

//     fetchExchangeRates();
//   }, [selectedSendCurrency]);  // Add selectedSendCurrency as a dependency

//   const convertAndFormat = (amount: string, rate: number) => {
//     const numericAmount = parseFloat(amount.replace(/,/g, ""));
//     if (isNaN(numericAmount)) {
//       return "";
//     }
//     const convertedAmount = numericAmount * rate;
//     return convertedAmount.toFixed(2);
//   };

//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSendAmount = event.target.value;

//     // Remove non-numeric characters except for the decimal point
//         const sanitizedAmount = newSendAmount.replace(/[^0-9.]/g, '');
//         setSendAmount(sanitizedAmount);

//     if (!loadingRates) {
//        const currentRate = exchangeRates[selectedSendCurrency]?.["INR"] || 1; // Always convert to INR
//       setReceiveAmount(convertAndFormat(sanitizedAmount, currentRate));
//     }
//   };

//   const handleCurrencyChange = (isSendCurrency: boolean, newCurrency: string) => {
//     if (isSendCurrency) {
//       setSelectedSendCurrency(newCurrency);  //Use the setter from context

//       if (!loadingRates) {
//         // Only update send currency and recalculate
//         const newRate = exchangeRates[newCurrency]?.["INR"] || 1;  // Always INR
//         setRate(newRate);
//         setReceiveAmount(convertAndFormat(sendAmount, newRate));
//       }
//     }
//     // No else needed, receive currency is fixed
//   };

//   useEffect(() => {
//     // Example: Arrives in 1-3 business days
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // +2 for "Wednesday" example

//     const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []); // Run only once on mount

//   const displayRate = () => {
//     if (loadingRates) {
//       return "Loading...";
//     }
//     return `1 ${selectedSendCurrency} = ${rate.toFixed(4)} INR`; // Always show INR
//   };

//   return (
//     <section className="Hero-Section py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: card */}
//           <div className="lg:w-xl lg:ml-auto">
//             <div className="bg-white rounded-3xl shadow-lg md:p-8 p-4 border border-gray-50">
//               {/* Rate Guaranteed */}
//               <div className="flex flex-col justify-center items-center gap-1 text-green font-medium text-center mb-4 ">
//                 <div className="flex justify-center items-center gap-2">
//                   <SlLock size={22} className="" />
//                   <span>Rate guaranteed (24h)</span>
//                 </div>
//                 <span className="bg-green/10 rounded-full py-1 px-2 inline-block mt-1">
//                   {displayRate()}
//                 </span>
//               </div>

//               {/* You Send */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   You send exactly
//                 </label>
//                 <div>
//                   <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                     <input
//                       type="text"
//                       placeholder="0"
//                       value={sendAmount}
//                       onChange={handleSendAmountChange}
//                       className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                     />
//                     {/* Country Part :- For Change Country */}

//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={(newCurrency) =>
//                         handleCurrencyChange(true, newCurrency)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <p className="text-cyan-900 mt-1 text-sm bg-cyan-100/30 rounded-lg px-2 py-1">
//                   Sending over 20,000 GBP or equivalent?{" "}
//                   {/* Fixed unescaped entity */}
//                   <button className="underline cursor-pointer font-medium">
//                     We'll discount our fee {/* Changed ' to ' */}
//                   </button>
//                 </p>
//               </div>

//               {/* Recipient Gets */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main mb-1">
//                   Recipient gets
//                 </label>
//                 <div className="w-full border border-gray-300 rounded-xl shadow-sm flex items-center justify-between">
//                   <input
//                     type="text"
//                     placeholder="0"
//                     value={receiveAmount}
//                     readOnly // Make the input read-only
//                     className="block w-full h-16 p-3 text-main text-xl font-semibold focus:outline-none"
//                   />
//                   {/* Fixed INR Display */}
//                   <div className="flex items-center gap-2 w-24 pr-2">
//                     <Image src={inr} alt="INR-Flag" width={24} height={24} />
//                     <p className="text-main font-semibold">INR</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 p-3 h-16 border border-green hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out">
//                   <div className="flex items-center gap-2">
//                     <CiBank size={24} />
//                     <span className="text-main font-semibold">Bank transfer</span>
//                   </div>
//                   <button className="text-green font-medium bg-green/10 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2">
//                     Change
//                     <IoIosArrowForward size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between text-">
//                   <span className="text-main ">
//                     Bank transfer fee
//                   </span>
//                   <span className="text-gray">0 {selectedSendCurrency}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">Our fee</span>
//                   <span className="text-gray">{sendFee.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-main ">GST</span>
//                   <span className="text-gray">{gst.toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//                 <hr className="my-2 text-gray-300" />
//                 <div className="flex justify-between text-main font-semibold">
//                   <span>Total included fees (0%)</span>
//                   <span>{(sendFee + gst).toFixed(2)} {selectedSendCurrency}</span>
//                 </div>
//               </div>

//               {/* Savings & Arrival */}
//               <div className="mt-2 text-sm text-gray">
//                 <p>You could save<span className="text-main font-bold"> 2.2% </span>on the payment you make.</p>
//                 <p>
//                   Should arrive{" "}
//                   <span className="text-main font-medium">{arrivalDate}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-4 flex sm:flex-row flex-col items-center gap-2">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border hover:bg-lightgreen hover:border-transparent font-medium rounded-full text-green bg-white hover:bg-button transition-colors duration-150 ease-in-out">
//                   Compare fees
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-green bg-lightgreen hover:bg-lightgreen-hover transition-colors duration-150 ease-in-out">
//                   Send money
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import {
//   IoIosArrowForward,
//   IoIosInformationCircleOutline,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect, useMemo } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../../contexts/WebsiteAppContext";
// import exchangeRateService from "../../../services/exchangeRate";
// import currencyService, { Currency } from "../../../services/currency"; // Ensure Currency type includes rateAdjustmentPercentage?
// import { FaLock, FaInfoCircle } from "react-icons/fa";
// import { Loader2 } from "lucide-react";

// // Interface for the raw rates object received from the API (e.g., { USD: 1, EUR: 0.9, ... })
// interface RawExchangeRates {
//   [key: string]: number | string; // Allow string initially due to debugging
// }

// const HeroSection: React.FC = () => {
//   const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext();
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const receiveCurrencyCode = "INR"; // Fixed receive currency

//   // State for fetched data
//   const [rawRates, setRawRates] = useState<RawExchangeRates | null>(null);
//   const [currencies, setCurrencies] = useState<Currency[]>([]);

//   // State for calculated rates
//   const [marketRate, setMarketRate] = useState<number | null>(null);
//   const [ourRate, setOurRate] = useState<number | null>(null);
//   const [rateAdjustment, setRateAdjustment] = useState<number>(0);

//   // Operational State
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fees and Arrival
//   const [sendFee] = useState(0);
//   const [gst] = useState(0);
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   // --- Data Fetching Effect ---
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       console.log("HeroSection: Fetching initial data...");
//       setIsLoading(true);
//       setError(null);
//       setRawRates(null);
//       setCurrencies([]);
//       setMarketRate(null);
//       setOurRate(null);
//       setRateAdjustment(0);

//       try {
//         const [ratesResponse, currenciesResponse] = await Promise.all([
//           exchangeRateService.getExchangeRatesForCurrencies(),
//           currencyService.getAllCurrencies(true),
//         ]);

//         console.log("HeroSection: Rates Response Raw", ratesResponse);
//         console.log("HeroSection: Currencies Response", currenciesResponse);

//         if (
//           ratesResponse &&
//           typeof ratesResponse.rates === "object" &&
//           ratesResponse.rates !== null &&
//           Object.keys(ratesResponse.rates).length > 0
//         ) {
//           setRawRates(ratesResponse.rates);
//           console.log("HeroSection: Raw Rates Set", ratesResponse.rates);
//         } else {
//           console.error(
//             "HeroSection: Invalid raw exchange rate data received:",
//             ratesResponse
//           );
//           throw new Error("Could not load current exchange rates.");
//         }

//         if (Array.isArray(currenciesResponse)) {
//           setCurrencies(currenciesResponse);
//           console.log("HeroSection: Currencies Set", currenciesResponse);
//         } else {
//           console.error(
//             "HeroSection: Invalid currency data received:",
//             currenciesResponse
//           );
//           throw new Error("Could not load currency details.");
//         }
//       } catch (err: any) {
//         console.error("HeroSection: Error fetching initial data:", err);
//         setError(err.message || "Failed to load required conversion data.");
//         setRawRates(null);
//         setCurrencies([]);
//       } finally {
//         console.log("HeroSection: Initial data fetch complete.");
//         setIsLoading(false);
//       }
//     };

//     fetchInitialData();
//   }, []);

//   // --- Rate Calculation Effect ---
//   useEffect(() => {
//     console.log("HeroSection Rate Effect Triggered:", {
//       isLoading,
//       rawRatesExists: !!rawRates,
//       rawRatesKeys: rawRates ? Object.keys(rawRates).length : "N/A",
//       currenciesLength: currencies.length,
//       selectedSendCurrency,
//     });

//     if (
//       isLoading ||
//       !rawRates ||
//       currencies.length === 0 ||
//       !selectedSendCurrency
//     ) {
//       console.log(
//         "HeroSection: Skipping rate calculation (loading or missing data/currency)."
//       );
//       if (!isLoading && (!rawRates || currencies.length === 0)) {
//         setMarketRate(null);
//         setOurRate(null);
//         setRateAdjustment(0);
//       }
//       return;
//     }

//     try {
//       // --- 1. Calculate Market Rate ---
//       const baseCurrency = "USD"; // Adjust if API base is different
//       let rawRateSelectedValue = rawRates[selectedSendCurrency];
//       let rawRateINRValue = rawRates[receiveCurrencyCode];

//       // --- Safeguard & Type Check ---
//       // Log the raw values and types BEFORE any conversion
//       console.log(
//         `HeroSection: Raw Value Check - Selected (${selectedSendCurrency}):`,
//         rawRateSelectedValue,
//         `(Type: ${typeof rawRateSelectedValue})`
//       );
//       console.log(
//         `HeroSection: Raw Value Check - INR (${receiveCurrencyCode}):`,
//         rawRateINRValue,
//         `(Type: ${typeof rawRateINRValue})`
//       );

//       // Attempt conversion if they are strings, otherwise use the value directly
//       const rateBaseToSelected =
//         typeof rawRateSelectedValue === "string"
//           ? parseFloat(rawRateSelectedValue)
//           : typeof rawRateSelectedValue === "number"
//           ? rawRateSelectedValue
//           : NaN; // Handle non-string/non-number as NaN

//       const rateBaseToINR =
//         typeof rawRateINRValue === "string"
//           ? parseFloat(rawRateINRValue)
//           : typeof rawRateINRValue === "number"
//           ? rawRateINRValue
//           : NaN; // Handle non-string/non-number as NaN

//       // Log the values and types AFTER potential conversion
//       console.log(
//         `HeroSection: Numeric Check - rateBaseToSelected (${selectedSendCurrency}):`,
//         rateBaseToSelected,
//         `(Type: ${typeof rateBaseToSelected})`
//       );
//       console.log(
//         `HeroSection: Numeric Check - rateBaseToINR (${receiveCurrencyCode}):`,
//         rateBaseToINR,
//         `(Type: ${typeof rateBaseToINR})`
//       );

//       // **Critical Check:** Ensure they are valid numbers AFTER potential conversion
//       if (
//         typeof rateBaseToSelected !== "number" ||
//         isNaN(rateBaseToSelected) ||
//         typeof rateBaseToINR !== "number" ||
//         isNaN(rateBaseToINR)
//       ) {
//         console.error(
//           `HeroSection: Failed numeric check after conversion. Selected: ${rateBaseToSelected}, INR: ${rateBaseToINR}. Raw Rates Object:`,
//           rawRates
//         );
//         // Provide a more specific error based on which value failed, if possible
//         let specificError = `Market rate unavailable for ${selectedSendCurrency} to ${receiveCurrencyCode}.`;
//         if (isNaN(rateBaseToSelected))
//           specificError += ` Invalid rate value for ${selectedSendCurrency}.`;
//         if (isNaN(rateBaseToINR))
//           specificError += ` Invalid rate value for ${receiveCurrencyCode}.`;
//         throw new Error(specificError);
//       }

//       // Check for zero rate after confirming it's a number
//       if (rateBaseToSelected === 0) {
//         console.error(
//           `HeroSection: Rate for selected currency ${selectedSendCurrency} is zero.`
//         );
//         throw new Error(
//           `Invalid market rate (zero) for ${selectedSendCurrency}.`
//         );
//       }

//       // Calculate cross rate
//       const calculatedMarketRate = rateBaseToINR / rateBaseToSelected;
//       setMarketRate(calculatedMarketRate);
//       console.log(
//         `HeroSection: Calculated Market Rate (${selectedSendCurrency}->${receiveCurrencyCode}):`,
//         calculatedMarketRate
//       );

//       // --- 2. Find Sending Currency Details & Adjustment ---
// const sendingCurrencyDetails = currencies.find(c => c.code === selectedSendCurrency);
// const adjustmentPercent = sendingCurrencyDetails?.rateAdjustmentPercentage ?? 0;
// setRateAdjustment(adjustmentPercent);
// console.log(`HeroSection: Rate Adjustment fetched for ${selectedSendCurrency}: ${adjustmentPercent}%`);

// // --- 3. Calculate "Our Rate" ---
// // This calculation correctly applies the adjustment/margin, resulting in a less favorable rate for the sender
// const calculatedOurRate = calculatedMarketRate * (1 + adjustmentPercent / 100);
// setOurRate(calculatedOurRate);
// console.log(`HeroSection: Calculated Our Rate (${selectedSendCurrency}->${receiveCurrencyCode}):`, calculatedOurRate);

//       // Clear calculation-specific errors if successful
//       if (
//         error &&
//         (error.startsWith("Market rate unavailable") ||
//           error.startsWith("Invalid market rate"))
//       ) {
//         // Now, if error is truthy, we check if it starts with *either* string.
//         setError(null); // Clear calculation errors
//       } else if (error) {
//         // This else-if still correctly handles the case where 'error' exists but isn't one of the specific calculation errors.
//         console.log("HeroSection: Keeping previous load error:", error); // Keep load errors
//       }
//     } catch (err: any) {
//       console.error("HeroSection: Error calculating rates:", err);
//       setError(
//         err.message || `Could not calculate rate for ${selectedSendCurrency}.`
//       );
//       setMarketRate(null);
//       setOurRate(null);
//       setRateAdjustment(0);
//     }
//   }, [
//     selectedSendCurrency,
//     rawRates,
//     currencies,
//     isLoading,
//     error,
//     receiveCurrencyCode,
//   ]);

//   // --- Amount Calculation Effect ---
//   useEffect(() => {
//     if (ourRate === null || isNaN(ourRate)) {
//       setReceiveAmount("");
//       return;
//     }
//     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, ""));
//     if (isNaN(numericSendAmount) || numericSendAmount <= 0) {
//       setReceiveAmount("");
//     } else {
//       setReceiveAmount((numericSendAmount * ourRate).toFixed(2));
//     }
//   }, [sendAmount, ourRate]);

//   // --- Input Handlers ---
//   const handleSendAmountChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const sanitizedAmount = event.target.value
//       .replace(/[^0-9.]/g, "")
//       .replace(/(\..*)\./g, "$1");
//     setSendAmount(sanitizedAmount);
//   };

//   const handleCurrencyChange = (newCurrency: string) => {
//     console.log("HeroSection: Currency changed to:", newCurrency);
//     setSelectedSendCurrency(newCurrency);
//     setSendAmount("");
//     setReceiveAmount("");
//     setMarketRate(null); // Reset for immediate feedback
//     setOurRate(null);
//     setRateAdjustment(0);
//     setError(null); // Clear previous errors
//   };

//   // --- Display Logic ---
//   const displayOurRate = useMemo(() => {
//     if (isLoading) return "Loading rate...";
//     if (error && !ourRate) return "Rate unavailable";
//     if (ourRate === null && selectedSendCurrency) return "Calculating...";
//     if (ourRate === null) return "Select currency"; // Initial state
//     return `1 ${selectedSendCurrency} = ${ourRate.toFixed(
//       4
//     )} ${receiveCurrencyCode}`;
//   }, [isLoading, error, ourRate, selectedSendCurrency, receiveCurrencyCode]);

//   const displayMarketRate = useMemo(() => {
//     if (isLoading || marketRate === null) return null;
//     if (error && !marketRate) return null; // Don't show if calc failed for market rate
//     return `1 ${selectedSendCurrency} ≈ ${marketRate.toFixed(
//       4
//     )} ${receiveCurrencyCode}`;
//   }, [isLoading, error, marketRate, selectedSendCurrency, receiveCurrencyCode]);

//   // Calculate Savings/Difference
//   const savingsAmount = useMemo(() => {
//     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, ""));
//     if (
//       isNaN(numericSendAmount) ||
//       numericSendAmount <= 0 ||
//       marketRate === null ||
//       ourRate === null ||
//       ourRate >= marketRate
//     ) {
//       return null;
//     }
//     const receivedAtMarket = numericSendAmount * marketRate;
//     const receivedAtOurRate = numericSendAmount * ourRate;
//     const marketDifference = receivedAtMarket - receivedAtOurRate;
//     if (marketDifference <= 0.01) return null;
//     return marketDifference.toFixed(2);
//   }, [sendAmount, marketRate, ourRate]);

//   // --- Arrival Date Effect ---
//   useEffect(() => {
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2);
//     const options: Intl.DateTimeFormatOptions = { weekday: "long" };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []);

//   // --- JSX Render ---
//   return (
//     <section className="Hero-Section py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: Calculator Card */}
//           <div className="lg:w-xl lg:ml-auto w-full max-w-lg">
//             <div className="bg-white dark:bg-background rounded-3xl shadow-lg md:p-8 p-4 border border-gray-200 dark:border-secondarybox">
//               {/* Rate Display Section */}
//               <div className="text-right mb-4 min-h-[60px] space-y-1.5 flex flex-col items-end">
//                 {isLoading && (
//                   <div className="flex justify-end items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
//                     <Loader2 size={16} className="animate-spin" />{" "}
//                     <span>Loading rates...</span>
//                   </div>
//                 )}
//                 {!isLoading && error && (
//                   <div className="font-medium text-sm p-1.5 px-2.5 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 inline-flex items-center gap-1.5">
//                     <IoIosInformationCircleOutline size={16} /> Error: {error}
//                   </div>
//                 )}
//                  {!isLoading && ourRate !== null && (
//                     <div
//                         className="font-semibold p-2 px-4 rounded-md bg-primary/10 text-primary-dark dark:bg-primary/20 dark:text-primary-light inline-flex items-center gap-1.5 cursor-default text-sm"
//                         // --- UPDATED TOOLTIP ---
//                         title={`Rate includes our rates of ${rateAdjustment.toFixed(2)}%. This is the rate applied to your transfer.`}
//                         // --- END UPDATED TOOLTIP ---
//                     >
//                         <FaLock size={14} /> Our Rate: {displayOurRate}
//                     </div>
//                  )}
//                 {!isLoading &&
//                   !error &&
//                   ourRate === null &&
//                   selectedSendCurrency && (
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       Calculating rate...
//                     </div>
//                   )}
//                 {!isLoading &&
//                   marketRate !== null &&
//                   displayMarketRate && ( // Only show if market rate is available
//                     <div
//                       className="font-medium text-xs p-1.5 px-2.5 rounded-md bg-gray-100 dark:bg-secondarybox text-gray-500 dark:text-gray-400 inline-flex items-center gap-1.5 cursor-help"
//                       title="Current mid-market rate. For comparison only."
//                     >
//                       <FaInfoCircle size={14} /> Market Rate:{" "}
//                       {displayMarketRate}
//                     </div>
//                   )}
//               </div>

//               {/* You Send Input */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main dark:text-gray-200 mb-1">
//                   You send exactly
//                 </label>
//                 <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between focus-within:ring-2 focus-within:ring-primary focus-within:border-primary dark:focus-within:border-primary transition-all duration-150">
//                   <input
//                     type="text"
//                     inputMode="decimal"
//                     placeholder="0"
//                     value={sendAmount}
//                     onChange={handleSendAmountChange}
//                     className="block w-full h-16 p-3 text-main dark:text-white text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500"
//                     disabled={isLoading}
//                     aria-label="Amount to send"
//                   />
//                   <div className="flex-shrink-0 h-full">
//                     <CountryDropdown
//                       selectedCurrency={selectedSendCurrency}
//                       onCurrencyChange={handleCurrencyChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Recipient Gets Input */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main dark:text-gray-200 mb-1">
//                   Recipient gets (approx.)
//                 </label>
//                 <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between bg-gray-50 dark:bg-secondarybox/30">
//                   <input
//                     type="text"
//                     inputMode="decimal"
//                     placeholder="0.00"
//                     value={receiveAmount}
//                     readOnly
//                     className="block w-full h-16 p-3 text-main dark:text-gray-300 text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500"
//                     aria-label="Amount recipient gets"
//                   />
//                   <div className="flex items-center gap-2 w-auto px-3 flex-shrink-0">
//                     <Image
//                       src={inr}
//                       alt="INR-Flag"
//                       width={24}
//                       height={24}
//                       className="rounded-full"
//                     />
//                     <p className="text-main dark:text-gray-200 font-semibold">
//                       INR
//                     </p>
//                   </div>
//                 </div>
//                 {/* Savings Display */}
//                 {savingsAmount && !isLoading && !error && (
//                   <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-right pr-1">
//                     Market rate would give approx.{" "}
//                     <span className="font-medium text-main dark:text-gray-300">
//                       {savingsAmount} {receiveCurrencyCode}
//                     </span>{" "}
//                     more.
//                   </p>
//                 )}
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                 <label className="block font-medium text-main dark:text-gray-200 mb-1">
//                   Paying with
//                 </label>
//                 <div className="hover:bg-green/10 dark:hover:bg-green/20 p-3 h-16 border border-green hover:border-green-dark dark:border-green/50 dark:hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out text-main dark:text-gray-200">
//                   <div className="flex items-center gap-2">
//                     {" "}
//                     <CiBank size={24} />{" "}
//                     <span className="font-semibold">Bank transfer</span>{" "}
//                   </div>
//                   <button className="text-green dark:text-green-light font-medium bg-green/10 dark:bg-green/20 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2 hover:bg-green/20 dark:hover:bg-green/30">
//                     {" "}
//                     Change <IoIosArrowForward size={18} />{" "}
//                   </button>
//                 </div>
//               </div>

//               {/* Fee Details */}
//               <div className="text-sm border border-gray-300 dark:border-secondarybox rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between">
//                   {" "}
//                   <span className="text-main dark:text-gray-300">
//                     {" "}
//                     Bank transfer fee{" "}
//                   </span>{" "}
//                   <span className="text-gray-600 dark:text-gray-400">
//                     0.00 {selectedSendCurrency}
//                   </span>{" "}
//                 </div>
//                 <div className="flex justify-between">
//                   {" "}
//                   <span className="text-main dark:text-gray-300">
//                     Our fee
//                   </span>{" "}
//                   <span className="text-gray-600 dark:text-gray-400">
//                     {sendFee.toFixed(2)} {selectedSendCurrency}
//                   </span>{" "}
//                 </div>
//                 <div className="flex justify-between">
//                   {" "}
//                   <span className="text-main dark:text-gray-300">GST</span>{" "}
//                   <span className="text-gray-600 dark:text-gray-400">
//                     {gst.toFixed(2)} {selectedSendCurrency}
//                   </span>{" "}
//                 </div>
//                 <hr className="my-2 border-gray-200 dark:border-secondarybox" />
//                 <div className="flex justify-between text-main dark:text-gray-200 font-semibold">
//                   {" "}
//                   <span>Total included fees (0%)</span>{" "}
//                   <span>
//                     {(sendFee + gst).toFixed(2)} {selectedSendCurrency}
//                   </span>{" "}
//                 </div>
//               </div>

//               {/* Arrival Info */}
//               <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                 <p>
//                   {" "}
//                   Should arrive around{" "}
//                   <span className="text-main dark:text-gray-300 font-medium">
//                     {arrivalDate || "..."}
//                   </span>{" "}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-6 flex sm:flex-row flex-col items-center gap-3">
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-secondarybox hover:bg-gray-100 dark:hover:bg-secondarybox font-medium rounded-full text-green dark:text-primary bg-white dark:bg-background hover:text-green-dark dark:hover:text-primary-light transition-colors duration-150 ease-in-out h-12 text-base">
//                   {" "}
//                   Compare fees{" "}
//                 </button>
//                 <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-black dark:text-black bg-primary hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-colors duration-150 ease-in-out h-12 text-base shadow-sm">
//                   {" "}
//                   Send money{" "}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// // app/(website)/components/Hero/HeroSection.tsx
// "use client";
// import {
//   IoIosArrowForward,
//   IoIosInformationCircleOutline,
// } from "react-icons/io";
// import { CiBank } from "react-icons/ci";
// import { useState, useEffect, useMemo } from "react";
// import CountryDropdown from "../../../components/ui/CountryDropdown";
// import HeroText from "./HeroText";
// import Image from "next/image";
// import inr from "../../../../../public/assets/icon/inr.svg";
// import { useAppContext } from "../../../contexts/WebsiteAppContext";
// import exchangeRateService from "../../../services/exchangeRate";
// import currencyService, { Currency } from "../../../services/currency";
// import { FaLock, FaInfoCircle } from "react-icons/fa";
// import { Loader2 } from "lucide-react";

// // Interface for the raw rates object received from the API (e.g., { USD: 1, EUR: 0.9, ... })
// interface RawExchangeRates {
//   [key: string]: number | string; // Allow string initially for robust parsing
// }

// const HeroSection: React.FC = () => {
//   const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext();
//   const [sendAmount, setSendAmount] = useState("");
//   const [receiveAmount, setReceiveAmount] = useState("");
//   const receiveCurrencyCode = "INR"; // Fixed receive currency

//   // State for fetched data
//   const [rawRates, setRawRates] = useState<RawExchangeRates | null>(null);
//   const [currencies, setCurrencies] = useState<Currency[]>([]);

//   // State for calculated rates & adjustments
//   const [marketRate, setMarketRate] = useState<number | null>(null);
//   const [ourRate, setOurRate] = useState<number | null>(null);
//   const [rateAdjustment, setRateAdjustment] = useState<number>(0);

//   // State for calculated fees
//   const [ourFeeAmount, setOurFeeAmount] = useState<number>(0);
//   const [bankTransferFeeAmount, setBankTransferFeeAmount] = useState<number>(0);
//   const [wiseFeePercentage, setWiseFeePercentage] = useState<number>(0); // Store percentage for display/calc

//   // Operational State
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Arrival Date
//   const [arrivalDate, setArrivalDate] = useState<string | null>(null);

//   // --- Data Fetching Effect ---
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       console.log("HeroSection: Fetching initial data...");
//       setIsLoading(true);
//       setError(null);
//       setRawRates(null); setCurrencies([]);
//       setMarketRate(null); setOurRate(null); setRateAdjustment(0);
//       setOurFeeAmount(0); setBankTransferFeeAmount(0); setWiseFeePercentage(0); // Reset all states

//       try {
//         const [ratesResponse, currenciesResponse] = await Promise.all([
//           exchangeRateService.getExchangeRatesForCurrencies(),
//           currencyService.getAllCurrencies(true), // Fetch currency details WITH fees/adjustments
//         ]);

//         console.log("HeroSection: Rates Response Raw", ratesResponse);
//         console.log("HeroSection: Currencies Response", currenciesResponse);

//         // Validate and set raw rates
//         if (ratesResponse && typeof ratesResponse.rates === "object" && ratesResponse.rates !== null && Object.keys(ratesResponse.rates).length > 0) {
//           setRawRates(ratesResponse.rates);
//           console.log("HeroSection: Raw Rates Set", ratesResponse.rates);
//         } else {
//           console.error("HeroSection: Invalid raw exchange rate data received:", ratesResponse);
//           throw new Error("Could not load current exchange rates.");
//         }

//         // Validate and set currencies
//         if (Array.isArray(currenciesResponse)) {
//           setCurrencies(currenciesResponse);
//           console.log("HeroSection: Currencies Set", currenciesResponse);
//         } else {
//           console.error("HeroSection: Invalid currency data received:", currenciesResponse);
//           throw new Error("Could not load currency details.");
//         }
//       } catch (err: any) {
//         console.error("HeroSection: Error fetching initial data:", err);
//         setError(err.message || "Failed to load required conversion data.");
//         setRawRates(null); setCurrencies([]); // Ensure reset on error
//       } finally {
//         console.log("HeroSection: Initial data fetch complete.");
//         setIsLoading(false);
//       }
//     };
//     fetchInitialData();
//   }, []); // Run only once on mount

//   // --- Rate and Fee Calculation Effect ---
//   useEffect(() => {
//     console.log("HeroSection Rate & Fee Effect Triggered:", { isLoading, rawRatesExists: !!rawRates, currenciesLength: currencies.length, selectedSendCurrency });

//     if (isLoading || !rawRates || currencies.length === 0 || !selectedSendCurrency) {
//       console.log("HeroSection: Skipping calculations (loading or missing data/currency).");
//       if (!isLoading && (!rawRates || currencies.length === 0)) { // If loading finished but data missing
//         setMarketRate(null); setOurRate(null); setRateAdjustment(0);
//         setWiseFeePercentage(0); setBankTransferFeeAmount(0);
//       }
//       return;
//     }

//     try {
//       // --- 1. Calculate Market Rate ---
//       const baseCurrency = "USD"; // Adjust if API base is different
//       let rawRateSelectedValue = rawRates[selectedSendCurrency];
//       let rawRateINRValue = rawRates[receiveCurrencyCode];

//       console.log(`HeroSection: Raw Value Check - Selected (${selectedSendCurrency}):`, rawRateSelectedValue, `(Type: ${typeof rawRateSelectedValue})`);
//       console.log(`HeroSection: Raw Value Check - INR (${receiveCurrencyCode}):`, rawRateINRValue, `(Type: ${typeof rawRateINRValue})`);

//       const rateBaseToSelected = typeof rawRateSelectedValue === 'string' ? parseFloat(rawRateSelectedValue) : (typeof rawRateSelectedValue === 'number' ? rawRateSelectedValue : NaN);
//       const rateBaseToINR = typeof rawRateINRValue === 'string' ? parseFloat(rawRateINRValue) : (typeof rawRateINRValue === 'number' ? rawRateINRValue : NaN);

//       console.log(`HeroSection: Numeric Check - rateBaseToSelected (${selectedSendCurrency}):`, rateBaseToSelected, `(Type: ${typeof rateBaseToSelected})`);
//       console.log(`HeroSection: Numeric Check - rateBaseToINR (${receiveCurrencyCode}):`, rateBaseToINR, `(Type: ${typeof rateBaseToINR})`);

//       if (typeof rateBaseToSelected !== "number" || isNaN(rateBaseToSelected) || typeof rateBaseToINR !== "number" || isNaN(rateBaseToINR)) {
//         console.error(`HeroSection: Failed numeric check after conversion. Selected: ${rateBaseToSelected}, INR: ${rateBaseToINR}. Raw Rates Object:`, rawRates);
//         let specificError = `Market rate unavailable for ${selectedSendCurrency} to ${receiveCurrencyCode}.`;
//         if (isNaN(rateBaseToSelected)) specificError += ` Invalid rate value for ${selectedSendCurrency}.`;
//         if (isNaN(rateBaseToINR)) specificError += ` Invalid rate value for ${receiveCurrencyCode}.`;
//         throw new Error(specificError);
//       }
//       if (rateBaseToSelected === 0) {
//         console.error(`HeroSection: Rate for selected currency ${selectedSendCurrency} is zero.`);
//         throw new Error(`Invalid market rate (zero) for ${selectedSendCurrency}.`);
//       }

//       const calculatedMarketRate = rateBaseToINR / rateBaseToSelected;
//       setMarketRate(calculatedMarketRate);
//       console.log(`HeroSection: Calculated Market Rate (${selectedSendCurrency}->${receiveCurrencyCode}):`, calculatedMarketRate);

//       // --- 2. Find Currency Details & Set Fees/Adjustments ---
//       const sendingCurrencyDetails = currencies.find(c => c.code === selectedSendCurrency);
//       const adjustmentPercent = sendingCurrencyDetails?.rateAdjustmentPercentage ?? 0;
//       const fetchedWiseFeePercent = sendingCurrencyDetails?.wiseFeePercentage ?? 0;
//       const fetchedBankFee = sendingCurrencyDetails?.bankTransferFee ?? 0;

//       setRateAdjustment(adjustmentPercent);
//       setWiseFeePercentage(fetchedWiseFeePercent); // Store percentage for later use
//       setBankTransferFeeAmount(fetchedBankFee);     // Store fixed bank fee
//       console.log(`HeroSection: Set Fees/Adjust - Adjust: ${adjustmentPercent}%, Wise Fee %: ${fetchedWiseFeePercent}%, Bank Fee: ${fetchedBankFee}`);

//       // --- 3. Calculate "Our Rate" ---
//       // Apply adjustment (margin makes rate less favorable for sender)
//       const calculatedOurRate = calculatedMarketRate * (1 + adjustmentPercent / 100);
//       setOurRate(calculatedOurRate);
//       console.log(`HeroSection: Calculated Our Rate (${selectedSendCurrency}->${receiveCurrencyCode}):`, calculatedOurRate);

//       // --- 4. Clear specific calculation errors if successful ---
//       if (error && (error.startsWith("Market rate unavailable") || error.startsWith("Invalid market rate"))) {
//         setError(null);
//       } else if (error) {
//         console.log("HeroSection: Keeping previous load error:", error)
//       }

//     } catch (err: any) {
//       console.error("HeroSection: Error calculating rates/fees:", err);
//       setError(err.message || `Could not calculate rates/fees for ${selectedSendCurrency}.`);
//       // Reset all calculated values on error
//       setMarketRate(null); setOurRate(null); setRateAdjustment(0);
//       setWiseFeePercentage(0); setBankTransferFeeAmount(0); setOurFeeAmount(0);
//     }
//   }, [selectedSendCurrency, rawRates, currencies, isLoading, error, receiveCurrencyCode]); // Dependencies

//   // --- Amount & Variable Fee Calculation Effect ---
//   useEffect(() => {
//     let calculatedReceive = 0;
//     let calculatedOurFee = 0;
//     // Ensure sendAmount is parsed correctly, default to 0 if invalid/empty
//     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;

//     // Calculate Receive Amount based on Our Rate
//     if (ourRate !== null && !isNaN(ourRate) && numericSendAmount > 0) {
//       calculatedReceive = numericSendAmount * ourRate;
//     }

//     // Calculate Our Fee (Variable based on Percentage)
//     if (wiseFeePercentage > 0 && numericSendAmount > 0) {
//       calculatedOurFee = numericSendAmount * (wiseFeePercentage / 100);
//     }
//     setOurFeeAmount(calculatedOurFee); // Update fee amount state

//     // Update receive amount state (display 0.00 if calculation results in 0 or less)
//     setReceiveAmount(calculatedReceive > 0 ? calculatedReceive.toFixed(2) : (numericSendAmount > 0 ? "0.00" : ""));

//   }, [sendAmount, ourRate, wiseFeePercentage]); // Dependencies

//   // --- Input Handlers ---
//   const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const sanitizedAmount = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
//     setSendAmount(sanitizedAmount);
//   };

//   const handleCurrencyChange = (newCurrency: string) => {
//     console.log("HeroSection: Currency changed to:", newCurrency);
//     setSelectedSendCurrency(newCurrency);
//     // Reset everything that depends on the currency or calculated rates/fees
//     setSendAmount(""); setReceiveAmount("");
//     setMarketRate(null); setOurRate(null); setRateAdjustment(0);
//     setError(null);
//     setWiseFeePercentage(0); setBankTransferFeeAmount(0); setOurFeeAmount(0);
//   };

//   // --- Display Logic ---
//   const displayOurRate = useMemo(() => {
//     if (isLoading) return "Loading rate...";
//     if (error && !ourRate) return "Rate unavailable";
//     if (ourRate === null && selectedSendCurrency && !error) return "Calculating...";
//     if (ourRate === null) return "Select currency";
//     return `1 ${selectedSendCurrency} = ${ourRate.toFixed(4)} ${receiveCurrencyCode}`;
//   }, [isLoading, error, ourRate, selectedSendCurrency, receiveCurrencyCode]);

//   const displayMarketRate = useMemo(() => {
//     if (isLoading || marketRate === null) return null;
//     if (error && !marketRate) return null;
//     return `1 ${selectedSendCurrency} ≈ ${marketRate.toFixed(4)} ${receiveCurrencyCode}`;
//   }, [isLoading, error, marketRate, selectedSendCurrency, receiveCurrencyCode]);

//   // Calculate Savings/Difference
//   const savingsAmount = useMemo(() => {
//     const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
//     if (numericSendAmount <= 0 || marketRate === null || ourRate === null || ourRate >= marketRate) {
//       return null;
//     }
//     const receivedAtMarket = numericSendAmount * marketRate;
//     const receivedAtOurRate = numericSendAmount * ourRate;
//     const marketDifference = receivedAtMarket - receivedAtOurRate;
//     if (marketDifference <= 0.01) return null;
//     return marketDifference.toFixed(2);
//   }, [sendAmount, marketRate, ourRate]);

//   // --- Arrival Date Effect ---
//   useEffect(() => {
//     const today = new Date();
//     const arrival = new Date(today);
//     arrival.setDate(today.getDate() + 2); // Example: 2 days
//     const options: Intl.DateTimeFormatOptions = { weekday: "long" };
//     setArrivalDate(arrival.toLocaleDateString(undefined, options));
//   }, []);

//   // --- JSX Render ---
//   return (
//     <section className="Hero-Section py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left Column */}
//           <div className="lg:w-1/2 space-y-5 p-4">
//             <HeroText />
//           </div>

//           {/* Right Column: Calculator Card */}
//           <div className="lg:w-xl lg:ml-auto w-full max-w-lg">
//             <div className="bg-white dark:bg-background rounded-3xl shadow-lg md:p-8 p-4 border border-gray-200 dark:border-secondarybox">

//               {/* Rate Display Section */}
//               <div className="text-right mb-4 min-h-[60px] space-y-1.5 flex flex-col items-end">
//                  {isLoading && ( <div className="flex justify-end items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"> <Loader2 size={16} className="animate-spin" /> <span>Loading rates...</span> </div> )}
//                  {!isLoading && error && ( <div className="font-medium text-sm p-1.5 px-2.5 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 inline-flex items-center gap-1.5"> <IoIosInformationCircleOutline size={16} /> Error: {error} </div> )}
//                  {!isLoading && ourRate !== null && (
//                     <div className="font-semibold p-2 px-4 rounded-md bg-primary/10 text-primary-dark dark:bg-primary/20 dark:text-primary-light inline-flex items-center gap-1.5 cursor-default text-sm"
//                          title={`Rate includes our rates of ${rateAdjustment.toFixed(2)}%. This is the rate applied to your transfer.`}>
//                         <FaLock size={14} /> Our Rate: {displayOurRate}
//                     </div>
//                  )}
//                  {!isLoading && !error && ourRate === null && selectedSendCurrency && ( <div className="text-sm text-gray-500 dark:text-gray-400">Calculating rate...</div> )}
//                  {!isLoading && marketRate !== null && displayMarketRate && (
//                      <div className="font-medium text-xs p-1.5 px-2.5 rounded-md bg-gray-100 dark:bg-secondarybox text-gray-500 dark:text-gray-400 inline-flex items-center gap-1.5 cursor-help"
//                           title="Current mid-market rate. For comparison only.">
//                         <FaInfoCircle size={14} /> Market Rate: {displayMarketRate}
//                      </div>
//                  )}
//               </div>

//               {/* You Send Input */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main dark:text-gray-200 mb-1"> You send exactly </label>
//                 <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between focus-within:ring-2 focus-within:ring-primary focus-within:border-primary dark:focus-within:border-primary transition-all duration-150">
//                   <input type="text" inputMode="decimal" placeholder="0" value={sendAmount} onChange={handleSendAmountChange} className="block w-full h-16 p-3 text-main dark:text-white text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500" disabled={isLoading} aria-label="Amount to send" />
//                   <div className="flex-shrink-0 h-full"> <CountryDropdown selectedCurrency={selectedSendCurrency} onCurrencyChange={handleCurrencyChange} /> </div>
//                 </div>
//               </div>

//               {/* Recipient Gets Input */}
//               <div className="mb-3">
//                 <label className="block font-medium text-main dark:text-gray-200 mb-1"> Recipient gets (approx.) </label>
//                 <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between bg-gray-50 dark:bg-secondarybox/30">
//                   <input type="text" inputMode="decimal" placeholder="0.00" value={receiveAmount} readOnly className="block w-full h-16 p-3 text-main dark:text-gray-300 text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500" aria-label="Amount recipient gets" />
//                   <div className="flex items-center gap-2 w-auto px-3 flex-shrink-0"> <Image src={inr} alt="INR-Flag" width={24} height={24} className="rounded-full" /> <p className="text-main dark:text-gray-200 font-semibold"> INR </p> </div>
//                 </div>
//                 {/* Savings Display */}
//                 {savingsAmount && !isLoading && !error && ( <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-right pr-1"> Market rate would give approx.{" "} <span className="font-medium text-main dark:text-gray-300">{savingsAmount} {receiveCurrencyCode}</span> more. </p> )}
//               </div>

//               {/* Paying With */}
//               <div className="mb-4">
//                  <label className="block font-medium text-main dark:text-gray-200 mb-1">Paying with</label>
//                  <div className="hover:bg-green/10 dark:hover:bg-green/20 p-3 h-16 border border-green hover:border-green-dark dark:border-green/50 dark:hover:border-green rounded-xl flex items-center justify-between transition-colors duration-200 ease-in-out text-main dark:text-gray-200">
//                    <div className="flex items-center gap-2"> <CiBank size={24} /> <span className="font-semibold">Bank transfer</span> </div>
//                    <button className="text-green dark:text-green-light font-medium bg-green/10 dark:bg-green/20 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2 hover:bg-green/20 dark:hover:bg-green/30"> Change <IoIosArrowForward size={18} /> </button>
//                  </div>
//               </div>

//               {/* Fee Details (Dynamically Calculated) */}
//               <div className="text-sm border border-gray-300 dark:border-secondarybox rounded-xl p-4 space-y-2.5">
//                 <div className="flex justify-between">
//                   <span className="text-main dark:text-gray-300"> Bank transfer fee </span>
//                   <span className="text-gray-600 dark:text-gray-400"> {bankTransferFeeAmount.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 <div className="flex justify-between">
//                    <span className="text-main dark:text-gray-300"> Our fee ({wiseFeePercentage > 0 ? `${wiseFeePercentage.toFixed(2)}%` : '...'}) </span> {/* Show % if available */}
//                    <span className="text-gray-600 dark:text-gray-400"> {ourFeeAmount.toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//                 {/* GST Removed */}
//                 <hr className="my-2 border-gray-200 dark:border-secondarybox" />
//                 <div className="flex justify-between text-main dark:text-gray-200 font-semibold">
//                   <span>Total included fees</span>
//                   <span> {(bankTransferFeeAmount + ourFeeAmount).toFixed(2)} {selectedSendCurrency} </span>
//                 </div>
//               </div>

//               {/* Arrival Info */}
//               <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                  <p> Should arrive around{" "} <span className="text-main dark:text-gray-300 font-medium">{arrivalDate || '...'}</span> </p>
//               </div>

//               {/* Actions */}
//               <div className="mt-6 flex sm:flex-row flex-col items-center gap-3">
//                  <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-secondarybox hover:bg-gray-100 dark:hover:bg-secondarybox font-medium rounded-full text-green dark:text-primary bg-white dark:bg-background hover:text-green-dark dark:hover:text-primary-light transition-colors duration-150 ease-in-out h-12 text-base"> Compare fees </button>
//                  <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-black dark:text-black bg-primary hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-colors duration-150 ease-in-out h-12 text-base shadow-sm"> Send money </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// app/(website)/components/Hero/HeroSection.tsx
"use client";
import {
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { useState, useEffect, useMemo } from "react";
import CountryDropdown from "../../../components/ui/CountryDropdown";
import HeroText from "./HeroText";
import Image from "next/image";
import inr from "../../../../../public/assets/icon/inr.svg";
import { useAppContext } from "../../../contexts/WebsiteAppContext";
import exchangeRateService from "../../../services/exchangeRate";
import currencyService, { Currency } from "../../../services/currency";
import { FaLock, FaInfoCircle, FaPiggyBank } from "react-icons/fa";
import { Loader2, TrendingUp } from "lucide-react"; // Make sure TrendingUp is imported
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

// Interface for the raw rates object received from the API (e.g., { USD: 1, EUR: 0.9, ... })
interface RawExchangeRates {
  [key: string]: number | string; // Allow string initially for robust parsing
}

const HeroSection: React.FC = () => {
  const { selectedSendCurrency, setSelectedSendCurrency } = useAppContext();
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const receiveCurrencyCode = "INR"; // Fixed receive currency

  // State for fetched data
  const [rawRates, setRawRates] = useState<RawExchangeRates | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  // State for calculated rates & adjustments
  const [marketRate, setMarketRate] = useState<number | null>(null);
  const [ourRate, setOurRate] = useState<number | null>(null);
  const [rateAdjustment, setRateAdjustment] = useState<number>(0);

  // State for calculated fees
  const [ourFeeAmount, setOurFeeAmount] = useState<number>(0);
  const [bankTransferFeeAmount, setBankTransferFeeAmount] = useState<number>(0);
  const [wiseFeePercentage, setWiseFeePercentage] = useState<number>(0); // Store percentage for display/calc (assuming this represents ScopeX fee)

  // Operational State
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Arrival Date
  const [arrivalDate, setArrivalDate] = useState<string | null>(null);

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchInitialData = async () => {
      console.log("HeroSection: Fetching initial data...");
      setIsLoading(true); // Start loading
      setError(null);
      setRawRates(null); setCurrencies([]);
      setMarketRate(null); setOurRate(null); setRateAdjustment(0);
      setOurFeeAmount(0); setBankTransferFeeAmount(0); setWiseFeePercentage(0); // Reset all states

      // Simulate loading delay for visibility (remove in production)
      // await new Promise(resolve => setTimeout(resolve, 1500));

      try {
        const [ratesResponse, currenciesResponse] = await Promise.all([
          exchangeRateService.getExchangeRatesForCurrencies(),
          currencyService.getAllCurrencies(true), // Fetch currency details WITH fees/adjustments
        ]);

        console.log("HeroSection: Rates Response Raw", ratesResponse);
        console.log("HeroSection: Currencies Response", currenciesResponse);

        // Validate and set raw rates
        if (ratesResponse && typeof ratesResponse.rates === "object" && ratesResponse.rates !== null && Object.keys(ratesResponse.rates).length > 0) {
          setRawRates(ratesResponse.rates);
          console.log("HeroSection: Raw Rates Set", ratesResponse.rates);
        } else {
          console.error("HeroSection: Invalid raw exchange rate data received:", ratesResponse);
          throw new Error("Could not load current exchange rates.");
        }

        // Validate and set currencies
        if (Array.isArray(currenciesResponse)) {
          setCurrencies(currenciesResponse);
          console.log("HeroSection: Currencies Set", currenciesResponse);
        } else {
          console.error("HeroSection: Invalid currency data received:", currenciesResponse);
          throw new Error("Could not load currency details.");
        }
      } catch (err: any) {
        console.error("HeroSection: Error fetching initial data:", err);
        setError(err.message || "Failed to load required conversion data.");
        setRawRates(null); setCurrencies([]); // Ensure reset on error
      } finally {
        console.log("HeroSection: Initial data fetch complete.");
        setIsLoading(false); // Stop loading
      }
    };
    fetchInitialData();
  }, []); // Run only once on mount

  // --- Rate and Fee Calculation Effect ---
  useEffect(() => {
    // Skip calculations if initial data is still loading
    if (isLoading || !rawRates || currencies.length === 0 || !selectedSendCurrency) {
        console.log("HeroSection: Skipping calculations (loading or missing data/currency).");
        // Keep calculated values null/zero while loading
        if (!isLoading && (!rawRates || currencies.length === 0)) { // If loading finished but data missing
          setMarketRate(null); setOurRate(null); setRateAdjustment(0);
          setWiseFeePercentage(0); setBankTransferFeeAmount(0);
        }
        return;
      }

    // Proceed with calculations only after isLoading is false and data is available
    console.log("HeroSection Rate & Fee Effect Triggered:", { isLoading, rawRatesExists: !!rawRates, currenciesLength: currencies.length, selectedSendCurrency });

    try {
      // --- 1. Calculate Market Rate ---
      const baseCurrency = "USD"; // Adjust if API base is different
      let rawRateSelectedValue = rawRates[selectedSendCurrency];
      let rawRateINRValue = rawRates[receiveCurrencyCode];

      // (Keep the rest of the calculation logic as before)
      // ... [Calculation logic remains the same] ...
      const rateBaseToSelected = typeof rawRateSelectedValue === 'string' ? parseFloat(rawRateSelectedValue) : (typeof rawRateSelectedValue === 'number' ? rawRateSelectedValue : NaN);
      const rateBaseToINR = typeof rawRateINRValue === 'string' ? parseFloat(rawRateINRValue) : (typeof rawRateINRValue === 'number' ? rawRateINRValue : NaN);

      if (typeof rateBaseToSelected !== "number" || isNaN(rateBaseToSelected) || typeof rateBaseToINR !== "number" || isNaN(rateBaseToINR)) {
        console.error(`HeroSection: Failed numeric check after conversion. Selected: ${rateBaseToSelected}, INR: ${rateBaseToINR}. Raw Rates Object:`, rawRates);
        let specificError = `Market rate unavailable for ${selectedSendCurrency} to ${receiveCurrencyCode}.`;
        if (isNaN(rateBaseToSelected)) specificError += ` Invalid rate value for ${selectedSendCurrency}.`;
        if (isNaN(rateBaseToINR)) specificError += ` Invalid rate value for ${receiveCurrencyCode}.`;
        throw new Error(specificError);
      }
      if (rateBaseToSelected === 0) {
        throw new Error(`Invalid market rate (zero) for ${selectedSendCurrency}.`);
      }

      const calculatedMarketRate = rateBaseToINR / rateBaseToSelected;
      setMarketRate(calculatedMarketRate);

      // --- 2. Find Currency Details & Set Fees/Adjustments ---
      const sendingCurrencyDetails = currencies.find(c => c.code === selectedSendCurrency);
      const adjustmentPercent = sendingCurrencyDetails?.rateAdjustmentPercentage ?? 0;
      const fetchedScopeXFeePercent = sendingCurrencyDetails?.wiseFeePercentage ?? 0;
      const fetchedBankFee = sendingCurrencyDetails?.bankTransferFee ?? 0;

      setRateAdjustment(adjustmentPercent);
      setWiseFeePercentage(fetchedScopeXFeePercent);
      setBankTransferFeeAmount(fetchedBankFee);

      // --- 3. Calculate "Our Rate" (ScopeX Rate) ---
      const calculatedOurRate = calculatedMarketRate * (1 - adjustmentPercent / 100);
      setOurRate(calculatedOurRate);

      // --- 4. Clear specific calculation errors if successful ---
      if (error && (error.startsWith("Market rate unavailable") || error.startsWith("Invalid market rate"))) {
        setError(null);
      }

    } catch (err: any) {
      console.error("HeroSection: Error calculating rates/fees:", err);
      setError(err.message || `Could not calculate rates/fees for ${selectedSendCurrency}.`);
      setMarketRate(null); setOurRate(null); setRateAdjustment(0);
      setWiseFeePercentage(0); setBankTransferFeeAmount(0); setOurFeeAmount(0);
    }
  }, [selectedSendCurrency, rawRates, currencies, isLoading, error, receiveCurrencyCode]); // Dependencies include isLoading now

  // --- Amount & Variable Fee Calculation Effect ---
  useEffect(() => {
    // This effect depends on calculated rates/fees, so it should implicitly wait for isLoading to be false
    let calculatedReceive = 0;
    let calculatedOurFee = 0;
    const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;

    if (ourRate !== null && !isNaN(ourRate) && numericSendAmount > 0) {
      const amountToSendAfterFees = numericSendAmount - (numericSendAmount * (wiseFeePercentage / 100)) - bankTransferFeeAmount;
      if (amountToSendAfterFees > 0) {
          calculatedReceive = amountToSendAfterFees * ourRate;
      } else {
          calculatedReceive = 0;
      }
    }

    if (wiseFeePercentage > 0 && numericSendAmount > 0) {
      calculatedOurFee = numericSendAmount * (wiseFeePercentage / 100);
    }
    setOurFeeAmount(calculatedOurFee);

    setReceiveAmount(calculatedReceive > 0 ? calculatedReceive.toFixed(2) : (numericSendAmount > 0 ? "0.00" : ""));

  }, [sendAmount, ourRate, wiseFeePercentage, bankTransferFeeAmount]);

  // --- Input Handlers ---
  const handleSendAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedAmount = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setSendAmount(sanitizedAmount);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    console.log("HeroSection: Currency changed to:", newCurrency);
    setSelectedSendCurrency(newCurrency);
    // Reset dependent states immediately, but rely on useEffect for recalculation after data fetch if needed
    setSendAmount(""); setReceiveAmount("");
    setMarketRate(null); setOurRate(null); setRateAdjustment(0);
    setError(null);
    setWiseFeePercentage(0); setBankTransferFeeAmount(0); setOurFeeAmount(0);
    // No need to manually set isLoading here, the main useEffect handles it
  };

  // --- Display Logic ---
  const displayOurRate = useMemo(() => {
    // No need to check isLoading here, relying on the conditional rendering in JSX
    if (error && !ourRate) return "Rate unavailable";
    if (ourRate === null && selectedSendCurrency && !error) return "Calculating...";
    if (ourRate === null) return "Select currency";
    return `1 ${selectedSendCurrency} = ${ourRate.toFixed(4)} ${receiveCurrencyCode}`;
  }, [error, ourRate, selectedSendCurrency, receiveCurrencyCode]); // Removed isLoading dependency

  const displayMarketRate = useMemo(() => {
    // No need to check isLoading here
    if (marketRate === null || (error && !marketRate)) return null;
    return `1 ${selectedSendCurrency} ≈ ${marketRate.toFixed(4)} ${receiveCurrencyCode}`;
  }, [error, marketRate, selectedSendCurrency, receiveCurrencyCode]); // Removed isLoading dependency

  // Calculate Savings/Difference
  const savingsAmount = useMemo(() => {
    // This calculation depends on rates, will be null if rates are null (which happens during loading)
    const numericSendAmount = parseFloat(sendAmount.replace(/,/g, "")) || 0;
    if (numericSendAmount <= 0 || marketRate === null || ourRate === null || ourRate >= marketRate) {
      return null;
    }
    const amountToConvert = numericSendAmount;
    const receivedAtMarket = amountToConvert * marketRate;
    const receivedAtOurRate = amountToConvert * ourRate;
    const marketDifference = receivedAtMarket - receivedAtOurRate;
    if (marketDifference <= 0.01) return null;
    return marketDifference.toFixed(2);
  }, [sendAmount, marketRate, ourRate]);

  // --- Arrival Date Effect ---
  useEffect(() => {
    const today = new Date();
    const arrival = new Date(today);
    arrival.setDate(today.getDate() + 2); // Example: 2 days
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    setArrivalDate(arrival.toLocaleDateString(undefined, options));
  }, []);

  // --- JSX Render ---
  return (
    <section className="Hero-Section bg-[#f2f4f7] dark:bg-background py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-5">
             {/* Add Skeleton for HeroText if needed, or keep as is if it doesn't load data */}
            <HeroText />
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:w-xl lg:ml-auto w-full max-w-lg">
            <div className="bg-white dark:bg-background rounded-3xl shadow-lg md:p-8 p-4 border border-gray-200 dark:border-secondarybox">

              {/* --- Loading State --- */}
              {isLoading && (
                <div className="space-y-6 animate-pulse">
                  {/* Skeleton for Rate Display */}
                  <div className="flex flex-col items-end space-y-2 mb-4">
                    <Skeleton className="h-8 w-48 rounded-full" />
                    <Skeleton className="h-5 w-40 rounded-full" />
                  </div>
                  {/* Skeleton for Inputs */}
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-16 w-full rounded-xl" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-16 w-full rounded-xl" />
                  </div>
                  {/* Skeleton for Paying With */}
                  <div className="space-y-3">
                     <Skeleton className="h-4 w-24" />
                     <Skeleton className="h-16 w-full rounded-xl" />
                  </div>
                  {/* Skeleton for Fee Details */}
                  <div className="border border-gray-200 dark:border-secondarybox rounded-xl p-4 space-y-3">
                     <div className="flex justify-between items-center"> <Skeleton className="h-4 w-2/5" /> <Skeleton className="h-4 w-1/4" /> </div>
                     <div className="flex justify-between items-center"> <Skeleton className="h-4 w-2/5" /> <Skeleton className="h-4 w-1/4" /> </div>
                     <Skeleton className="h-px w-full bg-gray-200 dark:bg-secondarybox my-2" />
                     <div className="flex justify-between items-center"> <Skeleton className="h-5 w-1/3" /> <Skeleton className="h-5 w-1/4" /> </div>
                  </div>
                   {/* Skeleton for Arrival Info */}
                   <Skeleton className="h-4 w-3/4 mt-2" />
                  {/* Skeleton for Actions */}
                  <div className="mt-6 flex sm:flex-row flex-col items-center gap-3">
                    <Skeleton className="h-12 w-full rounded-full" />
                    <Skeleton className="h-12 w-full rounded-full" />
                  </div>
                </div>
              )}

              {/* --- Loaded State --- */}
              {!isLoading && (
                <>
                  {/* Rate Display Section */}
                  <div className="text-right mb-4 min-h-[60px] space-y-2 flex flex-col items-end">
                     {/* Error Display */}
                     {error && ( <div className="font-medium text-sm p-1.5 px-2.5 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 inline-flex items-center gap-1.5"> <IoIosInformationCircleOutline size={16} /> Error: {error} </div> )}
                     {/* Our Rate Display */}
                     {!error && ourRate !== null && (
                        <div className="font-semibold p-2 px-4 rounded-full bg-primary text-neutral-900 inline-flex items-center gap-1.5 cursor-default text-sm"
                             title={`Rate includes our margin of ${rateAdjustment.toFixed(2)}%. This is the rate applied to your transfer.`}>
                            <FaLock size={14} /> Our Rate: {displayOurRate}
                        </div>
                     )}
                     {/* Calculating Rate */}
                     {!error && ourRate === null && selectedSendCurrency && ( <div className="text-sm text-gray-500 dark:text-gray-400">Calculating rate...</div> )}
                      {/* Market Rate Display */}
                     {!error && marketRate !== null && displayMarketRate && (
                         <div className="font-medium text-xs p-1.5 px-2.5 rounded-full bg-lightgray dark:bg-secondarybox text-gray-300 dark:text-gray-400 inline-flex items-center gap-1.5 cursor-help"
                              title="Current mid-market rate. For comparison only.">
                            <FaInfoCircle size={14} /> Market Rate: {displayMarketRate}
                         </div>
                     )}
                      {/* Default message if no currency selected */}
                      {!selectedSendCurrency && !error && ( <div className="text-sm text-gray-500 dark:text-gray-400">Select sending currency</div> )}
                  </div>

                  {/* --- ScopeX Savings Banner --- */}
                  {/* Conditionally rendered when there are calculated savings */}
                  {savingsAmount && !error && ourRate !== null && marketRate !== null && (
                    <div className="mb-4 bg-gradient-to-r from-green-50 to-primary/10 dark:from-green-900/30 dark:to-primary/20 rounded-xl p-3 border-l-4 border-primary shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-full p-2 text-white dark:text-black flex-shrink-0">
                          <FaPiggyBank size={20} /> {/* Piggy bank icon */}
                        </div>
                        <div>
                          <p className="font-bold text-primary-dark dark:text-primary-light flex items-center gap-1">
                            <span>Save up to ₹{savingsAmount} with ScopeX</span> {/* Changed Wise to ScopeX */}
                            <TrendingUp size={16} className="text-green-600 dark:text-green-400" /> {/* Trend up icon */}
                          </p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">
                            Better rates than traditional banks! {/* Supporting text */}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* --- End ScopeX Savings Banner --- */}


                  {/* You Send Input */}
                  <div className="mb-3">
                    <label className="block font-medium text-main dark:text-gray-200 mb-1"> You send exactly </label>
                    <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between focus-within:ring-2 focus-within:ring-primary focus-within:border-primary dark:focus-within:border-primary transition-all duration-150">
                      <input type="text" inputMode="decimal" placeholder="0" value={sendAmount} onChange={handleSendAmountChange} className="block w-full h-16 p-3 text-main dark:text-white text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500" disabled={isLoading} aria-label="Amount to send" />
                      {/* CountryDropdown now only renders when not loading */}
                      <div className="flex-shrink-0 h-full"> <CountryDropdown selectedCurrency={selectedSendCurrency} onCurrencyChange={handleCurrencyChange} disabled={isLoading} /> </div>
                    </div>
                  </div>

                  {/* Recipient Gets Input */}
                  <div className="mb-3">
                    <label className="block font-medium text-main dark:text-gray-200 mb-1"> Recipient gets (approx.) </label>
                    <div className="w-full border border-gray-300 dark:border-secondarybox rounded-xl shadow-sm flex items-center justify-between bg-gray-50 dark:bg-secondarybox/30">
                      <input type="text" inputMode="decimal" placeholder="0.00" value={receiveAmount} readOnly className="block w-full h-16 p-3 text-main dark:text-gray-300 text-xl font-semibold focus:outline-none bg-transparent rounded-l-xl placeholder-gray-400 dark:placeholder-gray-500" aria-label="Amount recipient gets" />
                      <div className="flex items-center gap-2 w-auto px-3 flex-shrink-0"> <Image src={inr} alt="INR-Flag" width={24} height={24} className="rounded-full" /> <p className="text-main dark:text-gray-200 font-semibold"> INR </p> </div>
                    </div>
                  </div>

                  {/* Paying With */}
                  <div className="mb-4">
                     <label className="block font-medium text-main dark:text-gray-200 mb-1">Paying with</label>
                     <div className="p-3 h-16 border border-gray-300 dark:border-secondarybox rounded-xl flex items-center justify-between text-main dark:text-gray-200">
                       <div className="flex items-center gap-2"> <CiBank size={24} /> <span className="font-semibold">Bank transfer</span> </div>
                       {/* Optionally add back the change button if needed */}
                       {/* <button className="text-green dark:text-green-light font-medium bg-green/10 dark:bg-green/20 px-3 py-2 rounded-full text-sm inline-flex items-center gap-2 hover:bg-green/20 dark:hover:bg-green/30"> Change <IoIosArrowForward size={18} /> </button> */}
                     </div>
                  </div>

                  {/* Fee Details (Dynamically Calculated) */}
                  <div className="text-sm border border-gray-300 dark:border-secondarybox rounded-xl p-4 space-y-2.5">
                    <div className="flex justify-between">
                      <span className="text-main dark:text-gray-300"> Bank transfer fee </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {/* Show actual fee or '...' if rate not yet calculated */}
                        {ourRate !== null ? `${bankTransferFeeAmount.toFixed(2)} ${selectedSendCurrency}` : '...'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-main dark:text-gray-300"> ScopeX fee ({wiseFeePercentage > 0 ? `${wiseFeePercentage.toFixed(2)}%` : '...'}) </span>
                       <span className="text-gray-600 dark:text-gray-400">
                        {/* Show actual fee or '...' if rate not yet calculated */}
                        {ourRate !== null ? `${ourFeeAmount.toFixed(2)} ${selectedSendCurrency}` : '...'}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-200 dark:border-secondarybox" />
                    <div className="flex justify-between text-main dark:text-gray-200 font-semibold">
                      <span>Total included fees</span>
                      <span>
                        {/* Show total fee or '...' if rate not yet calculated */}
                        {ourRate !== null ? `${(bankTransferFeeAmount + ourFeeAmount).toFixed(2)} ${selectedSendCurrency}` : '...'}
                      </span>
                    </div>
                  </div>

                  {/* Arrival Info */}
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                     <p> Should arrive around{" "} <span className="text-main dark:text-gray-300 font-medium">{arrivalDate || '...'}</span> </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex sm:flex-row flex-col items-center gap-3">
                     <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-secondarybox hover:bg-gray-100 dark:hover:bg-secondarybox font-medium rounded-full text-green dark:text-primary bg-white dark:bg-background hover:text-green-dark dark:hover:text-primary-light transition-colors duration-150 ease-in-out h-12 text-base" disabled={isLoading || !ourRate}> Compare fees </button>
                     <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-black dark:text-black bg-primary hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-colors duration-150 ease-in-out h-12 text-base shadow-sm" disabled={isLoading || !ourRate || !sendAmount || parseFloat(sendAmount) <= 0}> Send money </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;