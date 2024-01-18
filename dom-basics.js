const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200');
newImage.setAttribute('alt', "Description of image");
document.body.append(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection)

// OR can do this way =>

// const newSection = document.createElement("section");
// const newH2 = document.createElement("h2");
// newH2.innerText = "CSE 121b";
// newSection.appendChild(newH2);
// const newP = document.createElement("p");
// newP.innerText = "Welcome to Javascript Language";
// newSection.appendChild(newP);

// document.body.appendChild(newSection);

//新的innerHTML文字新增好後，就可以子目錄的方式新增上去