/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const production_dpt = require('./production_dpt');
const vdm_change = require('./vdm_change');

const vdm = db.define('vdms', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        videoId: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
        videoTittle: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
            }
        },
        status:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{}
        }
    },
    {
        classMethods:{
            associate:function(){
                vdm.hasMany(vdm_change, { foreignKey: 'vdm_id' });
                vdm.hasOne(production_dpt, { foreignKey: 'vdm_id' });

            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = vdm;