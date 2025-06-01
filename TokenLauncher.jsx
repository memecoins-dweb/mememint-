import React, { useState } from 'react';

const TokenLauncher = () => {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '',
    decimals: 18,
    memeTag: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Token Data:', formData);
    // Send to backend for contract deployment later
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">🧪 Launch Your Meme Coin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Token Name (e.g., DogeBlast)"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="symbol"
          placeholder="Symbol (e.g., DBL)"
          value={formData.symbol}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="supply"
          type="number"
          placeholder="Total Supply"
          value={formData.supply}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="decimals"
          type="number"
          placeholder="Decimals (default 18)"
          value={formData.decimals}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="memeTag"
          placeholder="Meme Tag (optional)"
          value={formData.memeTag}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="imageUrl"
          placeholder="Meme Image URL (optional)"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          🚀 Launch Token
        </button>
      </form>

      {/* Live Preview */}
      <div className="mt-6 p-4 border-t">
        <h3 className="text-xl font-semibold mb-2">🔍 Preview</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Symbol:</strong> {formData.symbol}</p>
        <p><strong>Supply:</strong> {formData.supply}</p>
        <p><strong>Decimals:</strong> {formData.decimals}</p>
        <p><strong>Meme Tag:</strong> {formData.memeTag}</p>
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Meme Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>
    </div>
  );
};

export default TokenLauncher;
