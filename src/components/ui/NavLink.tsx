interface NavLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  isActive = false,
}) => {
  const baseStyle =
    "flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200";
  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${baseStyle} ${isActive ? activeStyle : defaultStyle}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
