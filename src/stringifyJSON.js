// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var ary = [];
  var objKeys = [];
  var aryOfKeyValue = [];

  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return '' + obj;
  } else if(typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
  	if(obj[0] === undefined) {
  		return '[]';
  	} else {
  		obj.forEach(function(item) {
  			ary.push(stringifyJSON(item));
  		});
  		return '[' + ary + ']';
  	}

  } else if(obj instanceof Object) {
  	objKeys = Object.keys(obj);
  	objKeys.forEach(function(key) {
  		var keyOut = '"' + key + '"';
  		var keyValueOut = obj[key];
  		if(typeof keyValueOut === 'function' || typeof keyValueOut === undefined) {
  			aryOfKeyValue.push('');
  		} else if(typeof keyValueOut === 'string') {
  			aryOfKeyValue.push(keyOut + ':' + '"' + keyValueOut + '"');
  		} else if(typeof keyValueOut === 'number' || typeof keyValueOut === 'boolean' || keyValueOut === null) {
  			aryOfKeyValue.push(keyOut + ':' + keyValueOut);
  		} else if(keyValueOut instanceof Object) {
  			aryOfKeyValue.push(keyOut + ':' + stringifyJSON(keyValueOut));
  		}
  	});
  	return '{' + aryOfKeyValue + '}';
  }
};
