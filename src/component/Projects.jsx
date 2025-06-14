import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchProjectCategories, fetchProjects } from "../data/fakeAPI";

const Projects = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetchProjectCategories().then(setCategories);
    fetchProjects().then(setProjects);
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  if (!categories.length || !projects.length) {
    return (
      <section className="bg-[#0f172a] text-white px-6 md:px-20 py-16 text-center">
        
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white px-6 md:px-20 py-16"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My recent <span className="text-cyan-400">works</span>
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              active === cat
                ? "bg-cyan-400 text-white"
                : "bg-[#1e293b] hover:bg-cyan-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden bg-[#1e293b] shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
