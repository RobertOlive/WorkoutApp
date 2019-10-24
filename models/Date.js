module.exports = function(sequelize, DataTypes) {
    var Date = sequelize.define("Date", {
        // Giving the Date model a name of type STRING
        date: DataTypes.DATE
    });
  
    Date.associate = function(models) {
        Date.belongsTo(models.Day, {
            foreignKey: {
                allowNull: false
            }
        })
        Date.hasMany(models.Exercise, {
            onDelete: "cascade"
        });
    };
  
    return Date;
};