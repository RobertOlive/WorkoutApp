module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
        // Giving the Day model a name of type STRING
        dayName: DataTypes.STRING
    });
  
    Day.associate = function(models) {
        Day.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
        Day.hasMany(models.Date, {
            onDelete: "cascade"
        });
    };
  
    return Day;
};