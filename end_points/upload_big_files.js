/**
 * Created by fr3d0 on 6/1/17.
 */
'use strict';

var response = require('../lib/response');
var models = require('../models');
const upload_big_files = {
    register: function(server, option, next){
        server.route([
            {
                method: "GET",
                path: "/api/upload_big_files",
                config:{
                    auth: 'jwt'
                },
                handler: function(request, reply){
                    const req = request.raw.req;
                    reply("hola mundo").code(200)

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