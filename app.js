
const elasticsearch = require('./lib/elasticsearch')

module.exports = app => {
  if (app.config.elasticsearch.app) elasticsearch(app)
}
