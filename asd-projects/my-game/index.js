//Initialization
//important stuff
var points = 0
var tickrate = 0

//pps
var ppsBase = 0
var ppsMult = 1
var ppsTotal = 0

//upgrades
var upg1Cost = 10
var upg2Cost = 50

setInterval(update, tickrate)

//Main functions
function update() {
    updatePointCounter(points)
    updatePointAmount()
    ppsTotalChange()
}

function updatePointAmount() {
    points += (ppsBase*ppsMult)/150
    $("#pps").text("pps: " + ppsTotal)
}

function addPoints() {
    points += 1 + ppsTotal/2
    updatePointCounter(points)
}

function upgrade1Click() {
    if(points >= upg1Cost) {
        points -= upg1Cost
        upg1Cost += 10
        ppsBase += 1
        $("#pps").text("pps: " + ppsTotal)
        $("#upgrade1").text("Add 1 to pps base(cost: " + upg1Cost + ")")
    }
}

function upgrade2Click() {
    if(points >= upg2Cost) {
        points -= upg2Cost
        upg2Cost *= 2
        ppsMult += 1
        $("#pps").text("pps: " + ppsTotal)
        $("#upgrade2").text("Add 1 to pps mult(cost: " + upg2Cost + ")")
    }
}

function ppsTotalChange() {
    ppsTotal = ppsBase*ppsMult
}

// helper functions
function updatePointCounter() {
    pointTemp = Math.floor(points)
    if(pointTemp >= 1000000) {
        pointTemp = pointTemp.toExponential(2)
    }
    console.log(pointTemp)
    $("#points").text("points: " + pointTemp)
}