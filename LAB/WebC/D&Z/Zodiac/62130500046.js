let arr = [6, 7, 9];
// 1. write the parameter default and the body of the function
function sumdef(a0 = 10, a1 = a0, a2 = a1, a3 = a2, ...values) {
  let sum = a0 + a1 + a2 + a3;
  for (let i of values) {
    if (i !== undefined) sum += i;
  }
  return sum;
}
// 2. try writing an anonymous function to sum the arguments
let sumAn = function (a0 = 10, a1 = a0, a2 = a1, a3 = a2) {
  var result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result = result + arguments[index];
  }
  console.log(a0 + a1 + a2 + a3 + result);
};
// 3. try writing a function with implicit parameters
let sumImp = function () {
  var result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result = result + arguments[index];
  }
  console.log(result);
};

//Test
console.log(sumdef(1, undefined, 3, ...arr, 4, 5)); //36
console.log(sumAn(1, undefined, 3, ...arr, 4, 5)); //NaN
console.log(sumImp(1, undefined, 3, ...arr, 4, 5)); //NaN
