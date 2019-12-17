// var button = document.querySelector("#enter");
// var userInput = document.querySelector("#userInput");

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("teste"));
    ul.append(li);
});