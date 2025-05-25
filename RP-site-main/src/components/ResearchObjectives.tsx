import { motion } from "framer-motion";

function ResearchObjectives() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-green-800">
          Research Objectives
        </h2>

        <div className="text-left space-y-4 md:space-y-6">
          <div className="bg-green-50 p-3 md:p-5 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
              Demand Forecasting for the Tea Industry
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Analyze historical demand data, integrate weather and market trends, and develop an LSTM-based forecasting model for accurate tea demand prediction. Deploy this model through a user-friendly web application and validate its effectiveness in real-world settings.
            </p>
          </div>

          <div className="bg-green-50 p-3 md:p-5 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
              AI-driven Inventory Management System
            </h3>
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-1">
              <li><strong>Data-Driven Weekly Conversion:</strong> Transform monthly forecasts into precise weekly raw material requirements using AI models.</li>
              <li><strong>Inventory Optimization:</strong> Apply LSTM forecasting to dynamically manage inventory levels.</li>
              <li><strong>Waste Reduction & Efficiency:</strong> Minimize waste by aligning procurement with AI-generated forecasts.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-3 md:p-5 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
              Predictive Labor Management System
            </h3>
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-1">
              <li><strong>Data-Driven Labor Forecasting:</strong> Use historical labor data and external variables to predict weekly labor requirements.</li>
              <li><strong>Labor Allocation Optimization:</strong> Ensure efficient workforce distribution based on predicted demand.</li>
              <li><strong>Real-Time Risk Monitoring:</strong> Integrate alerts for potential labor shortages and disruptions.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResearchObjectives;
