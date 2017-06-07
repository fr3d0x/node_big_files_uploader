/**
 * Created by fr3d0 on 07/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const vdm = require('./vdm');
const subject_planification = require('./subject_planification');

const classes_planification = db.define('classes_planifications', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        subject_planification_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate:{}
        }
    },
    {
        classMethods:{
            associate:function(){
                classes_planification.hasMany(vdm, { foreignKey: 'cla' });
                classes_planification.belongsTo(subject_planification, { foreignKey: 'subject_planification_id' });

            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = classes_planification;