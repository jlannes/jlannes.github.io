/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
/*
ITERATE over the array from i = 0 to i = length - 1
 ITERATE over the array from j = length - 1 to j = i + 1
   IF array[j]'s value < array[j - 1]'s value
     swap array[j] and array[j - 1]
*/
async function bubbleSort(array) {
    for(var i = 0; i < array.length-1; i++) {
        for(var j = array.length - 1; j > i +1; j--){
            if(array[j] >= array[j - 1]) {
                swap(array, j, j - 1)
                updateCounter(bubbleCounter);
                await sleep(); 
            }
        }
    }
}

// TODO 3: Implement quickSort


// TODOs 4 & 5: Implement partition


// TODO 1: Implement swap                           // CHANGE THIS TO TEMP VAR
function swap(array, i, j) {                        // CHANGE THIS TO TEMP VAR
    [array[i], array[j]] = [array[j], array[i]];    // CHANGE THIS TO TEMP VAR
    drawSwap(array, i, j)                           // CHANGE THIS TO TEMP VAR
}                                                   // CHANGE THIS TO TEMP VAR

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}