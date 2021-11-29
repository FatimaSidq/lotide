const middle = function(array){
  if (array.length < 3){
    return [];
  }
  const mid = Math.ceil(array.length/2);
  if (array.length % 2 == 0){
    return [array[mid - 1], array[mid]];
  }
  return array[mid - 1];
}

module.exports = middle;