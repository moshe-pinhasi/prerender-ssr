const fs = require('fs');
const path = require("path");
const ejs = require('ejs')

const OUTPUT_DIR = '../../public'
const TEMPLATES_DIR = '../templates'

module.exports = { generateJobPage, generateJobList }

if (!fs.existsSync(path.resolve(__dirname,OUTPUT_DIR))) {
  fs.mkdirSync(path.resolve(__dirname,OUTPUT_DIR), 0744);
}

async function generateJobPage(job, jobs) {
  //make async
  const template = ejs.compile(fs.readFileSync(path.resolve(__dirname, `${TEMPLATES_DIR}/jobDetails.ejs`), 'utf8'));
  const generatedHtml = template({ job, jobs });
  // console.log(generatedHtml);

  //make async
  const fileName = `job-${job._id}`
  fs.writeFile(path.resolve(__dirname, `${OUTPUT_DIR}/${fileName}.html`), generatedHtml, function (err) {
      if (err) { console.log(err); return false }
      console.log(`generated ${fileName} successfully`);
      return true;
  });
}

// need to add to every add / update
// query jobs by itself? 
async function generateJobList(jobs) {
  //make async
  const template = ejs.compile(fs.readFileSync(path.resolve(__dirname, `${TEMPLATES_DIR}/jobList.ejs`), 'utf8'));
  const generatedHtml = template({ jobs });

  //make async
  const fileName = `job-list`
  fs.writeFile(path.resolve(__dirname, `${OUTPUT_DIR}/${fileName}.html`), generatedHtml, function (err) {
      if (err) { console.log(err); return false }
      console.log(`generated ${fileName} successfully`);
      return true;
  });
}