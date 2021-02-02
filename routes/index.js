const path = require("path");
const express = require("express");
const router = express.Router();
const { getResults } = require("../controllers/rpController.js");

router.post("/api", (req, res) => {
  // Retrieve the href from the client-side
  const href = req.body.href;

  // Using the href, send the results of phone numbers and emails back to the client-side
  getResults(href).then((data) => res.json(data));
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
