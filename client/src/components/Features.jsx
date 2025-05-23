import React from 'react';

const features = [
  { title: 'Cari dan dapatkan Rekomendasi resep', description: 'Temukan berbagai resep makanan yang sesuai dengan selera dan kebutuhanmu!' },
  { title: 'Kelola Bahan baku', description: 'Atur dan pantau stok bahan makananmu dengan mudah.' },
  { title: 'Daily Eats', description: 'Cek dan catat Nutrisi yang dikonsumsi setiap hari.' },
];

function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Fitur Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
