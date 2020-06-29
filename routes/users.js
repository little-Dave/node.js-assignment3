const path = require('path');

const express = require('express');

const router = express.Router();

router.get("/users", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = router;