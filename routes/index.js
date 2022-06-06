var express = require('express');
var router = express.Router();
let config = require('./configs');
const {MongoClient} = require("mongodb");
const uri = config.connString;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const collect = client.db("mainDB").collection("CalLabBooking");


/* GET home page. */
router.get('/', function(req, res, next) {

    client.connect(async (err) => 
    {
      let query = {};
      return await collect.find(query)
        .sort()
        .toArray()
        .catch(err => console.log(err))
        .then((items) => 
          {
            if (items.length <= 0) 
            {
                collect.insertOne(obj);
            }
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Origin', 'localhost');
                res.json(items);

          });
    });    
});

router.get('/:id', function(req, res) {
  res.redirect('<h1>No User Available</h1>');
});

module.exports = router;


