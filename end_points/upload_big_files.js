/**
 * Created by fr3d0 on 6/1/17.
 */
'use strict';

const response = require('../lib/response');
const models = require('../models');
const fs = require('fs');
const big_files_tmp_path = require('../config/env_conf.json').server.big_files_tmp;
const upload_big_files = {
    register: function(server, option, next){
        server.route([
            {
                method: "POST",
                path: "/api/upload_big_files",
                config:{
                    payload:{
                        maxBytes: 200000000000
                    },
                    auth: 'jwt'
                },
                handler: function(request, reply){
                    const file = request.payload;
                    const query = request.query;
                    fs.writeFile(big_files_tmp_path+query.file_name+'/'+query.file_name+'.part'+file._chunkNumber, file.upload, (err) => {
                        if (err) throw err;

                        var current_size = parseInt(file._chunkNumber) * parseInt(file._chunkSize);
                        if(current_size + parseInt(file._currentChunkSize) >= parseInt(file._totalSize)){
                            models.vdm.find(
                                {where:{id: parseInt(query.vdm_id)},
                                    include:[{
                                        model: models.production_dpt,
                                        include:[models.master_plane,
                                                 models.detail_plane,
                                                 models.wacom_vid,
                                                 models.prod_audio]
                                        },
                                        {
                                            model: models.classes_planification,
                                            include: {
                                                model: models.subject_planification,
                                                include:{
                                                    model: models.subject,
                                                    include: models.tuition
                                                }
                                            }
                                        }]
                                }).then(function(vdm){
                                reply(vdm).code(200)
                            });
                        }else{
                            reply(query.file_name+'.part'+file._chunkNumber + " has been saved").code(200)
                        }
                    });
                }
            }
        ]);
        next();
    }
};

upload_big_files.register.attributes = {
    name: "upload_big_files",
    version: "1.0.0"
};

module.exports = upload_big_files;