import { motion } from "framer-motion";
import uditha from '../assets/uditha.jpg';         // Project Supervisor 1
import lokesha from '../assets/lokesha.jpg';       // Project Supervisor 2
import madushan from '../assets/madushan.jpg';     // Research Team
import gimhani from '../assets/gimhani.jpg';
import wadigasinghe from '../assets/wadigasinghe.jpg';
import bandara from '../assets/bandara.jpg';

const researchTeam = [
  { name: "Madushan S.M.P.K.G.S", image: madushan },
  { name: "Gimhani K.M.B.K", image: gimhani },
  { name: "Wadigasinghe U.K", image: wadigasinghe },
  { name: "Bandara D.M.A.T", image: bandara },
];

const TeamMembers = () => {
  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-12 text-green-800">
        Meet Our Team
      </h2>

      {/* Project Supervisors */}
      <h3 className="text-center text-xl font-semibold mb-8 text-green-800">
        Project Supervisors
      </h3>
      <div className="flex flex-wrap justify-center gap-20 mb-16">
        {[ 
          { name: "Uditha Dharmakeerthi", image: uditha, role: "Supervisor" },
          { name: "Lokesha Weerasinghe", image: lokesha, role: "Co-Supervisor" }
        ].map(({ name, image, role }, i) => (
          <motion.div
            key={i}
            className="w-64 bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-200 shadow-lg mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-semibold text-center text-gray-800 leading-tight">
              {name}
            </h1>
            <p className="text-green-600 font-medium mt-1">{role}</p>
          </motion.div>
        ))}
      </div>

      {/* Research Team */}
      <h3 className="text-center text-xl font-semibold mb-8 text-green-800">
        Research Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {researchTeam.map(({ name, image }, index) => (
          <motion.div
            key={index}
            className="w-64 bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-200 shadow-lg mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-semibold text-center text-gray-800 leading-tight">
              {name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
