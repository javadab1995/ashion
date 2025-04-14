import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, type }) {
    const navigate = useNavigate();
    const className = "text-xl text-indigo-950 md:hover:border-b-2   border-indigo-400 md:text-xl hover:h-10  sm:text-lg px-1 py-2 flex md:block gap-2"

  if (to === "-1") return <button className={className} onClick={() => navigate(-1)}></button>;
  if (type === "primary") return (
    <Link
      to={to}
      className="text-indigo-950 font-link border-b border-b-orange-700 text-xl font-medium uppercase mt-10 linkbutton"
    >
      {children}
    </Link>
  );
  if (type === "submit") return (
    <Link
      to={to}
      className="text-indigo-950 font-link border-4 border-orange-700 text-xl font-medium uppercase mt-2 mb-10 linkbutton px-4 py-2 hover:text-orange-50 hover:bg-orange-700 hover:rounded-lg transition-all duration-300 text-center  "
    >
      {children}
    </Link>
  );
  
  return (
      <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
