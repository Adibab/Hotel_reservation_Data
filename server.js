const express = require("express");
const app = express()

const PORT = 9000
// const fakeBookingsData = require("./data/FakeBookingsData")

app.listen(process.env.PORT || PORT , function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});


app.use("/fakeBookingsData", require("./routes/api/fakeBookingdataForRouting"));