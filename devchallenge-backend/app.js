const express = require('express');
const app = express();
const cors = require("cors");
const { json } = require('express');
const e = require('express');
const prime = require('./module/getPrimeNumbers') 

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// POST 
// Returns median of prime number array where 
// variable req.body.limit is the upper limit of prime numbers
app.post('/', (req, res) => {

var data = ''
var status = false

let primeArr = []
let medianArr = []


 if (req.body.limit !== null)
 {  
  var limit = parseInt(req.body.limit)
  if (!isNaN(limit)) {
      if (limit <= 1)
      {
        data = "Error: the number entered must be greater than one." 
      }
      else {
        // Get our prime numbers first in an array
        medianArr = prime(limit) 

        // return data
        data = "The median number of the prime number array is " + medianArr.toString()
        status = true
      }
    }
    else {
        data = "Error: the data entered is not a valid number."
    }
 }
 else
 {
    data = "Error: no number was entered."
 }

  
 return res.json({data: data, status: status, statusCode: res.statusCode}) 
})



app.listen(port, () => console.log('Sample app listening on port ${port}!'))