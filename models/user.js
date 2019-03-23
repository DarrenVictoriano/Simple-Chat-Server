module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        message: DataTypes.TEXT
    });
    return User;
};
