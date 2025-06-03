import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="flex flex-wrap justify-center text-white px-9 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get a project in <br />{" "}
          <span className="text-cyan-400">mind?</span>
        </motion.h1>
      </div>

      <div className="w-full max-w-3xl">
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name">Your name</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="my-4 p-2 rounded-md bg-transparent border border-gray-400 text-white w-full"
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              className="my-4 p-2 rounded-md bg-transparent border border-gray-400 text-white w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            rows={6}
            placeholder="Send Message"
            className="w-full p-3 mt-4 rounded-md bg-transparent border border-gray-400 text-white"
          ></textarea>
          <br />
          <button
            type="submit"
            className="mt-6 bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
