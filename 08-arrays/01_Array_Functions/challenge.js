module.exports.reversePlusOne = function(x) {
  var array = x;
  array.reverse();
  array.unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(x) {
  var array = x;
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(x) {
  var array = x;
  return array.length + 1;
};