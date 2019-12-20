// var button = document.querySelector("#enter");
// var userInput = document.querySelector("#userInput");

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// console.log(ul);


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
    if (item.classList.contains("done")){
        item.classList.remove("done");
    } else {
        item.classList.add("done");  
    }
});