const DDBDAO = require("../dao/ddbDAO");

class DdbController {
  static async apiGetAll(req, res, next) {
    res.render("Connected to DDB");
  }
}

module.exports = DdbController;
