const Controller = require('../../lib/controller');
const tagFacade  = require('./tag-facade');

class TagController extends Controller {}

module.exports = new TagController(tagFacade);
