module.exports = solveSudoku = matrix => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let value = 1; value <= 9; value++) {
          if (checkVal(matrix, row, col, value)) {
            matrix[row][col] = value;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }

  function checkVal(matrix, row, col, value) {
    for (let i = 0; i < 9; i++) {
      const rowKey = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const colKey = 3 * Math.floor(col / 3) + (i % 3);
      if (
        matrix[row][i] === value ||
        matrix[i][col] === value ||
        matrix[rowKey][colKey] === value
      ) {
        return false;
      }
    }
    return true;
  }

  return matrix;
};

