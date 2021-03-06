const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
connectDB();

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

// Serve static assets in PRODUCTION
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Run"));
