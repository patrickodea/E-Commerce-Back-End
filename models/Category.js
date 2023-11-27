const { Model, DataTypes } = require("sequelize");

const sequalize = require("../config/connection");

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
    }
);

module.exports = Category;