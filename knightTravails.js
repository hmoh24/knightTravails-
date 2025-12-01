function knightTravails(inputPosition, finalPosition) {
  let previousMovesSet = new Set();
  let movesQueue = [];

  movesQueue.push([inputPosition]);

  for (const position of movesQueue) {
    if (position[0].toString() === finalPosition.toString()) {
      return position;
    }
    let validMovesArray = calculateValidMoves(position[0], previousMovesSet);
    validMovesArray.forEach((nextPosition) => {
      previousMovesSet.add(nextPosition.toString());
      movesQueue.push([nextPosition, ...position]);
    });
  }
}

function calculatePossibleMoves(inputPosition) {
  return [
    [inputPosition[0] + 2, inputPosition[1] - 1],
    [inputPosition[0] + 2, inputPosition[1] + 1],
    [inputPosition[0] - 2, inputPosition[1] - 1],
    [inputPosition[0] - 2, inputPosition[1] + 1],
    [inputPosition[0] - 1, inputPosition[1] + 2],
    [inputPosition[0] + 1, inputPosition[1] + 2],
    [inputPosition[0] - 1, inputPosition[1] - 2],
    [inputPosition[0] + 1, inputPosition[1] - 2],
  ];
}

function calculateValidMoves(inputPosition, prevSet) {
  let validMovesArray = calculatePossibleMoves(inputPosition).filter(
    (innerArray) => {
      return (
        innerArray[0] >= 0 &&
        innerArray[0] <= 7 &&
        innerArray[1] >= 0 &&
        innerArray[1] <= 7
      );
    }
  );
  let uniqueMovesArray = validMovesArray.filter((position) => {
    return !prevSet.has(position.toString());
  });
  return uniqueMovesArray;
}

console.log(knightTravails([5, 5], [2, 7]));
