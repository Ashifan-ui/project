import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Sample in-memory jobs (if MongoDB not set up yet)
let jobs = [
  { _id: "1", title: "Software Engineer", description: "Build cool apps" },
  { _id: "2", title: "Data Analyst", description: "Analyze company data" },
];

// GET all jobs
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// POST job
app.post("/api/jobs", (req, res) => {
  const newJob = { _id: Date.now().toString(), ...req.body };
  jobs.push(newJob);
  res.json(newJob);
});

// DELETE job
app.delete("/api/jobs/:id", (req, res) => {
  jobs = jobs.filter((job) => job._id !== req.params.id);
  res.json({ message: "Job deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));