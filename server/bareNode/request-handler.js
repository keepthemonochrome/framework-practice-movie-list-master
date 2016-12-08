var path = require('path');
var url = require('url');

var actions = {
  'GET': function(req, res) {
    var urlPath = url.parse(req.url).pathname;
    if(urlPath === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('okay');
    }
  }
}

exports.handleRequest = function(req, res) {
  var handler = actions[req.method];
  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404, '');
    res.end('404 page not found');
  }

}