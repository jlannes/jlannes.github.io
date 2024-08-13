//Initialization
//important stuff
var points = 0
var tickrate = 0

//pps
var ppsBase = 0
var ppsMult = 1
var ppsTotal = 0
var ppsSquare = false

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
    points += (ppsBase*ppsMult)/151
    $("#pps").text("pps: " + ppsTotal)
}

function addPoints() {
    points += 1 + Math.sqrt(ppsTotal)
    updatePointCounter(points)
}

function buyable1Click() {
    if(points >= upg1Cost) {
        points -= upg1Cost
        upg1Cost += 10
        convertToScientific(upg1Cost)
        ppsBase += 1
        $("#pps").text("pps: " + ppsTotal)
        $("#buyable1").text("Add 1 to pps base(cost: " + upg1Cost + ")")
    }
}

function buyable2Click() {
    if(points >= upg2Cost) {
        points -= upg2Cost
        upg2Cost *= 2
        convertToScientific(upg2Cost)
        ppsMult += 1
        $("#pps").text("pps: " + ppsTotal)
        $("#buyable2").text("Add 1 to pps mult(cost: " + upg2Cost + ")")
    }
}

function upgrade1Click() {
    if(points >= upg2Cost) {
        points -= upg2Cost
        ppsSquare = true
        $("#pps").text("pps: " + ppsTotal)
        $("#buyable2").text("Add 1 to pps mult(cost: " + upg2Cost + ")")
    }
}

function ppsTotalChange() {
    ppsTotal = ppsBase*ppsMult
    convertToScientific(ppsTotal)
}

// helper functions
function updatePointCounter() {
    pointTemp = Math.floor(points)
    convertToScientific(pointTemp)
    $("#points").text("Points: " + pointTemp)
}
function convertToScientific(num) {
    if(pointTemp >= 1000000) {
        num = num.toExponential(2)
    }
}