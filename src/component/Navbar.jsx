import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { fetchMenuLinks } from "../data/fakeAPI"; // ⬅️ import fake DB

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuLinks, setMenuLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    setLoading(true);
    fetchMenuLinks().then((data) => {
      setMenuLinks(data);
      setLoading(false);
    });
  }, []);

  return (
    <motion.nav
      className="bg-[#0f172a] text-white px-6 md:px-20 py-6 relative z-50"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Nwoye Michael
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex gap-8 text-gray-300 text-sm font-medium"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {loading ? (
            <li className="text-sm text-gray-500">Loading...</li>
          ) : (
            menuLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))
          )}
        </motion.ul>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="absolute top-0 left-0 w-full h-screen bg-[#0f172a] flex flex-col items-center justify-center space-y-8 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loading ? (
              <div className="text-gray-500">Loading...</div>
            ) : (
              menuLinks.map((item, index) => (
                <motion.div
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer text-gray-300 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {item}
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
