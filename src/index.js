
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (arguments.length == 0 || matrix.length == 0) {
    return [];
  }
  let arr2 = [];
  for (let i = 0; i < matrix.length; i++) {
    (i % 2 == 0) ? arr2.push(...matrix[i]) : arr2.push(...matrix[i].reverse())
  }
    return arr2;
}
