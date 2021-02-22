module.exports = function towelSort (matrix = []) {
  matrix.forEach((element, index) => {
    if (index % 2 !== 0) {
      element.reverse();
    }
  })
  return matrix.flat();
}
