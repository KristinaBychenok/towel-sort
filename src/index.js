
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix != undefined) {
    let result = matrix.reduce(function(acc, item, index) {
      if (index % 2 == 0) {
        return acc.concat(item)
      }
      return acc.concat(item.reverse())
    }, [])
    return result
  } return []
}
