//Initialization
var points = 0
var pointsPerSecond = 1
$("#addPoint").on("click", addPoints)
$("#upgrade1").on("click", upgrade1Click)

setInterval(updatePoints, 1000)

//Main functions
function updatePoints() {
    points += pointsPerSecond
    updatePointCounter(points)
    $("#pps").text("pps: " + pointsPerSecond)
    pointsPerSecond += pointsPerSecond
}

function addPoints() {
    points += 1
    updatePointCounter(points)
}

function upgrade1Click() {
    pointsPerSecond += 1
    $("#pps").text("pps: " + pointsPerSecond)
}
function updatePointCounter(points) {
    toString(points)
    console.log(points)
    $("#points").text("points: " + points)
    // if(points.length > 9) {

    // }
}