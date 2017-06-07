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
                        maxBytes: 209715200
                    },
                    auth: 'jwt'
                },
                handler: function(request, reply){
                    const file = request.payload;
                    const query = request.query;
                    fs.writeFile(big_files_tmp_path+query.file_name+'/'+query.file_name+'.part'+file._chunkNumber, file.upload, (err) => {
                        if (err) throw err;
                        reply(query.file_name+'.part'+file._chunkNumber + " has been saved").code(200)
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