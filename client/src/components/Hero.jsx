import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Solusi Digital untuk Bisnis Modern Anda
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Kami membantu Anda membangun kehadiran online yang kuat dan profesional.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#features"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Pelajari Lebih Lanjut
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg hover:bg-blue-100 transition"
          >
            Hubungi Kami
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
