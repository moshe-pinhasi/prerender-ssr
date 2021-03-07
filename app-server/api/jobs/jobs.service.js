const dbService = require('../../services/db.service')
const axios = require('axios')

const ObjectId = require('mongodb').ObjectId

const JOBS_COLLECTION = 'jobs'

module.exports = { query, getById, remove, update, add, addMany, getHeadOptions }


// Read
async function query(filterBy = {}) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    const { page } = filterBy
    const index = (page - 1) * 10
    try {
        const jobs = await collection.find().toArray()
        if (page) {
            return { jobs: jobs.slice(index, index + 10), total: jobs.length }
        } else {
            return { jobs, total: jobs.length }
        }
    } catch (err) {
        console.log('ERROR: cannot find jobs')
        throw err;
    }
}

// getById
async function getById(id) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {
        return await collection.findOne({ _id: ObjectId(id) })
    } catch (err) {
        console.log('ERROR: cannot find job')
        throw err;
    }
}

//Create one
async function add(job) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {
        await collection.insertOne(job);
        const {jobs} = await query()
        await axios.post('http://localhost:3031/api/admin/jobs/generate-job-site')
        return job;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}

//Create many
async function addMany(jobs) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {
        await collection.insertMany(jobs);
        await axios.post('http://localhost:3031/api/admin/jobs/generate-job-site')
        return jobs;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}

// Update
async function update(job) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    const strId = job._id
    const _id = ObjectId(strId)
    delete job._id
    try {
        await collection.updateOne({ "_id": _id }, { $set: job })
        job._id = _id
        const {jobs} = await query()
        await axios.post('http://localhost:3031/api/admin/jobs/generate-job-site')
        return job
    } catch (err) {
        console.log(`ERROR: cannot update job ${job._id}`)
        throw err;
    }
}

// Delete
async function remove(Id) {
    // ADD YOUR LOGIC HERE
}

function getHeadOptions(job) {
    const headOptions = {
        title: {
            inner: 'It will be a pleasura',
        },
        // Meta tags
        meta: [
            { name: 'application-name', content: 'Name of my application' },
            { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
            // ...
            // Twitter
            { name: 'twitter:title', content: 'Content Title' },
            // with shorthand
            { n: 'twitter:description', c: 'Content description less than 200 characters' },
            // ...
            // Google+ / Schema.org
            { itemprop: 'name', content: 'Content Title' },
            { itemprop: 'description', content: 'Content Title' },
            // ...
            // Facebook / Open Graph
            { property: 'fb:app_id', content: '123456789' },
            { property: 'og:title', content: 'Content Title' },
            // with shorthand
            { p: 'og:image', c: 'https://example.com/image.jpg' },
            // ...
        ],
        // link tags
        link: [
            { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
            { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
            // with shorthand
            // { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
            // ...
        ],
        script: [
            {
                type: 'text/javascript',
                src: 'https://cdn.rawgit.com/ktquez/vue-head/master/vue-head.js',
                async: true,
                body: true,
            }, // Insert in body
            // with shorthand
            { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
            // ...
        ],
    };
    return headOptions
}


// _insertInitialItems(jobs)
async function _insertInitialItems(items) {
    const keywords = ['hybrid', 'dog-friendly', 'transportation', 'long-term', 'short-term']
    const ctgs = [
        { _id: 'c101', name: 'Dev' },
        { _id: 'c102', name: 'QA' },
        { _id: 'c103', name: 'Marketing' },
        { _id: 'c104', name: 'Product' },
        { _id: 'c105', name: 'Sales' },
    ]

    const noIdItems = items.map(item => {
        // sort randomly
        keywords.sort(function () { return .5 - Math.random() })
        ctgs.sort(function () { return .5 - Math.random() })

        if (item.id) delete item.id
        item.keywords = keywords.slice(0, 2)
        item.ctgs = ctgs.slice(0, 2)
        item.imgUrl = 'https://images.creativemarket.com/0.1.0/ps/1435227/1160/772/m1/fpnw/wm0/briefcase-icon-flat-01-.jpg?1467989176&s=e696a07317ac83c3ee5a659b70e1996c'
        return item
    })
    addMany(noIdItems)
}
