import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false);
      setMobileMenuOpen(false);
    }, 100);
  };

  const listVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const projectScopeItems = [
    { name: "Literature Survey", id: "literature" },
    { name: "Research Gap", id: "gap" },
    { name: "Research Problem", id: "problem" },
    { name: "Research Objectives", id: "objectives" },
    { name: "Methodology", id: "methodology" },
    { name: "Technologies", id: "technology" },
  ];

  const navItems = [
    { name: "Timeline", id: "time" },
    { name: "Documents", id: "doc" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center py-4 px-6 bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 shadow-lg"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h1 className="text-white font-extrabold text-2xl tracking-wider select-none">
          🍃 Tea Supply Chain
        </h1>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-4 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation items */}
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex lg:gap-8 lg:items-center mt-5 lg:mt-0 bg-green-50 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-md lg:shadow-none">
          {/* Project Scope Dropdown */}
          <div className="relative mb-4 lg:mb-0" ref={dropdownRef}>
            <motion.li
              className="cursor-pointer flex items-center gap-1 font-semibold text-green-900 hover:text-yellow-700 transition-colors rounded-md px-3 py-2 lg:py-1 select-none"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Project Scope
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-chevron-down transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </motion.li>

            {dropdownOpen && (
              <motion.div
                className={`${
                  mobileMenuOpen ? "relative w-full" : "absolute z-50 left-0 top-full"
                } mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden border border-green-200`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {projectScopeItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.id}`}
                    className="block w-full text-left px-5 py-3 text-green-800 hover:bg-yellow-100 hover:text-yellow-900 cursor-pointer transition-colors duration-150 border-b border-green-100 last:border-b-0"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleScroll(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* Regular Nav Items */}
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="block py-3 lg:py-1 px-3 text-green-900 hover:text-yellow-800 cursor-pointer font-medium rounded-md select-none transition-colors"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              onClick={() => handleScroll(item.id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleScroll(item.id)}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
