import { NavLink } from "react-router-dom";

function Tabs() {
  const navigation = [
    { label: "Libros", href: "/books" },
    { label: "Autores", href: "/authors" },
    { label: "Géneros", href: "/genres" },
  ];

  const itemStyles =
    "inline-block text-cyan-600 font-semibold rounded-tl-xl border rounded-tr-xl py-3 px-6";

  return (
    <nav className="pt-6">
      <div className="flex container mx-auto px-1">
        <ul className="flex w-min ">
          {navigation.map((item) => (
            <li className="inline-block" key={item.label}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-50  border-b-0 ${itemStyles}`
                    : `bg-slate-200 ${itemStyles}`
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full border-b"></div>
      </div>
    </nav>
  );
}

export default Tabs;
