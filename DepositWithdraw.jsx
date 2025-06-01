import React, { useState } from "react";
import axios from "axios";

const DepositWithdraw = () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");

  const fetchBalance = async () => {
    const res = await axios.get(`http://localhost:5000/balance/${username}`);
    setBalance(res.data.balance);
  };

  const handleTransaction = async (type) => {
    try {
      const res = await axios.post(`http://localhost:5000/${type}`, {
        username,
        amount: parseFloat(amount),
      });
      setBalance(res.data.balance);
      setMessage(`${type.toUpperCase()} successful`);
    } catch (err) {
      setMessage(err.response.data.error || "Transaction failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">💸 Deposit & Withdraw</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-2 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 mb-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={() => handleTransaction("deposit")}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Deposit
        </button>
        <button
          onClick={() => handleTransaction("withdraw")}
          className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Withdraw
        </button>
      </div>
      <button
        onClick={fetchBalance}
        className="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
      >
        Check Balance
      </button>
      {balance !== null && (
        <p className="mt-2 font-semibold">Balance: {balance} MEME</p>
      )}
      {message && <p className="text-sm mt-2 text-blue-600">{message}</p>}
    </div>
  );
};

export default DepositWithdraw;
