// window: variable, that takes different methods
// alert(): a method that displays a primitive alert in the internet browser

// window.alert("Hello World")

// datatypes are basics of programming language (PL)

// FunctionName() = parameters
// [] = Arrays | Lists
// { } = Body of function algorithm | .format()
// < > = html tags only!


var student = "Shanti";                              // datatype = string = sentence = consists of characters
var studenAge = 25;                                  // datatype = integer = whole number
var avergNotes = 88.15;                              // datatype = float = decimal number
var no = "f";                                        // datatype = character
var doYouLoveToCode = true;                          // datatype = boolean
var classList = ["Gimena", "Sandhya", "Rene"];       // datatype = array = list of values of same datatypes

console.log("Student name: " + student.toUpperCase() + "Average notes: " + avergNotes + "her best friend is: " + classList[1]); // will only be shown in console of internet browser

function RandomColor(){
    document.getElementById("ColoredText").style.color = Color();
}

function Color(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16); /* return a color in hexadecimal; floor will round the random number to a whole number, random = random, there are 16.777.216 colors, number has to be changed to string and 16 is because of 0-9 and then a-f for hexadecimal*/

}