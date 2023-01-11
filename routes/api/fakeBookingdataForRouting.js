const express = require("express")
const app= express()
const router = express.Router();
const fakeBookingsData = require("../../data/FakeBookingsData")

router.get("/", function (req, res) {
  res.send(fakeBookingsData);
});

module.exports = router