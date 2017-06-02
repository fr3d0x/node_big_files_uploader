/**
 * Created by fr3d0 on 30/05/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const vdm_change = require('./vdm_change');

const user = db.define('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        }
    },
    {
        classMethods:{
            associate:function(){
                user.hasMany(vdm_change, { foreignKey: 'user_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = user;