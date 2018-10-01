const fs = require('fs');

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
  createFile,
};
