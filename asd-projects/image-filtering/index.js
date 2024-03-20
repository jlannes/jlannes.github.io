// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  smudge();

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
for(var r = 0; r < image.length; r++) {
  for(var c = 0; c < image[r].length; c++) {
    var rgbString = image[r][c]
    var rgbNumbers = rgbStringToArray(rgbString)
    filterFunction(rgbNumbers)
    rgbString = rgbArrayToString(rgbNumbers)
    image[r][c] = rgbString
  }
}
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  for(var r = 0; r < image.length; r++) {
    for(var c = 0; c < image[r].length; c++) {
      var rgbString = image[r][c]
      if(rgbString !== "rgb(150, 150, 150)") {
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
      }
      image[r][c] = rgbString
    }
  }
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  return(num > 255 ? 255 : num < 0 ? 0 : num)
}

// TODO 3: Create reddify function
function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(array) {
  keepInBounds(array[BLUE] -= 50)
}
function increaseGreenByBlue(array) {
  keepInBounds(array[GREEN] += array[BLUE])
}
// CHALLENGE code goes below here
function smudge() {
  for(var r = 0; r < image.length; r++) {
    for(var c = 0; c < image[r].length; c++) {
      var rgbString = image[r][c]
      var rgbStringNext = image[r][c+1]
      var rgbNumbers = rgbStringToArray(rgbString)
      var rgbNumbersNext = rgbStringToArray(rgbStringNext)
      keepInBounds(rgbNumbers[RED] += rgbNumbers[RED]/5)
      rgbString = rgbArrayToString(rgbNumbers)
      console.log(rgbString)
      image[r][c] = rgbString
    }
  }
}