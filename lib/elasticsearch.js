const elasticsearch = require('elasticsearch')
module.exports = app => {
  app.addSingleton('elasticsearch', createClient)
}
function createClient (config, app) {
  let client = new elasticsearch.Client({
    host: config.host,
    // log: LogClass,
    apiVersion: config.apiVersion
  })

  return client
}
