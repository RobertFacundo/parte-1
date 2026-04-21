import { Link } from "react-router-dom";

const navLinks = [
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Use cases", path: "/use-cases" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
];

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-[10px] py-[10px]">
          <img src="/logo&brand.png" alt="Positivus logo" className="h-[36px]" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-[20px] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <button className="border border-[#191A23] px-[35px] py-[20px] rounded-[14px] text-[20px] font-medium transition-all duration-300 hover:bg-[#191A23] hover:text-white hover:shadow-lg cursor-pointer">
            Request a quote
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
