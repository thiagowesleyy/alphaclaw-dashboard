const express = require("express");
const path    = require("path");
const app     = express();

const PORT = process.env.PORT || 3000;

// Serve o dashboard
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Health check (Railway usa isso)
app.get("/ping", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ AlphaClaw Dashboard rodando na porta ${PORT}`);
});
