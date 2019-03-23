module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user: DataTypes.STRING,
        message: DataTypes.TEXT
    });
    return User;
};
