const util = require('util');
const exec = util.promisify(require('child_process').exec);

// TODO: Automate current version
const CURRENT_VERSION = '0.0.1';

function getCurrentVersion() {
  return CURRENT_VERSION;
}

async function getNewestVersion() {
  let newVersion = '';
  try {
    const { stdout } = await exec('npm view new-version version')
    newVersion = stdout;
  } catch (error) {
    return 'Cannot find newest version of new-version';
  }
  return stdout;
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
