
const express = require('express')

const { addJob, getJobs, getJob, removeJob, updateJob, getHeadOptions } = require('./jobs.controller')

const router = express.Router()

router.get('/', getJobs)
router.get('/head', getHeadOptions)
router.get('/:id', getJob)
router.post('/', addJob)
router.put('/', updateJob)
router.delete('/', removeJob)

module.exports = router