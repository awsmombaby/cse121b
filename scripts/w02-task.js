/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Chen Szu chi";
const currentYear = new Date().getFullYear(); //2024
let profilePicture = "images/Shellyandda.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; // ("" '') (``) here are different.
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Shellyandda");


/* Step 5 - Array */
let favorfood = ["Chocolate", "Vegetable", "Mushroom", "Crispy", "Nuts"];
foodElement.innerHTML = favorfood;
let newfarfood = "IceCream";
favorfood.push(newfarfood);
foodElement.innerHTML += `<br>${favorfood}`;
favorfood.shift();
foodElement.innerHTML += `<br>${favorfood}`;
favorfood.pop();
foodElement.innerHTML += `<br>${favorfood}`;




