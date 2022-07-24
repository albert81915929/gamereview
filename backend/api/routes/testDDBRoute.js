var express = require("express");
var router = express.Router();
const DDBCtrl = require("../controllers/ddb.controller")

// router.get("/", function(req, res, next) {
//     res.send("DDB is connected1");
// });

router.route("/").get(DDBCtrl.getAll)

module.exports = router;