/**
 * Created by fr3d0 on 6/1/17.
 */
'use strict';

const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
const conf = require('./config/env_conf.json');
server.connection(conf.server.sockets);
server.connection(conf.server.cache);
/*Plugins && Modules*/
const modules = [];
const plugins = [];
/*Plugins*/
plugins.push(require('./auth/jwt'));
/*Modules*/
modules.push(require('./end_points/sockets/socket_clock'));

server.register(plugins.concat(modules).concat(plugins), (err) => {
    if (err) {
        console.error('Failed to load a plugin_a:', err);
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
});

