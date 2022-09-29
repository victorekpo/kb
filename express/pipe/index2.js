var request = require('request')
  , JSONStream = require('JSONStream')
  , es = require('event-stream')

var parser = JSONStream.parse() //emit parts that match this path (any element of the rows array)
  , req = request({url: 'http://localhost:5000/data'})
  , logger = es.mapSync(function (data) {  //create a stream that logs to stderr,
    console.log(data)
    return data  
  })

req.pipe(parser)
parser.pipe(logger)