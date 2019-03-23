var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.User.findAll({}).then(function (userDB) {
            res.render("index", {
                title: "SCS",
                user: userDB
            })
        });
    });
}