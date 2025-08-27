import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="section-content"
      >
        <h1>Contact Me</h1>
        <p className="section-description">
          Feel free to reach out via the form below or through social media.
        </p>

        <div className="contact-container">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="form-textarea"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <strong>Email:</strong>
                <a
                  href="mailto:thushakarant@gmail.com"
                  className="contact-link"
                >
                  thushakarant@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <div>
                <strong>Phone:</strong>
                <a href="tel:+94762971306" className="contact-link">
                  +94762971306
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
