/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const vdm = require('./vdm');
const master_plane = require('./master_plane');
const detail_plane = require('./detail_plane');
const wacom_vid = require('./wacom_vid');
const prod_audio = require('./prod_audio');

const production_dpt = db.define('production_dpts', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        status: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        intro: {
            type: Sequelize.BOOLEAN,
            validate: {
            }
        },
        vidDev: {
            type: Sequelize.BOOLEAN,
            validate: {
            }
        },
        conclu: {
            type: Sequelize.BOOLEAN,
            validate: {
            }
        }
    },
    {
        classMethods:{
            associate:function(){
                production_dpt.belongsTo(vdm, { foreignKey: 'vdm_id' });
                production_dpt.hasMany(master_plane, { foreignKey: 'production_dpt_id' });
                production_dpt.hasMany(detail_plane, { foreignKey: 'production_dpt_id' });
                production_dpt.hasMany(wacom_vid, { foreignKey: 'production_dpt_id' });
                production_dpt.hasMany(prod_audio, { foreignKey: 'production_dpt_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = production_dpt;