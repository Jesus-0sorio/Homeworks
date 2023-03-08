import { NavLink } from "react-router-dom";

export const CardExercise = ({ text, number }) => {
  return (
    <NavLink
      to={`/exercise/${number}`}
      className="flex items-center w-11/12 text-center mx-auto h-48  shadow justify-center border rounded-2xl text-lg active:scale-95 active:shadow-xl active:bg-gray-100 ease-in-out duration-200 hover:scale-110"
    >
      {text}
    </NavLink>
  );
};
