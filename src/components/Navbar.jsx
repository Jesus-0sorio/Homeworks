import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full text-gray-700 bg-white">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Taller 01
          </NavLink>
        </div>
        <nav>
          {/*<NavLink>Inicio</NavLink>*/}
          <div className="group inline-block relative">
            <button className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              Ejercicios
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
          <div className="group inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Dropdown</span>
              
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Three is the magic number
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
