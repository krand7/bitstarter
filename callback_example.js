
var rest = require('restler');
var myUrl='http://frozen-tundra-4286.herokuapp.com/';

function getContent(url, callback) {
    rest.get(url).on('complete', function(cont) {
	console.log(cont);
	callback(cont);
    });
};

getContent(myUrl, function(cont) {console.log(cont);});
