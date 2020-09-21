const NewVersion = require('../src');

NewVersion.log()

async function checkVersion() {
  const currentVersion = NewVersion.getCurrentVersion();
  const newestVersion = await NewVersion.getNewestVersion();
  if (currentVersion.trim() === newestVersion.trim()) {
    console.warn('You are installing newest package. Ignore if you just install this package within a week. Otherwise, you may want to check if you are locking version correctly')
  }
}

checkVersion();