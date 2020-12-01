const util = require('util');
const exec = util.promisify(require('child_process').exec);

// TODO: Automate current version
const CURRENT_VERSION = '1.0.8';

function getCurrentVersion() {
  return CURRENT_VERSION;
}

function getNewestVersion() {
  return new Promise((resolve,reject)=>{
    exec('npm view new-version version')
    .then((result=>{
      resolve(result.stdout.trim())
    }))
    .catch(()=>{
      resolve('Cannot find newest version of new-version')
    })
  })
}

function log() {
  console.log('Current version: ', getCurrentVersion());
  getNewestVersion()
    .then(result => {
      console.log('Newest version: ', result)
    })
}

module.exports = {
  getCurrentVersion,
  getNewestVersion,
  log,
};
