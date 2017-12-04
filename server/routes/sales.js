var express = require('express');
var router = express.Router();


// list of 10 sales with dummy data including fields for id, clientId, productname, price, size.

var sales = [
	{
		id : 1,
		clientId : 1,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 3,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 2,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 7,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 3,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 8,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 5,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 4,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 7,
		productName : "test",
		price : "11.99",
		size : "10mm"
	},
		{
		id : 1,
		clientId : 10,
		productName : "test",
		price : "11.99",
		size : "10mm"
	}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(sales);
});


module.exports = router;
