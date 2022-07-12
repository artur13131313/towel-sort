
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newLine = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let snake = i % 2 === 0 ? j : (matrix[i].length - j - 1);
                newLine.push(matrix[i][snake]);
            }
        }
        return newLine;
    } else {
        return newLine;
    }
}

