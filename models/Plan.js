module.exports = function(sequelize, DataTypes) {
    var Plan = sequelize.define("Plan", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Plan.associate = function(models) {
      // We're saying that a Plan should belong to an User
      // A Plan can't be created without an User due to the foreign key constraint
      Plan.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Plan;
  };