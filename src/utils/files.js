const path = require('path');
const fs = require('fs');

function readTemplateToString(templateName) {
  const extension = 'template';
  const filename = [templateName, extension].join('.');
  const templatePath = path.resolve(__dirname, '../..', 'src/templates', filename);
  const buffer = fs.readFileSync(templatePath);

  return buffer.toString();
}

function createDirectory(withName) {
  try {
    console.log(`Creating directory ${withName}.`);

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
    console.log(`Creating file ${fileName}.`);

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
  readTemplateToString,
  createDirectory,
  createFile,
};
