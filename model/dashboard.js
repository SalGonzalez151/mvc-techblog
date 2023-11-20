const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dashboard extends Model {}

Dashboard.init ( {
    title: {
        type: Datatypes.STRING,
    },
    description: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    upload_date: {
        type: Datatypes.DATE,
        allowNull: false,
        defaultValue: now
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'dashboard',
})
