/**
 * Created by fr3d0 on 05/06/17.
 */
'use strict';

const response = require('../lib/response');
const models = require('../models');
const fs = require('fs');

const resume_upload = {
    register: function(server, option, next){
        server.route([
            {
                method: "GET",
                path: "/api/resume_upload",
                config:{
                    auth: 'jwt'
                },
                handler: function(request, reply){
                    const dir = require('../config/env_conf.json').server.big_files_tmp;
                    const params = request.query;
                    fs.readdir(dir+params.file_name, (err, files) => {
                        if(files != null && files != undefined){
                            reply({size: files.length, status: "SUCCESS"}).code(200)
                        }else{
                            reply({size: 0, status: "SUCCESS"}).code(200)
                        }
                    });
                }
            }
        ]);
        next();
    }
};

resume_upload.register.attributes = {
    name: "resume_upload",
    version: "1.0.0"
};

module.exports = resume_upload;