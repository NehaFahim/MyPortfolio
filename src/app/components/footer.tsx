import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-400">
              A passionate developer focused on creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li> <Link href="/" className="text-gray-400 hover:text-white transition"> 
              Home
              </Link></li>
              <li>
  <Link href="/about" className="text-gray-400 hover:text-white transition">
    About
  </Link>
</li>
<li>
  <Link href="/projects" className="text-gray-400 hover:text-white transition">
    Projects
  </Link>
</li>
<li>
  <Link href="/skills" className="text-gray-400 hover:text-white transition">
    Skills
  </Link>
</li>
<li>
  <Link href="/contact" className="text-gray-400 hover:text-white transition">
    Contact
  </Link>
</li>

            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-6 mt-6">
              <a href="https://github.com/NehaFahim" 
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/nehafahim/" 
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://x.com/FahimNeha33515" 
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Neha Fahim. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with Next.js, Tailwind CSS, and Sanity CMS ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;