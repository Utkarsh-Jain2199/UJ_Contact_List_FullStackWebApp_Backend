const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const cors = require('cors');
app.use(cors());
// Connect Database
connectDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Init middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

// Serve Statis asset in production
// if (process.env.NODE_ENV === "production") {
// 	// Set Static folder
// 	app.use(express.static("client/build"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	});
// }

app.get('/', (req, res) => {
	res.send('Please refer, api help doc')
  })

const PORT = 5000;
app.listen(PORT);
