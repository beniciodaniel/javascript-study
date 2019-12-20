// var button = document.querySelector("#enter");
// var userInput = document.querySelector("#userInput");

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

// console.log(items);


function isInputLengthGreaterThanZero()
{
    return input.value.length > 0;
}


function createListElement()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event){
    var item = event.target;
    item.classList.toggle("done");
});

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function(event){
        event.target.parentNode.remove();
    });
}