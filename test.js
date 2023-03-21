
//let students = [];
//let teacher = new Array();

function greeting(){
    alert("Hello world")
}

let students = ["AA" , "BB" , "CC" , "DD" , "EE" , "FF"];

document.getElementById("result").innerHTML = students

//greeting();

// let cubeThis = function(someNumber){
//     document.getElementById("result").innerHTML = 
//     someNumber * someNumber * someNumber
// }

// //cubeThis(9);

// let x = prompt("What number to cube");

// cubeThis(x);

// let rectangleArea = function(len,wid){
//     let area = len * wid ;
//     //document.getElementById("result").innerHTML = area ;
//     return area;
// }


let rectangleArea = (len , wid) => len * wid;

let greet = () => "Hello world"

let x = prompt("x");
let y = prompt("y");

// Calling function
//rectangleArea(x,y);

//document.getElementById("result").innerHTML = rectangleArea(x,y);
//document.getElementById("result").innerHTML = greet();
