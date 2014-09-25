// Test node server
var http = require('http');
var url = require('url');

http.createServer(function (req, res)
{
        // Parsing out time-space-keyword params. Altitude, longitude, time, keywords
        // I.e. briefmap.com?lmax=12.456&lmin12.4&amax=41.2&amin=41.0&tmax=12345&tmin=23456&kw=crime
        var queryObject = url.parse(req.url, true).query;
        console.log(queryObject)

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end( 'Got this request' +
            queryObject.lmax +
            queryObject.lmin +
            queryObject.amax +
            queryObject.amin +
            queryObject.tmax +
            queryObject.tmin +
            queryObject.kw);
    }
).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');