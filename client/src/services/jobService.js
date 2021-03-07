import { httpService } from "./httpService"

export const jobService = {
    getJobs,
    getJob,
    saveJob,
    getEmptyJob,
    getHeadOptions
}

async function getJobs(page, filterBy) {
    const searchQuery = _parseFilterToQueryParams(page, filterBy)
    return httpService.get(`jobs${searchQuery}`)
}

async function getJob(jobId) {
    const job = await httpService.get(`jobs/${jobId}`)
    return job
}

async function saveJob(job) {
    let savedJob;
    if (job._id) {
        savedJob = await httpService.put(`jobs`, job)
    } else {
        savedJob = await httpService.post(`jobs`, job)
    }
    return savedJob
}

async function getHeadOptions() {
    const headOptions = await httpService.get(`jobs/head`)
    return headOptions
}

function getEmptyJob() {
    return {
        title: '',
        location: '',
        job_type: '',
        ctgs: [],
        keywords: [],
        imgUrl: '',
        company: ''
    }
}

function _parseFilterToQueryParams(page, filter) {
    try {
        if (!filter) filter = ''
        // console.log(filter)
        const queryString = new URLSearchParams(filter)
        queryString.append('page', page)
        // console.log(queryString.toString())
        return `?${queryString.toString()}`
    } catch (err) {
        console.log(err)
        return ''
    }

}