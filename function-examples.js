/* 
function functionname (parameters){
    // function body
    //return
}
 
var returnvalue = functionname(parameters value)
 */

function getAverage(Assignment1, Assignment2, Assignment3) {
    const total = Assignment1 + Assignment2 + Assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log( 'my average so far: ', myAverage);