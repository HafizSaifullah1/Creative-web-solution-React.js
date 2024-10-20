import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Header() {
  return (
    <div>
      
      <header className="shadow sticky z-50 top-0">
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <Link to="/" className="flex items-center">
        <img
          src="./logo.png"
          className="mr-3 h-20 w-20"
          alt="Logo"
        />
      </Link>

      <div className="flex items-center lg:order-2">
        <Link
          to="/login"
          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Log in
        </Link>
        <Link
          to="#"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Get started
        </Link>
        {/* Mobile Menu Toggle Button */}
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => {
            const menu = document.getElementById('mobile-menu-2');
            menu.classList.toggle('hidden');
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    <div className="lg:hidden" id="mobile-menu-2" style={{ display: 'none' }}>
      <ul className="flex flex-col mt-4 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Services
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Header