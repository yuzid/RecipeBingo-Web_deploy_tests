import React from 'react';

function Hero() {
  return (
    <section className="bg-green-50 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Solusi Untuk Makanan anda
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#features"
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
          >
            Buka di Google Play
          </a>
          <a
            href="#contact"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-full text-lg hover:bg-green-100 transition"
          >
            Hubungi Kami
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
