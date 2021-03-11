const fs = require('fs');
const path = require("path");
const ejs = require('ejs')

const OUTPUT_DIR = '../../public'
const TEMPLATES_DIR = '../templates'

module.exports = { generateJobPage, generateJobList }

if (!fs.existsSync(path.resolve(__dirname,OUTPUT_DIR))) {
  fs.mkdirSync(path.resolve(__dirname,OUTPUT_DIR), 0744);
}

function generateJobPage(job, jobs) {
  const tempFile = path.resolve(__dirname, `${TEMPLATES_DIR}/jobDetails.ejs`)
  return new Promise(async (resolve, reject) => {
    try {
      const generatedHtml = await ejs.renderFile(tempFile, { job, jobs })
      const res = await _writeToFile(`job-${job._id}`, generatedHtml)
      resolve(res)
    } catch(err) {
      reject(err)
    }
  })

}

function generateJobList(jobs) {
  const tempFile = path.resolve(__dirname, `${TEMPLATES_DIR}/jobList.ejs`)

  return new Promise(async (resolve, reject) => {
    try {
      const generatedHtml = await ejs.renderFile(tempFile, { jobs })
      const res = await _writeToFile('job-list', generatedHtml)
      resolve(res)
    } catch(err) {
      reject(err)
    }
  })
}


function _writeToFile(fileName, generatedHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(__dirname, `${OUTPUT_DIR}/${fileName}.html`), generatedHtml, function (err) {
      if (err) { 
        reject(err)
        return 
      }
      resolve(`generated ${fileName} successfully`)
    });
  })
}