/**
 * Created by fr3d0 on 07/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const subject = require('./subject');

const tuition = db.define('grades', {
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
            validate:{}
        }
    },
    {
        classMethods:{
            associate:function(){
                tuition.hasMany(subject, { foreignKey: 'grade_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = tuition;