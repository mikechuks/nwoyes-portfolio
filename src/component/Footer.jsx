import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiHome, FiUser, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-10 px-6 md:px-20">
      <motion.div
        className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Navigation Links */}
        <motion.div
          className="flex items-center justify-center md:justify-start gap-10 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#home" className="flex items-center gap-2 hover:text-cyan-400">
            <FiHome className="text-lg" />
            Home
          </a>
          <a href="#about" className="flex items-center gap-2 hover:text-cyan-400">
            <FiUser className="text-lg" />
            About me
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-cyan-400">
            <FiPhone className="text-lg" />
            Contact
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
            <motion.a
              href="#"
              key={i}
              whileHover={{ scale: 1.2 }}
              className="bg-gray-700 hover:bg-cyan-500 p-3 rounded-full transition"
            >
              <Icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Terms */}
        <motion.div
          className="text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Terms of Service - Privacy Policy
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
