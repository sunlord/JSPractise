

//type方法提供了所有类型的typeof返回值
function type(Target) {
  var template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string - object"
  }
  
  if (Target === null) {
    return 'null';
  }
  // typeof(Target) == 'object' ? template[Object.prototype.toString.call(Target)] : typeof(Target);
  if(typeof(Target) == 'object') {
    var str = Object.prototype.toString.call(Target);
    return template[str];
  }else {
    return typeof(Target);
  }
}