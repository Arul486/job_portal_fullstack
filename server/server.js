
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let jobs = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "Toronto" },
  { id: 2, title: "Business Analyst", company: "BizSolutions", location: "Vancouver" }
];

let notifications = [
  "Welcome to the job portal!",
  "New jobs posted every Monday."
];

app.get('/jobs', (req, res) => res.json(jobs));
app.get('/notifications', (req, res) => res.json(notifications));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
