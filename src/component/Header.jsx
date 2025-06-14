import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { fetchHeaderData } from '../data/fakeAPI';

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    fetchHeaderData().then((data) => setHeaderData(data));
  }, []);

  if (!headerData) return <div className="text-center py-10"></div>;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Left Side */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {headerData.title} <br />
          <span className="text-cyan-400">{headerData.subtitle}</span>
        </h1>

        <div className="flex gap-4">
          {headerData.buttons.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.type === "primary"
                  ? "bg-cyan-400 hover:bg-cyan-500"
                  : "bg-gray-800 hover:bg-gray-700 flex items-center gap-2"
              } text-white px-6 py-2 rounded-full font-semibold transition`}
            >
              {btn.label}
              {btn.label.includes("Download") && <FiDownload />}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 mt-12 md:mt-0 flex justify-center"
        initial={{ rotate: -15, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.9, type: 'spring', stiffness: 60, delay: 0.4 }}
      >
        <img
          src={headerData.image}
          alt="Designer"
          className="w-72 md:w-[400px]"
        />
      </motion.div>
    </section>
  );
};

export default Header;
