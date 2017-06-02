/**
 * Created by fr3d0 on 30/05/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');

const users = db.define('Users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
    },
    {
        timestamps: false
    });

module.exports = users;