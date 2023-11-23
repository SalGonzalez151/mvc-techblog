const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dashboard extends Model {}

Dashboard.init ( {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'dashboard',
})

module.exports = Dashboard
