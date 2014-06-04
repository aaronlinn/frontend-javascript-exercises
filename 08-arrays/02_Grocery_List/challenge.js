module.exports.addItem = function(item, list) {
  var groceries = list;
  if (groceries.indexOf(item)) {
    groceries.push(item);
  }
  return groceries;
};

module.exports.reverseSortedList = function(x) {
  var array = x;
  return array.sort().reverse();
};