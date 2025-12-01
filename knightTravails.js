//Input - Starting Vertex, Goal Vertex
//Output - One or more edge list showing shortest path to given vertex

//Considerations
//Chess Board - 8x8 vertices - 0 index
//any coord of <0 or >7 invalid

//Knight moves - L Shape - 2 (up/down/left/right), then 1 (up/down if it went horizontal, left/right if it went vertical)
//Mathematically split nto two - Vertical first and Horizontal first
//Vertical first formula y coord +/-2, x coord +/-1
//Horizontal first formula x +/-2, y +/-1

//steps
//from current position, calculate all possible moves
//filter all possible moves if they do not appear on the board
//store previously visited nodes in a list, filter out if possible move matches that
//then check if possible move matches target position
//if not, push onto queue and add 'path array' as third index of the array,
//when popped out of queue, repeat process until position match
//with all position matches (can be more than one), evaluate inner path array and select shortest ones
//return these with full path

//nice to have - GUI that shows steps - user can place knight or click random button, start, and show short paths

//INPUT: [x, y], finalPosition
//store in previousPositions Array
//compare to final position, if it's valid return vertex (or edge sequence)
//calculate all possible moves,
//filter out any edge with vertex <0 and 7<
//filter out any position that is in previousPositions Array
// return 2d array with possible moves
// push starting move to get to that position into it's 2d array so that it's like [[nextMove], [prevMove]]
// push this 2d array into a queue, and all other valid moves 2d array into queue
// evaluate next item and repeat until match

let previousMovesArray = [];
let movesQueue = [];

function knightTravails(inputPosition, finalPosition) {
  if (inputPosition[0] === finalPosition) return [inputPosition];
  if (previousMovesArray.includes(inputPosition) === false)
    previousMovesArray.push(inputPosition);

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
    return !previousMovesArray.includes(position);
  });
  uniqueMovesArray.forEach((position) => {
    if (previousMovesArray.includes(position) === false)
      previousMovesArray.push(position);
  });
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

console.log(knightTravails([3, 2], [5, 5]));
console.log("Prev:", previousMovesArray);
