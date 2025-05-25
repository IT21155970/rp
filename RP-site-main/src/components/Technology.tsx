import { motion } from "framer-motion";
import flask from "../assets/98-985032_flask-logo-flask-python-icon.png";
import python from "../assets/python.png";
import react from "../assets/OIP (10).jpeg";
import mongodb from "../assets/OIP (11).jpeg";
import firebase from "../assets/firebase.webp";
import nodeicon from "../assets/nodejs.jpeg";


const techs = [
  { src: python, alt: "Python" },
  { src: react, alt: "React" },
  { src: mongodb, alt: "MongoDB" },
  { src: firebase, alt: "Firebase" },
  { src: nodeicon, alt: "Node.js" },
  { src: flask, alt: "Flask" },
];

export default function TechStack() {
  return (
    <div className="py-8">
      <h1 className="text-center mb-10 text-4xl text-blue-800 font-bold">Technology</h1>
      <div className="flex flex-wrap justify-center gap-12 p-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md mb-3 p-4">
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-center font-medium">{tech.alt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

