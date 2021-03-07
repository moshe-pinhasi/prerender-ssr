const jobsService = require('./jobs.service')

module.exports = { addJob, getJobs, getJob, removeJob, updateJob, getHeadOptions }


// Read

async function getJobs(req, res) {
    try {
        const jobsRes = await jobsService.query(req.query)
        res.status(200).send(jobsRes)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}

async function getJob(req, res) {
    try {
        const job = await jobsService.getById(req.params.id)
        res.status(200).send(job)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}

// Create

async function addJob(req, res) {
    try {
        const job = await jobsService.add(req.body)
        res.send(job)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}

// Update

async function updateJob(req, res) {
    try {
        const job = await jobsService.update(req.body)
        res.send(job)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}

// Remove

async function removeJob(req, res) {
    try {
        const job = await jobsService.remove(req.params.id)
        res.send(job)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}


function getHeadOptions(req, res) {
    try {
        const headOptions = jobsService.getHeadOptions()
        res.send(headOptions)
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
}
