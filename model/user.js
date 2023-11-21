const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init({
    user: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        data: Datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
},
    {
        hooks: {
            // hash the password.
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.email = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    })

model.exports = User;