const express = require("express");
const router = express.Router();

const spotify = require("../util/spotify");

router.get("/", (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.log("Callback Error: ", error);
    res.send(`callback Error: ${error}`);
    return;
  }
  spotify
    .authorizationCodeGrant(code)
    .then((data) => {
      //   console.log(data);
      res.cookie("SPOTIFY_ACCESS_TOKEN", data.body.access_token);
      res.cookie("SPOTIFY_REFRESH_TOKEN", data.body.refresh_token);
      res.cookie("SPOTIFY_REFRESH_CODE", code);

      res.redirect(process.env.REACT_CLIENT + "/visualizer");
    })
    .catch((error) => {
      console.error(`Error getting Tokens:`, error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

module.exports = router;
