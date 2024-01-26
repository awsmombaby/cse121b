const PI = 3.14;
// let radius = 3;
let area = 0;
// area = radius * radius * PI;
// console.log("Area1:", area) ;
// radius = 4;
// area = radius * radius * PI;
// console.log("Area2:", area);
function circleArea(radius){
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area1: ", area);

// radius = 4;
area = circleArea(4);
console.log("Area2: ", area)

console.log(typeof 42)  //console.log 輸出到除錯 
console.log(typeof "abc") //alert 輸出到跳出視窗
console.log(typeof true)  //document.write 輸出到瀏覽器頁面上
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof { a: 1 })
console.log(typeof [1, 2, 3])
console.log(typeof function hello() {})

var adult = true;

if (adult) {
  var myName = "Bob";
  var age = 24;
}

console.log(myName);
// Bob

console.log(age);
// Error!

// modify the copyInput callback to receive the event object
function copyInput(event) {
  // take a look at the event!
  console.log(event);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}