import { Link } from "react-router-dom";
import userLogo from "../../assets/react.svg";
import logo from "../../assets/react.svg";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={""}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Open_Source
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
              id="user-menu-button"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={userLogo}
                alt="user photo"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-14 right-4 z-50 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}
              id="user-dropdown"
            >
              <div className="px-4 py-3 text-sm border-b border-default">
                <span className="block text-heading font-medium">Sallam</span>
                <span className="block text-body truncate">
                  sallam@flowbite.com
                </span>
              </div>
              <ul
                className="p-2 text-sm text-body font-medium"
                aria-labelledby="user-menu-button"
              >
                <li>
                  <Link
                    to={"login"}
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to={""}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"Brands"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  to={"Categories"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Categories
                </Link>
              </li>
              {/* <li>
                <Link
                  to={""}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to={""}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
// function Navbar() {
//   return (
//     <>
//       <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to={""}
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src={logo} className="h-7" alt="Flowbite Logo" />
//             <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
//               Open_Source
//             </span>
//           </Link>
//           <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
//               id="user-menu-button"
//               aria-expanded="false"
//               data-dropdown-toggle="user-dropdown"
//               data-dropdown-placement="bottom"
//             >
//               <span className="sr-only">Open user menu</span>
//               <img
//                 className="w-8 h-8 rounded-full"
//                 src={userLogo}
//                 alt="user photo"
//               />
//             </button>
//             {/* <!-- Dropdown menu --> */}
//             <div
//               className="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
//               id="user-dropdown"
//             >
//               <div className="px-4 py-3 text-sm border-b border-default">
//                 <span className="block text-heading font-medium">
//                   Joseph McFall
//                 </span>
//                 <span className="block text-body truncate">
//                   name@flowbite.com
//                 </span>
//               </div>
//               <ul
//                 className="p-2 text-sm text-body font-medium"
//                 aria-labelledby="user-menu-button"
//               >
//                 <li>
//                   <a
//                     href="#"
//                     className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
//                   >
//                     Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
//                   >
//                     Settings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
//                   >
//                     Earnings
//                   </a>
//                 </li>
//                 <li>
//                   <Link
//                     to={"login"}
//                     className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
//                   >
//                     Sign out
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <button
//               data-collapse-toggle="navbar-user"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
//               aria-controls="navbar-user"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokelinecap="round"
//                   strokewidth="2"
//                   d="M5 7h14M5 12h14M5 17h14"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-user"
//           >
//             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//               <li>
//                 <Link
//                   to={""}
//                   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"Brands"}
//                   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   Brands
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"Categories"}
//                   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   Categories
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link
//                   to={""}
//                   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   Pricing
//                 </Link>
//               </li> */}
//               {/* <li>
//                 <Link
//                   to={""}
//                   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   Contact
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

export default Navbar;
