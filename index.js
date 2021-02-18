const express = require("express");
const axios = require("axios");
const cors = require("cors");
// const path = require("path");

const app = express();
app.use(cors());
// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, "client/build")));
// // Anything that doesn't match the above, send back index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

async function fetchTactic() {
  return await axios.post(`https://chessblunders.org/api/blunder/get`, {
    type: "explore",
  });
}

app.get("/", async (req, res) => {
  const tacticRes = await fetchTactic();
  const tacticData = await tacticRes.data.data;
  console.log(tacticData);
  res.status(200).send(tacticData);
});

app.listen(8080);
// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
