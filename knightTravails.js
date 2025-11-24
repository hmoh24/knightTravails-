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
