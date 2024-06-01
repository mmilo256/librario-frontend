import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-md h-16 bg-white">
      <div className="container px-1 mx-auto h-full flex items-center justify-between">
        <Link className="text-slate-700 font-bold text-xl" to="/books">
          Librario
        </Link>
        <span className="bg-blue-400 rounded-full h-10 w-10"></span>
      </div>
    </header>
  );
}

export default Header;
