import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { fetchExperienceData } from "../data/fakeAPI"; // adjust path if needed

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    fetchExperienceData().then((data) => {
      setExperienceData(data);
    });
  }, []);

  if (!experienceData) {
    return <div className="text-center py-20 text-cyan-400"></div>;
  }

  return (
    <section id="experience" className="text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {experienceData.title} <span className="text-cyan-400">{experienceData.highlight}</span>
          </h2>
        </div>

        {/* Experience Cards */}
        {experienceData.experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt="Experience Illustration"
                className="w-60 h-auto rounded-xl"
              />
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              <a
                href="#readmore"
                className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
              >
                Read more <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
