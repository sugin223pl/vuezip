'use strict';
const fs = require('fs');
const path = require('path')
const archiver = require('archiver');
function zip(_path, fileName) {
  const output = fs.createWriteStream(path.resolve(_path, `../${fileName}.zip`));
  console.log(path.resolve(_path, `../${fileName}.zip`));

  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });
  output.on('end', function () {
    console.log('Data has been drained');
  });

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err;
    }
  });

  archive.on('error', function (err) {
    throw err;
  });
  archive.pipe(output);
  archive.directory(_path, false);
  archive.finalize();
}
module.exports = api => {
  const nnow = () => {
    let d = new Date();
    let timestamp = d.getTime();
    return timestamp;
  };
  const timestamp = nnow();
  api.registerCommand('zip:build',{
    description: 'Run zip command to archive files from dist folder to dist.zip',
    usage: 'vue-cli-service zip:build',
    details:'details here'
  }, () => {
    const distPath = api.resolve('./dist');
    zip(distPath, 'dist-' + timestamp);
  }),
  
  api.registerCommand('zip:build:prod',{
    description: 'Run zip command to archive files from prod folder to prod.zip',
    usage: 'vue-cli-service zip:build:prod',
    details:'details here'
  }, () => {
    const distPath = api.resolve('./prod');
    zip(distPath, 'prod-' + timestamp);
  })
}

module.exports.defaultModes = {
  'zip:build': 'development',
  'zip:build:prod': 'production'
}