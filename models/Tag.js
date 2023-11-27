const { Model, DataTypes } = require("sequelize");

const sequalize = require("../config/connection");

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tag",
    }
);

module.exports = Tag;