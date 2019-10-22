module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      googleId: DataTypes.STRING,
      email: DataTypes.STRING
    });
  
    User.associate = function(models) {
      // Associating User with Plans
      // When an User is deleted, also delete any associated Plans
      User.hasMany(models.Plan, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  