
const express = require('express')

const { generateJobsPages } = require('./jobs.controller')

const router = express.Router()

router.post('/generate-job-site', generateJobsPages)

module.exports = router