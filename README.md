# Knight Travails

A project to determine the shortest possible path for a knight to move from one square to another on a chessboard, outputting the specific sequence of moves.

**Source:** [The Odin Project - Knight Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

### Overview
*   **Input:** `[x,y]` (Start Position), `[x,y]` (Goal Position)
*   **Desired Output:** An array of coordinates representing the shortest path.
    *   *Example:* `[ [ 2, 7 ], [ 1, 5 ], [ 3, 4 ], [ 5, 5 ] ]`

### Notes
*   A GUI is not currently part of this project, though I may come back to implement one in the future.
*   I have included my original planning notes and thoughts below ("Planning & Pseudocode") to document my problem-solving process and how I break down logic before writing code so I can compare future self to now and track improvements.

---

## Key Learnings
*   **Graph Theory:** Before starting, I had to research graphs and the surrounding terminology to model the chessboard correctly.
*   **Breadth-First Search (BFS):** The turning point was recognizing that a **Queue** (BFS) is necessary for finding the *shortest* path. Once I selected the right data structure, the problem became much easier to break down step-by-step.

## Challenges & Optimizations
*   **Reference Equality:** My initial solution failed because I tried to compare arrays using `===`. I knew that in JS, `[1,2] === [1,2]` is `false` because they are different references, but I forgot to implement that with my .includes on the Array. I fixed this by serializing coordinates with `.toString()` to compare by value.
*   **Time Complexity (O(N) vs O(1)):** Using `Array.includes()` to check visited squares was inefficient (O(N)), especially when nested inside other loops.
    *   *Optimization:* I switched to a **Set**, which allows for O(1) lookups using `.has()`.
*   **Memory Management:** Because my initial equality check was broken, my queue was accepting duplicate coordinates. This essentially turned my BFS into a brute-force solution that stored every possible move, causing massive memory issues if the program was much larger.

---

## Planning & Pseudocode
*These are my raw notes and logic breakdown written before I wrote any executable code.*

```
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
```