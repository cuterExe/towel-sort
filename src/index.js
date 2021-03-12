// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce(
        (acc, currentValue, index) =>
            index % 2 == 0
                ? acc.concat(currentValue)
                : acc.concat(currentValue.reverse()),
        []
    );
};
