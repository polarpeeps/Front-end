var len = document.querySelectorAll("button").length;
count=0;
while (count<len){
    document.querySelectorAll("button")[count].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
        // this.style.color="white";



    });
    count++;
}

document.addEventListener("keydown",function(event){
    // var a = KeyboardEvent.key;
    makeSound(event.key);
    // console.log(a);
});

function makeSound(key){
    switch (key){
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(this.innerHTML);

    }

}