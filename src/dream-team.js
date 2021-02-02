const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = '';
  if(!(members instanceof Array)){
    return false;
  }
  members.forEach(member => {
    if(typeof member == "string") {
      let j = 0;
      while (!/^[a-z]$/i.test(member[j])){
        j++;
      }
      str += member[j].toUpperCase();
    }else {
      return false;
    }
  });
  
  

  return str.split('').sort().join('');
};
