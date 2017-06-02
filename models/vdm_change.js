/**
 * Created by fr3d0 on 02/06/17.
 */
const Sequelize = require('sequelize');
const db = require('./_db');
const user = require('./user');
const vdm = require('./vdm');

const vdm_change = db.define('vdm_changes', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        changeDate: {
            type: Sequelize.DATE,
            validate: {
            }
        },
        changeDetail: {
            type: Sequelize.TEXT,
            validate: {
            }
        },
        changedFrom: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        changedTo: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        vdmId: {
            type: Sequelize.INTEGER,
            validate: {
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            validate: {
            }
        },
        uname: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        videoId: {
            type: Sequelize.STRING,
            validate: {
            }
        },
        department: {
            type: Sequelize.STRING,
            validate: {
            }
        }
    },
    {
        classMethods:{
            associate:function(){
                vdm_change.belongsTo(vdm, { foreignKey: 'vdm_id' });
                vdm_change.belongsTo(user, { foreignKey: 'user_id' });

            }
        },
        timestamps: true,
        underscored : true
    });

module.exports = vdm_change;