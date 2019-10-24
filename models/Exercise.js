module.exports = function(sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        sets: {
            type: DataTypes.INTEGER
        },
        reps: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        difficulty: {
            type: DataTypes.STRING
        },
        note: {
            type: DataTypes.STRING
        }
    });
  
    Exercise.associate = function(models) {
      // We're saying that a Exercise should belong to an Day
      // A Exercise can't be created without an Day due to the foreign key constraint
        Exercise.belongsTo(models.Date, {
            foreignKey: {
                allowNull: false
            }
        });
    };
  
    return Exercise;
};