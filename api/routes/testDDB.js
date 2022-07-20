var express = require("express");
var router = express.Router();

router.get("/ddb", function(req, res, next) {
    res.send("DDB is connected");
});

module.exports = router;