const express = require("express");
const router = express.Router();

const spotify = require("../util/spotify");
const scope = ["user-read-playback-state"];

router.get("/", (req, res) => {
  res.redirect(spotify.createAuthorizeURL(scope));
});

module.exports = router;
