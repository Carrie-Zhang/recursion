// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  function getClass(node) {
  	if(node.classList && node.classList.contains(className)) {
  		output.push(node);
  	}
  	for(var i = 0; i < node.childNodes.length; i++) {
  		getClass(node.childNodes[i]);
  	}
  	return output;
  } 
  getClass(document.body);
  return output;

};
