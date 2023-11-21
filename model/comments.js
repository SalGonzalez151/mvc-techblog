const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init({
    description: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    upload_date: {
        type: Datatypes.DATE,
        allowNull: false,
        defaultValue: now
    },
    user_id: {
        type: Datatypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    dashboard_id: {
        data: Datatypes.INTEGER,
        references: {
            model: 'dashboard',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
})