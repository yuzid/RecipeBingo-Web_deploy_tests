import React, { useEffect, useState } from 'react';

function ApiKey() {
  const [data, setData] = useState([]);
  const [revealed, setRevealed] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/keyList')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setError(err.message));
  }, []);

  const handleClick = async (id) => {
    // toggle: jika sudah direveal, unreveal
    if (revealed[id]) {
      setRevealed(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      return;
    }

    try {
      const res = await fetch(`/api/key/${id}`);
      if (!res.ok) throw new Error('Not found');
      const json = await res.json();
      setRevealed(prev => ({ ...prev, [id]: json.value }));
    } catch (err) {
      setRevealed(prev => ({ ...prev, [id]: '❌ not in .env' }));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">🔑 List Api Key</h1>
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Key ID</th>
            <th className="border px-4 py-2 text-left">Quota</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const isRevealed = !!revealed[item.id];
            return (
              <tr
                key={item.id}
                className={`cursor-pointer ${
                  isRevealed ? 'bg-red-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleClick(item.id)}
              >
                <td className="border px-4 py-2">
                  {isRevealed ? revealed[item.id] : item.id}
                </td>
                <td className="border px-4 py-2">{item.quota}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApiKey;
