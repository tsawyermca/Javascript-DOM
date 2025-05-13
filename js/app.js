//Updating text and grabbing nodes from html
//grabs h1 tag from index.html
let myName = document.getElementById("myName");
console.log(myName);

//updates the text and replaces it with this string("Tyler")
myName.innerText = "Tyler";

const thingsILike = ["Gaming", "Cooking", "My Cats"];

//Grabs group list of element nodes and converts to an array list
let liList = document.querySelectorAll(".my-items");
console.log(liList);

//Grab one node element out of a specific list
let liSecond = document.querySelector("#myList li:nth-child(2)")
console.log(liSecond)

//setting text for each node list with an existing array(thingsILike)
for (let i = 0; i < liList.length; i++) {
    console.log(liList[i]);
    liList[i].innerText = thingsILike[i]
}

//Creating elements and tags
//create an li tag("<li></li>")
let liItem = document.createElement("li");
console.log(liItem); //<li></li>
liItem.innerText = "Writing"; //changes above to <li>Writing</li>

//Grabbing ul node element to use appendChild()
let parentEl = document.getElementById("myList");
console.log(parentEl);
//appending the liItem node to html
parentEl.appendChild(liItem);

//dom styling
let paragraph = document.querySelector("p");
console.log(paragraph);

//.style allows changing css properties of an element via javascript
paragraph.style.fontSize = "25px";
paragraph.style.backgroundColor = "lightgreen";
//https://w3schools.com/cssref/index.php
//^ a list of css references for javascript

//DOM Event Listeners
//Event Listeners are waiting for a type of event to fire off

let clickButton = document.querySelector("#here")
clickButton.addEventListener("click", colorList);
function colorList(){
    //liList variable is only coloring first three li's
    //reselect node list to get all 4 lis to get an update of latest li elements
    let reList = document.querySelectorAll("li");
    for (let i = 0; i < reList.length; i++) {
        reList[i].style.color = "purple";
    }
}