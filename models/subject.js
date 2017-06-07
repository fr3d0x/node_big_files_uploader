/**
 * Created by fr3d0 on 07/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const tuition = require('./tuition');
const subject_planification = require('./subject_planification');

const subject = db.define('subjects', {
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
        },
        grade_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate:{}
        }
    },
    {
        classMethods:{
            associate:function(){
                subject.hasOne(subject_planification, { foreignKey: 'subject_id' });
                subject.belongsTo(tuition, { foreignKey: 'grade_id' });

            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = subject;