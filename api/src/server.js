/* eslint-env node */
import express from "express";
import cors from "cors";

const app = express();
const PORT = globalThis["process"]?.env?.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Example API under /api - adjust to your needs
app.get("/api/courses", (_req, res) => {
  res.json([{ id: "c1", title: "Základy bezpečnosti", lecturer: "Lektor 1" }]);
});

app.get("/api", (_req, res) => {
  res.json([{ organization: "Student Cyber Games" }]);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
