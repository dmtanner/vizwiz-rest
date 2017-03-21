const Model = require('../../lib/facade');
const tagSchema  = require('./tag-schema');

class TagModel extends Model {}

module.exports = new TagModel(tagSchema);
