import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-900 text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About the Research</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              This project focuses on developing an AI-powered LSTM-based demand forecasting system
              for the tea supply chain in Sri Lanka. We aim to improve decision-making and operational
              efficiency in tea production and distribution through deep learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={handleScrollToTop} className="text-green-200 hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <a href="#team" className="text-green-200 hover:text-white transition">Our Team</a>
              </li>
              <li>
                <a href="#doc" className="text-green-200 hover:text-white transition">Documentation</a>
              </li>
              <li>
                <a href="#contact" className="text-green-200 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="GitHub" className="text-green-200 hover:text-white text-2xl transition">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-green-200 hover:text-white text-2xl transition">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter" className="text-green-200 hover:text-white text-2xl transition">
                <FaTwitter />
              </a>
              <a href="mailto:teasupplyresearch@example.com" aria-label="Email" className="text-green-200 hover:text-white text-2xl transition">
                <FaEnvelope />
              </a>
            </div>
            <p className="text-sm text-green-200">
              Watawala, Sri Lanka<br />
              Tea Supply Chain Research – SLIIT
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-300 text-sm">
          <p>&copy; {currentYear} Tea Supply Chain Forecasting Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
