const CustomError = require("../extensions/custom-error");


module.exports = function countCats(backyard) {
  //throw new CustomError('Not implemented');
  let index = 0;

  backyard.forEach(item => {
    item.forEach(item => {
      if(item == "^^"){
        index++;
      }
    });
  });
  

  return index;
};
