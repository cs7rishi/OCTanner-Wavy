require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.REACT_CLIENT, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, //allow session cookie from browser to pass through
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.redirect(process.env.REACT_CLIENT);
});

app.use("/auth", require("./routes/auth"));
app.use("/callback", require("./routes/callback"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));

app.listen(port, () => console.log(`Listening on port ${port}`));
