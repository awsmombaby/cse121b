let firstName = "Antonia";
let lastName = "Francesca";

function fullName(first, last){
    return `${first} ${last}`;
}

const fullName = function (first, last){
    return `${first} ${last}`;
}

const fullName = (first, last) => `${first} ${last}`;

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);


let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) === "B");
let namesLength = names.map(name => name.length);
names.reduce((sumlength, name) => sumlength + name.length, 0) / names.length;

// ***************************************************

//Activity 1 - Map 
let numbers = ['one', 'two', 'three'];
const newnumbers = numbers.map(number => `<li>${number}</li>`);
document.querySelector("#myList").innerHTML = newnumbers.join();
// const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(function (step) {
//   return `<li>${step}</li>`;
// });
// document.getElementById("myList").innerHTML = stepsHtml.join();


// Activity 2 - Map
let myGrade = ["A", "B", "A"];

function grade(gpa){
    let point = 0;
    if (gpa === "A"){
        return point = 4;
    } else if (gpa === "B"){
        return point = 3;
    }
}
const grAde = myGrade.map(grade); //直接把function丟進map去循環找成績

//Activity 3 - Reduce
// Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// Using reduce calculate the GPA from the array of gpaPoints.
const grAdetotal = grAde.reduce((point, gap) => point + gap);
const gradeAverage = grAdetotal / grAde.length;
