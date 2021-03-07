'use strict';

var dbm;
var type;
var seed;

const jobs = require('../db/jobs.json')

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {

  const collection = 'jobs'
  await db.createCollection(collection)

  const promises = await Promise.all(jobs.map(job => {
    db.insert(collection, {...job})
  }))

  return promises;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
