const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (Array.isArray(results[str[i]])) {
      results[str[i]].push(i);
    } else if ("abcdefghijklmnopqrstuvwxyz".includes(str[i])) {
      results[str[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));