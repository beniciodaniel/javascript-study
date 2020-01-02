// var button = document.querySelector("#enter");
// var userInput = document.querySelector("#userInput");

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
// var items = ul.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");

console.log(ul.children);


function isInputLengthGreaterThanZero()
{
    return input.value.length > 0;
}


function createListElement()
{
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    // deleteButton.classList.add("Delete");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "Delete";
    
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
    console.log(deleteButtons);
}


function addListAfterClick()
{
    if (isInputLengthGreaterThanZero()) {
        createListElement();
    }
}


function addListAfterKeypress(event)
{
    // console.log(event.which);
    if (isInputLengthGreaterThanZero() && event.keyCode === 13) {
        createListElement();
    }
}


function addLineThroughAfterClick(event) {
    var item = event.target;
    if (item.tagName === "LI") {
        item.classList.toggle("done");
    }
}


function deleteNewButtonsAfterClick(event) {
    var item = event.target;
    if (item.tagName === "BUTTON" && item.classList.contains("delete")) {
        console.log(item.classList.contains("delete"));
        item.parentNode.remove();
    };
}


// for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener("click", function(event){
//         event.target.parentNode.remove();
//     });
// }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addLineThroughAfterClick);

ul.addEventListener("click", deleteNewButtonsAfterClick);