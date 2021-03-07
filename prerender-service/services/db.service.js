const MongoClient = require('mongodb').MongoClient;

const config  =  require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = config.dbName;

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    console.log('connecting to db')
    try {
        const client = await MongoClient.connect(config.dbURL, {useNewUrlParser: true});
        const db = client.db(dbName);
        dbConn = db;
        console.log('db connected!')
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}