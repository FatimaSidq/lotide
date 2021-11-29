function map(arr, callback){
  console.log(callback)
  const result = [];
  for (let item of arr){
      result.push(callback(item));
  }
  return result;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);