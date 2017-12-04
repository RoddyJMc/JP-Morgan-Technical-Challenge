var express = require('express');
var router = express.Router();

var clientList = [{
		        id: 1,
		        firstname: "David",
		        surname: "Smith",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 2,
		        firstname: "Ryan",
		        surname: "Giggs",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 3,
		        firstname: "John",
		        surname: "Smith",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    }, {
		        id: 4,
		        firstname: "Jane",
		        surname: "McLean",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    }, {
		        id: 5,
		        firstname: "Bill",
		        surname: "Gates",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    }, {
		        id: 6,
		        firstname: "Terry",
		        surname: "Ferry",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 7,
		        firstname: "Bill",
		        surname: "Murray",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 8,
		        firstname: "Harry",
		        surname: "Potter",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 9,
		        firstname: "Bob",
		        surname: "Ross",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    },
		    {
		        id: 10,
		        firstname: "Bob",
		        surname: "Smith",
		        company: "Google",
		        telephone: "0141-7778899",
		        country: "Scotland"
		    }
		];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(clientList);
});

module.exports = router;
