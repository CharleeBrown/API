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
                res.json(items);

          });
    });    
  let newObj = {
        id:3, 
        title:"Wendy's", 
        item:
              {
              name:"Cheese", 
              type:"burger"
              }
      };
        //res.json(newObj.item.name);
  //     client.connect(async (err) => {
    
  //       //console.log("starting to wait");
  //   // return await collect.find(query) // TODO: Work on sending the request to the database.
  //   //   .sort()
  //   //   .toArray()
  //   //   .catch(err => console.log(err))
  //   //   .then((items) => {
  //   //     if (items.length <= 0) {
  //   //       collect.insertOne(obj);
  //   //     }
  //   //     return items;
  //   //   });
  // });

});


module.exports = router;


