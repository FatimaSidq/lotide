function map(arr, callback){
  console.log(callback)
  const result = [];
  for (let item of arr){
      result.push(callback(item));
  }
  return result;
}

module.exports = map;