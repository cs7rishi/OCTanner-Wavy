const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const refresh_token = req.query.refresh_token;
  if (!refresh_token) {
    res.status(400);
    res.send({ ERROR: "No token provided." });
    return;
  }

  const spotify = require("../util/spotify");
  spotify.setRefreshToken(refresh_token);

  spotify
    .refreshAccessToken()
    .then((data) => {
      console.log("Token refreshed");
      const access_token = data.body.access_token;
      res.send({ access_token });
    })
    .catch((err) => {
      console.error(`Error refresing Tokens:`, error);
      res.send(`Error refreshing Tokens: ${error}`);
    });
});

module.exports = router;
