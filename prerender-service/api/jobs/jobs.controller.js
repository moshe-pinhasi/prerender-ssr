const jobsService = require('./jobs.service')
module.exports = { generateJobsPages }

async function generateJobsPages(req, res) {
  try {
    console.log('generate-jobs-controller')
    await jobsService.generate()
    res.status(200).send({status: 'done'})
  } catch (err) {
    console.log(err)
    res.status(500).send({error: 'server error'})
  }
}

