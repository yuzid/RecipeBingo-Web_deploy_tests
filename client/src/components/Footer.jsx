import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} RecipeBingo. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}

export default Footer;
