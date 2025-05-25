import { motion } from "framer-motion";

function ResearchProblem() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-green-800">
          Research Problem & Solution
        </h2>

        <div className="text-left space-y-4 md:space-y-6">
          <div className="bg-green-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-green-700">
              Proposed Problem
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The Sri Lankan tea industry suffers from various supply chain inefficiencies including inaccurate demand forecasting, labor unpredictability, poor inventory management, and inefficient logistics. Traditional methods often lack the ability to integrate dynamic external factors such as weather patterns, labor availability, and traffic conditions, leading to suboptimal production planning and delivery.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Despite being a key contributor to the national economy, the industry relies heavily on outdated practices. There is a critical need for an intelligent, real-time system that can provide predictive insights to optimize operations across the tea supply chain — from plucking and production to delivery and inventory control.
            </p>
          </div>

          <div className="bg-green-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-green-700">
              Proposed Solution
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              This research proposes an AI-powered forecasting and decision-support platform specifically designed for the tea supply chain in Sri Lanka. The system integrates real-time data with advanced machine learning models—namely LSTM and CNN architectures—to forecast demand, labor, inventory needs, and traffic flow.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              By combining internal historical data with external variables (weather, labor attendance, traffic, etc.), the platform will help managers make data-driven decisions that minimize delays, reduce wastage, and improve cost-efficiency.
            </p>

            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Demand Forecasting: </span>
                LSTM models will analyze sales history, weather data, and seasonal factors to accurately predict short- and long-term tea demand.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Labor Prediction: </span>
                Historical labor attendance and weather patterns will be used to anticipate workforce availability using sequence-based LSTM models.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Inventory Management: </span>
                AI-based simulations will automate procurement and storage monitoring using reinforcement learning and predictive analytics.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Traffic Optimization: </span>
                CNNs and LSTMs trained on GPS and road condition data will forecast delivery delays and suggest optimal routing for distribution trucks.
              </li>
            </ul>

            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-4">
              The platform will feature a dashboard where managers can visualize forecasts and alerts in real-time. Technologies such as MongoDB or Firebase will be used for data handling, while TensorFlow or PyTorch will support model training and inference. The system will be scalable, cost-effective, and built with usability in mind for factory-level adoption.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResearchProblem;
