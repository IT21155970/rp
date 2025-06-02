import { motion } from "framer-motion";

function LiteratureReview() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ✅ Title in Green */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
          Literature Review
        </h2>

        {/* ✅ Paragraphs in Black */}
        <div className="text-left space-y-5 md:space-y-7 text-black leading-relaxed text-base md:text-lg">
          <p>
            The tea industry’s supply chain has been extensively studied, highlighting the need for greater efficiency, sustainability, and resilience to meet global demands. Climate variability, such as unpredictable rainfall and droughts, significantly impacts crop yields and disrupts supply chains, posing a serious challenge for tea producers.
          </p>

          <p>
            Traditional forecasting methods often struggle to accurately predict demand because they do not account for complex factors like market trends and economic fluctuations. However, advanced predictive analytics using machine learning and real-time data have shown great promise in enhancing demand forecasting accuracy and helping manage risks more effectively.
          </p>

          <p>
            Efficient inventory management is another vital aspect of the supply chain. Maintaining the right balance prevents excessive storage costs and avoids shortages that can lead to lost sales. Incorporating sustainability into inventory practices further helps reduce the environmental impact of production and storage.
          </p>

          <p>
            Risk management is a key focus area, especially in agricultural supply chains. Predictive models enable early identification of potential disruptions, while optimized logistics and route planning improve transportation efficiency and delivery reliability.
          </p>

          <p>
            Overall, the integration of data-driven strategies and innovative technologies offers transformative potential to improve operational resilience, reduce costs, and increase competitiveness in the global tea market. This literature review underscores the importance of adopting such approaches to modernize and future-proof tea supply chain management.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LiteratureReview;
