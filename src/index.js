'use strict';
const fs = require('fs');
const path = require('path');
const app = require('./app');

// let port = (process.env.PORT || 3030);
let port = app.get('port');
const server = app.listen(port);

function touch (file) {
  let filePath = path.normalize(path.join(file));
  console.log('touching file at ' + filePath);
  let fd = fs.openSync(filePath, 'w');
  let timestamp = Math.round(Date.now()/1000);
  fs.futimesSync(fd, timestamp, timestamp);
  fs.closeSync(fd);
  console.log('touched file at ' + filePath);
}

let host = app.get('host');
console.log('Feathers application starting on '+ host +':' + port);
server.on('listening', function onListenting() {
    console.log('Feathers application started on '+ host + ':' + port);
    touch('/tmp/app-initialized');
  }
);
