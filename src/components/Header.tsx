import { Home, Laptop, Trophy, SquareUser, Mic, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <SquareUser size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Laptop size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Mic size={18} /> },
    { label: "Login", href: "/login", icon: <UserCircle size={18} /> },
  ];

  return (
    <header className="bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>
        <nav className="flex gap-2">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  isActive ? "text-red-900" : "text-slate-600 hover:text-red-900"
                }`
              }
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
