import { motion } from "framer-motion";

function ResearchGap() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
          Research Gap
        </h2>

        <div className="text-left space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">

          <p>
            Despite the growth of digital tools and forecasting models in agriculture, there are significant limitations in applying advanced AI techniques—such as Long Short-Term Memory (LSTM) networks—for precise demand and labor predictions in the tea industry. Most existing models depend heavily on historical data and traditional statistical methods, missing the benefits of real-time adaptive learning.
          </p>

          <p>
            Moreover, many current studies focus on general agricultural sectors rather than the unique, region-specific dynamics of the Sri Lankan tea supply chain. This results in forecasting models that inadequately address critical factors like weather variability, market fluctuations, and regional demand differences, leading to less reliable predictions.
          </p>

          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">
              Specific Gaps Identified
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Limited AI Integration in Inventory Systems:</strong> Current inventory management lacks dynamic optimization powered by AI, leading to risks of overstocking or stockouts.
              </li>
              <li>
                <strong>Inadequate Forecasting Techniques:</strong> Traditional methods do not leverage machine learning or deep learning advancements for accurately predicting demand fluctuations or labor availability.
              </li>
              <li>
                <strong>Suboptimal Supply Chain Practices:</strong> Lack of AI-driven route optimization and integrated inventory approaches results in inefficiencies and higher logistics costs.
              </li>
              <li>
                <strong>Neglected Traffic and Transportation Factors:</strong> Existing systems often ignore dynamic traffic conditions, multi-modal transportation options, and cost optimization strategies, which are vital for efficient distribution.
              </li>
              <li>
                <strong>Absence of Regional and Real-Time Forecasting:</strong> Demand and labor forecasting models usually do not provide region-specific predictions or adapt to real-time changes in weather, market, or labor trends.
              </li>
              <li>
                <strong>Scalability and Adaptability Challenges:</strong> Many current solutions are not scalable for large distribution networks or lack adaptability to evolving supply chain complexities.
              </li>
            </ul>
          </div>

          <p>
            Addressing these gaps is crucial for developing a robust, AI-powered forecasting system tailored to the tea industry’s specific needs. By integrating advanced machine learning techniques like LSTM and incorporating real-time data, the proposed research aims to enhance demand and labor predictions, optimize inventory and logistics, and ultimately support a more efficient and resilient tea supply chain.
          </p>

        </div>
      </motion.div>
    </div>
  );
}

export default ResearchGap;
