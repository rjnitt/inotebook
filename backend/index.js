const connectionDB = require("./db");
const express = require("express");
const cors = require("cors");
connectionDB();

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/api/auth", "./routes/app");
app.use(express.json());
app.use(cors());
app.use("/notes", require("./routes/Notes"));
app.use("/user", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Inotebook backend running on ${port}`);
});
