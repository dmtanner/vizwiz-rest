const Router = require('express').Router;
const router = new Router();

const message  = require('./model/message/message-router');
const tag  = require('./model/tag/tag-router');
/* yeoman require hook */
/* Don't remove this comment, it is needed by the sub generator */

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to vizwiz-rest API!' });
});

router.use('/message', message);
router.use('/tag', tag);
/* yeoman use hook */
/* Don't remove this comment, it is needed by the sub generator' */

module.exports = router;
