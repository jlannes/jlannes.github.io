//Initialization
var points = 0
var pps = 1
$("#addPoint").on("click", addPoints)
$("#upgrade1").on("click", upgrade1Click)

setInterval(updatePointCounter, 1000)
setInterval(updatePointAmount, 1000/pps)

//Main functions
function updatePoints() {
    updatePointCounter(points)
    $("#pps").text("pps: " + pps)
}

function updatePointAmount() {

}

function addPoints() {
    points += 1
    updatePointCounter(points)
}

function upgrade1Click() {
    pps += 1
    $("#pps").text("pps: " + pps)
}

// Factory functions
function updatePointCounter(points) {
    toString(points)
    console.log(points)
    $("#points").text("points: " + points)
    // if(points.length > 9) {

    // }
}