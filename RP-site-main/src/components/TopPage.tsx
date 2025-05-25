import { motion } from "framer-motion";
import hederimage from "../assets/Tea.jpeg"; // Adjust path if needed

function TopPage() {
  return (
    <div className="relative w-full h-[600px] overflow-x-hidden">
      {/* Background image */}
      <img
        src={hederimage}
        alt="Top Image"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Centered content with heading and button */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.div>
    </div>
  );
}

export default TopPage;




