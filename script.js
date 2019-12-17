var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    console.log("Cliquei!!");
});

button.addEventListener("mouseleave", function () {
    console.log("Mouse saiu!!");
});