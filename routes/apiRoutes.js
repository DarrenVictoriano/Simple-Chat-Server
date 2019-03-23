var db = require("../models");

module.exports = function (app) {
    // Get mesages
    app.get("/api/messages", function (req, res) {
        db.User.findAll({}).then(function (userDB) {
            res.json(userDB);
        });
    });

    // Post Mesasges
    app.get("/api/messages", function (req, res) {
        db.User.create(req.body).then(function (userDB) {
            res.json(userDB);
        });
    });
}