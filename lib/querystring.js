module.exports = function (input) {
  // write your fancy code here, return the result
  var obj = {};
  input = input.replace("?", "");
  var array = input.split("&");
  for (var i=0; i<array.length; i++){
   var result = array[i].split("=");
   obj[result[0]] = result[1];
 }
 return obj;
}
