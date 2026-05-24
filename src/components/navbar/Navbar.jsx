import { Link } from "react-router-dom";
import userLogo from "../../assets/react.svg";
import logo from "../../assets/react.svg";
import { useContext, useState } from "react";
import { countercontext } from "../../context/Context";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let { token, logout } = useContext(countercontext);
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
                isOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              } absolute top-14 right-0 z-50 w-56 transition-all duration-200`}
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                {token ? (
                  <>
                    <div className="border-b border-gray-100 px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={userLogo}
                          alt="user"
                          className="w-10 h-10 rounded-full border"
                        />

                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Sallam
                          </h4>

                          <p className="text-sm text-gray-500">
                            sallam@flowbite.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition font-medium"
                      >
                        Sign out
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="p-2 space-y-2">
                    <Link
                      to={"login"}
                      className="block w-full px-4 py-3 rounded-xl hover:bg-gray-100 transition font-medium text-gray-700"
                    >
                      Login
                    </Link>

                    <Link
                      to={"register"}
                      className="block w-full px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-medium text-center"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
