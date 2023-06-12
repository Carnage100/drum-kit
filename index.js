// document.querySelector(".w").addEventListener("click",handleClick);//Here () is not used after handleClick because it will execute the function right
//                                                                    //away without us pressing the button.
//                                                                    //Instead we can use anonymous function or define the function inside the event
//                                                                    //Listener to avoid this.
// function handleClick(){
//     alert("I got clicked");
// }
// Anonymous way...
// document.querySelector(".w").addEventListener("click",function () {
//     alert("I got clicked");
// });

//for clicked by mouse on screen.
for(let i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML; //this refers to the item in class drum that caused the click and .innerHTML gives its value in it.
        performSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    })
};
//for pressed on keyboard.
document.addEventListener("keydown", function(event) { //event gives what key was pressed to activate this statement.
    performSound(event.key);  //event is an event in keydown and key is a property of event.So to give back the value of key, event.key is used.
    addAnimation(event.key);
});
//function which is called above.
function performSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3"); //new audio object is created and .play() function is envoked.
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick.mp3");
                kick.play();
                break;
            default:
                console.log(buttonInnerHtml);
                break;
        }
}
//function to add animation to buttons.
function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100)
};