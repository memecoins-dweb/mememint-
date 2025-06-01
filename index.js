const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const balances = {}; // Simple in-memory balance store

// Get user balance
app.get("/balance/:username", (req, res) => {
  const { username } = req.params;
  const balance = balances[username] || 0;
  res.json({ username, balance });
});

// Deposit tokens
app.post("/deposit", (req, res) => {
  const { username, amount } = req.body;
  if (!username || amount <= 0) {
    return res.status(400).json({ error: "Invalid deposit" });
  }
  balances[username] = (balances[username] || 0) + amount;
  res.json({ username, balance: balances[username] });
});

// Withdraw tokens
app.post("/withdraw", (req, res) => {
  const { username, amount } = req.body;
  if (!username || amount <= 0 || !balances[username] || balances[username] < amount) {
    return res.status(400).json({ error: "Invalid withdraw" });
  }
  balances[username] -= amount;
  res.json({ username, balance: balances[username] });
});

app.listen(5000, () => console.log("💰 Backend running on port 5000"));
