/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const production_dpt = require('./production_dpt');

const wacom_vid = db.define('wacom_vids', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        file: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        fileName: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        productionDptId: {
            type: Sequelize.INTEGER,
            validate: {
            }
        }
    },
    {
        classMethods:{
            associate:function(){
                wacom_vid.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = wacom_vid;