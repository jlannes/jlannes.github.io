//Initialization
var points = 0
var pointsPerSecond = 1
$("#upgrade1").on("click", upgrade1Click)
setInterval(update, 1000/60)
setInterval(updatePoints, 1000)

//Main functions
function update(){
    $("#points").text("points: " + points)
}
function updatePoints() {
    points += pointsPerSecond
}
function upgrade1Click() {
    pointsPerSecond += 1
}