/**
 * Created by fr3d0 on 07/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const subject = require('./subject');
const classes_planification = require('./classes_planification');

const subject_planification = db.define('subject_planifications', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        subject_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate:{}
        }
    },
    {
        classMethods:{
            associate:function(){
                subject_planification.hasMany(classes_planification, { foreignKey: 'subject_planification_id' });
                subject_planification.belongsTo(subject, { foreignKey: 'subject_id' });

            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = subject_planification;