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
const classes_planification = require('./classes_planification');
const subject_planification = require('./subject_planification');
const subject = require('./subject');
const tuition = require('./tuition');

tuition.hasMany(subject, { foreignKey: 'grade_id' });
subject.hasOne(subject_planification, { foreignKey: 'subject_id' });
subject.belongsTo(tuition, { foreignKey: 'grade_id' });
subject_planification.hasMany(classes_planification, { foreignKey: 'subject_planification_id' });
subject_planification.belongsTo(subject, { foreignKey: 'subject_id' });
classes_planification.hasMany(vdm, { foreignKey: 'classes_planification_id' });
classes_planification.belongsTo(subject_planification, { foreignKey: 'subject_planification_id' });
user.hasMany(vdm_change, { foreignKey: 'user_id' });
vdm.hasMany(vdm_change, { foreignKey: 'vdm_id' });
vdm_change.belongsTo(vdm, { foreignKey: 'vdm_id' });
vdm_change.belongsTo(user, { foreignKey: 'user_id' });
vdm.belongsTo(classes_planification, { foreignKey: 'classes_planification_id' });
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
module.exports = {user, vdm, production_dpt, master_plane, detail_plane, wacom_vid, prod_audio, vdm_change, classes_planification, subject_planification, subject, tuition};