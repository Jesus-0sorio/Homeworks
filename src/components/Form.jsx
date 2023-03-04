
export const Form = ({ HandleFunction, children }) => {
  const Function = (e) => {
    e.preventDefault();
    HandleFunction();
  };

  return (
    <form
      className="shadow shadow-slate-400 p-4 rounded-md "
      onSubmit={Function}
    >
      {children}
    </form>
  );
};
