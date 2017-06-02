/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const production_dpt = require('./production_dpt');

const prod_audio = db.define('prod_audios', {
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
                prod_audio.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = prod_audio;