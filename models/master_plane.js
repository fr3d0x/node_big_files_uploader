/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const production_dpt = require('./production_dpt');

const master_plane = db.define('master_planes', {
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
        file_name: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        production_dpt_id: {
            type: Sequelize.INTEGER,
            validate: {
            }
        }
    },
    {
        classMethods:{
            associate:function(){
                master_plane.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = master_plane;