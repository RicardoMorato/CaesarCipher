const express = require("express");
const messageHandler = require("./handleCipher/messageHandler");

const routes = express.Router();
const version = process.env.VERSION || "^1.0.0";

routes.get("/", (req, res) => {
  res.json({
    App: "Caesar's Cipher back-end API",
    Status: "Development",
    Version: `${version}`,
    Author: "Ricardo Morato Rocha",
  });
});

routes.post("/cipher", messageHandler.messageReceiver);

module.exports = routes;
