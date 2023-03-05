import { NavLink } from "react-router-dom";
import { Exercise } from "../pages";

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
        <nav className="hidden w-full md:block md:w-auto ">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <div className="group inline-block relative">
                <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">
                  Ejercicios
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(
                    (x, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            to={`/exercise/${x}`}
                            className="rounded-t w-32 text-center bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          >
                            Ejercicio {x}
                          </NavLink>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
