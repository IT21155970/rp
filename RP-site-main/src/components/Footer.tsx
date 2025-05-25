import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyan-900 text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Our Research</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              We are developing multisensory learning tools for children with Down syndrome in Sri Lanka.
              Our goal is to enhance educational accessibility through deep learning and AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={handleScrollToTop} className="text-blue-200 hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <a href="#team" className="text-blue-200 hover:text-white transition">Our Team</a>
              </li>
              <li>
                <a href="#doc" className="text-blue-200 hover:text-white transition">Documents</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="GitHub" className="text-blue-200 hover:text-white text-2xl transition">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-200 hover:text-white text-2xl transition">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-white text-2xl transition">
                <FaTwitter />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email" className="text-blue-200 hover:text-white text-2xl transition">
                <FaEnvelope />
              </a>
            </div>
            <p className="text-sm text-blue-200">
              Colombo, Sri Lanka<br />
              SLIIT Research Project
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300 text-sm">
          <p>&copy; {currentYear} Multisensory Learning Tools Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
