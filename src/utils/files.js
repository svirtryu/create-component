const fs = require('fs');

function createDirectory(withName) {
  try {
    fs.mkdirSync(withName);
  }
  catch (e) {
    console.log(`Failed to create directory ${withName}. Most likely because the file already exists or you do not have permissions.`);

    return false;
  }

  return true;
}

function createFile(withName, withExtension, withContent) {
  const fileName = [withName, withExtension].join('.');

  try {
    fs.writeFileSync(fileName, withContent, {
      flag: 'wx',
    });
  }
  catch(e) {
    console.log(`Failed to create file ${fileName}. Most likely because the file already exists or you do not have permissions.`);

    return false;
  }

  return true;
}

module.exports = {
  createDirectory,
  createFile,
};
