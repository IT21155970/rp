import { motion } from "framer-motion";

function Methodology() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
          Methodology
        </h2>

        <div className="text-left space-y-6">

          {/* Demand Forecasting System */}
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Demand Forecasting System</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Data Collection and Analysis:</strong> Collect historical sales and weather data. Include holidays and market trends across multiple regions and seasons.</li>
              <li><strong>Model Development:</strong> Implement LSTM to predict monthly forecasts. Train on seasonal and regional demand fluctuations.</li>
              <li><strong>System Design:</strong> Create a responsive, user-friendly web interface with forecast visualizations and recommendations.</li>
              <li><strong>Testing and Validation:</strong> Conduct unit, integration, system, and UAT testing. Validate using MAE, RMSE, and R².</li>
              <li><strong>Deployment:</strong> Deploy on cloud platforms with real-time capability and security across stakeholder locations.</li>
            </ul>
          </div>

          {/* Inventory Management System */}
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">AI-Driven Inventory Management</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Data Collection and Analysis:</strong> Use monthly forecasts and historical data to model weekly raw material needs.</li>
              <li><strong>Model Development:</strong> Apply LSTM to convert forecasts into weekly quantities, capturing demand volatility.</li>
              <li><strong>System Design:</strong> Design an AI-powered web platform with inventory dashboards and procurement suggestions.</li>
              <li><strong>Testing and Validation:</strong> Comprehensive testing and performance evaluation with forecast accuracy metrics.</li>
              <li><strong>Deployment:</strong> Scalable cloud deployment with real-time updates and accessibility for all stakeholders.</li>
            </ul>
          </div>

          {/* Predictive Labor Management */}
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Predictive Labor Management</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Data Collection and Analysis:</strong> Gather historical labor data and external factors affecting availability. Clean and preprocess.</li>
              <li><strong>Predictive Modeling:</strong> Develop models to forecast weekly labor needs by region using LSTM.</li>
              <li><strong>Shortage Mitigation:</strong> Formulate flexible strategies like temporary staffing or adjusted workflows.</li>
              <li><strong>Real-Time Monitoring:</strong> Implement live labor availability tracking with dynamic adjustment features.</li>
              <li><strong>System Deployment:</strong> Integrate with current systems and deploy in stages for smooth transition.</li>
            </ul>
          </div>

          {/* Traffic Prediction for Delivery Optimization */}
          <div className="bg-green-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Traffic Prediction for Delivery Optimization</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Data Collection:</strong> Collect historical traffic data, including weather and event-based variations.</li>
              <li><strong>Model Development & Integration:</strong> Develop ML models for traffic forecasting and integrate into delivery scheduling systems.</li>
              <li><strong>Validation:</strong> Compare predictions with actual traffic and assess delivery improvements.</li>
              <li><strong>Deployment:</strong> Use feedback loops for model refinement and full-scale logistics integration.</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Methodology;
