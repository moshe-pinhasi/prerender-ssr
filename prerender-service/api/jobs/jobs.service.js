const dbService = require('../../services/db.service')
const templatesService = require('../../services/templates.service')

const JOBS_COLLECTION = 'jobs'
module.exports = { generate }

// Read
async function generate() {
  console.log('generate-jobs-service')
  const collection = await dbService.getCollection(JOBS_COLLECTION)
  const jobs = await collection.find().toArray()
  console.log('jobs', jobs);
  
  return Promise.all([
    templatesService.generateJobList(jobs), 
    ...jobs.map(job => templatesService.generateJobPage(job, jobs))
  ]);
}