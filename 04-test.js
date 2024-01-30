// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// //with .foreach
// //const foodsElement = document.querySelector("#favorite-foods");
// function createandAppendFoodItem(food){
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.foreach(createandAppendFoodItem);

// //with .map
// //const foodsElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food){
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }
// //or
// function mapFoodItemSmall(food){
//     return `<li>${food}</li>`;
// }
// const foodlistElements = myInfo.favoriteFoods.map(mapFoodItem);
// foodsElement.innerHTML = foodlistElements.join('');
// // The map example could be simplified as below:
// //  const foodsElement = document.querySelector("#favorite-foods");
//   const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
//   //foodsElement.innerHTML = foodListElements.join("");

// // OR we could in fact simplify this down to one line!
// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");

// *****************************************

// Activity 4
//先給變數
// const foodsElement = document.querySelector("#favorte-foods");
// const placeElement = document.querySelector("#places-lived");

// //建立功能
// function foodsTemplate(food){
//   return `<li>${food}</li>`;
// }
// function placesTempale(place){
//   return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
// }
// //第一個變數放想循環的陣列,第二個變數放功能函數
// function generateListMarkup(list, templateCallback){ 
//   const longlist = list.map(templateCallback); //map會建立一個新的陣列,list會自動帶入變成function的直
//   return longlist.join(""); //join會將陣列中所有元素連結、合併成一個字串
// }

// //呼叫函數
// foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
// placeElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTempale);

// check your understanding
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let h = 0; h < studentReport.length; h++){
  if (studentReport[h] < LIMIT){
    console.log(studentReport[h]);
  }
}

for(value of studentReport){
  if(value < LIMIT){
    console.log(value);
  }
}

let i = 0;
while(i < studentReport.length){
  if (studentReport[i] < LIMIT){
    console.log(studentReport[i]);
  }
}

studentReport.forEach(item);
if(item > LIMIT){
  console.log(item);
}

for(value in studentReport){
  if(studentReport[value] < LIMIT){
    console.log(studentReport[value]);
  }
}

