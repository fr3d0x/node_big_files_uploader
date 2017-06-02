/**
 * Created by fr3d0 on 30/05/17.
 */
const user = require('./user');
const vdm = require('./vdm');
const production_dpt = require('./production_dpt');
const master_plane = require('./master_plane');
const detail_plane = require('./detail_plane');
const wacom_vid = require('./wacom_vid');
const prod_audio = require('./prod_audio');
const vdm_change = require('./vdm_change');

user.hasMany(vdm_change, { foreignKey: 'user_id' });
vdm.hasMany(vdm_change, { foreignKey: 'vdm_id' });
vdm_change.belongsTo(vdm, { foreignKey: 'vdm_id' });
vdm_change.belongsTo(user, { foreignKey: 'user_id' });
vdm.hasOne(production_dpt, { foreignKey: 'vdm_id' });
production_dpt.belongsTo(vdm, { foreignKey: 'vdm_id' });
production_dpt.hasMany(master_plane, { foreignKey: 'production_dpt_id' });
production_dpt.hasMany(detail_plane, { foreignKey: 'production_dpt_id' });
production_dpt.hasMany(wacom_vid, { foreignKey: 'production_dpt_id' });
production_dpt.hasMany(prod_audio, { foreignKey: 'production_dpt_id' });
master_plane.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
detail_plane.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
wacom_vid.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
prod_audio.belongsTo(production_dpt, { foreignKey: 'production_dpt_id' });
module.exports = {user, vdm, production_dpt, master_plane, detail_plane, wacom_vid, prod_audio, vdm_change};