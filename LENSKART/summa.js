function findSafeElements(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxElement = Number.MIN_SAFE_INTEGER;
    let minElement = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            maxElement = Math.max(maxElement, matrix[i][j]);
            minElement = Math.min(minElement, matrix[i][j]);
        }
    }
    const unsafeRows = new Array(numRows).fill(false);
    console.log(unsafeRows);
    const unsafeCols = new Array(numCols).fill(false);
    console.log(unsafeCols);
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] === maxElement || matrix[i][j] === minElement) {
                unsafeRows[i] = true;
                unsafeCols[j] = true;
            }
        }
    }
    let safeCount = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (!unsafeRows[i] && !unsafeCols[j]) {
                safeCount++;
            }
        }
    }

    return safeCount;
}
const testCases = [
    {
        rows: 3,
        cols: 3,
        matrix: [
            [8, 8, 3],
            [6, 2, 4],
            [12, 1, 2]
        ]
    },
    {
         rows: 3,
        cols: 4,
        matrix: [
            [8, 8, 3,7],
            [4, 2, 4,7],
            [12, 10, 2,7]
        ]
    }
];

// Process each test case
for (const testCase of testCases) {
    const { rows, cols, matrix } = testCase;
    const safeCount = findSafeElements(matrix);
    console.log(safeCount);
}
