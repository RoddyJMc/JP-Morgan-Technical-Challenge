var express = require('express');
var router = express.Router();




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(404, {status:404, message: 'internal error', type:'internal',statusText:'500 error'});
});



module.exports = router;
