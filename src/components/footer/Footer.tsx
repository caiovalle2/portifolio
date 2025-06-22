import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {currentYear} Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/caiovalle2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-75 transition-opacity"
          >
            <Image src="/github.png" alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://linkedin.com/in/caio-valle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-75 transition-opacity"
          >
            <Image src="" alt="LinkedIn" width={24} height={24} className="invert" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;