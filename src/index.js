const fs = require('fs');
const os = require('os');
const configFilePath = `${os.homedir()}/.capsule.json`;

function loadConfigFile() {
  if (fs.existsSync(configFilePath)) {
    console.warn('Loading config..');
  } else {
    createConfigFile();
  }

  // retuns the loaded config json object
}

function createConfigFile() {
  console.warn('Creating configuration file.');
  const obj = {
    mtaDir: '',
  }

  fs.writeFileSync(configFilePath, JSON.stringify(obj, null, 2));
  console.log('Please open the ~/.capsule.json file and fill out the `mtaDir` node.');
  console.log('After that, relaunch the CLI.');
}

loadConfigFile()