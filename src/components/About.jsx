import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCalendar,
  FiPhone,
  FiMapPin,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bioData = [
    { icon: FiCalendar, label: "Birthday", value: "19 January 2002" },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+94762971306",
      isLink: true,
      href: "tel:+94762971306",
    },
    { icon: FiMapPin, label: "City", value: "Jaffna" },
    {
      icon: FiBookOpen,
      label: "Degree",
      value: "B.Sc (Hons) in Software Engineering",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "thushakarant@gmail.com",
      isLink: true,
      href: "mailto:thushakarant@gmail.com",
    },
  ];

  return (
    <section id="about" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="section-content"
      >
        <h1>About Me</h1>
        <p className="section-description">
          Hello, I'm Balasubramaniyam Thushakaran – a passionate Full-Stack
          Software Engineer with a strong interest in technology, coding, and
          design. My journey began with a curiosity about how computers work and
          evolved into a deep passion for building scalable, user-focused web
          applications.
        </p>

        <div className="bio-card">
          <h2>Bio Data</h2>
          <div className="bio-info">
            {bioData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bio-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="bio-icon" />
                  <div className="bio-details">
                    <strong>{item.label}:</strong>
                    {item.isLink ? (
                      <a href={item.href} className="bio-link">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
