//Initialization
var points = 0
var pps = 0
var tickrate = 0
$("#addPoint").on("click", addPoints)
$("#upgrade1").on("click", upgrade1Click)

setInterval(updatePoints, tickrate)

//Main functions
function updatePoints() {
    updatePointCounter(points)
    updatePointAmount()
}

function updatePointAmount() {
    points += pps/150
    $("#pps").text("pps: " + pps)
}

function addPoints() {
    points += 1 + pps/2
    updatePointCounter(points)
}

function upgrade1Click() {
    pps += 1
    $("#pps").text("pps: " + pps)
}

// Factory functions
function updatePointCounter() {
    pointTemp = Math.floor(points)
    if(pointTemp >= 1000000) {
        pointTemp = pointTemp.toExponential(2)
    }
    console.log(pointTemp)
    $("#points").text("points: " + pointTemp)
}