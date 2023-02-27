const longestCommonPrefix = function(strs) {
  let prefix = "";
  if (strs[0].length === 1) {
    if (strs[0] === strs[1]) {
      prefix = strs[0][0];
    } else {
      prefix = strs[0][0];
    }
  }
  for (let i = 1; i < strs[0].length; i++) {
    let match = true;
    strs.forEach(str => {
      console.log(strs[0].substring(0, i), str.substring(0, i));
      if (strs[0].substring(0, i) !== str.substring(0, i)) {
        match = false;
      }
    });
    if (match) {
      prefix = strs[0].substring(0, i);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["a", "b"]));