var btn = document.querySelectorAll("button");

for(var i = 0; i < btn.length; i++){

btn[i].addEventListener("click", function(){
    var btnInnerHtml = this.innerHTML;
    sounds(btnInnerHtml);
    btnAnimation(btnInnerHtml);
});

};

document.addEventListener("keypress", function(event){
    sounds(event.key);
    btnAnimation(event.key);
});

function sounds(key){
   
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;    
    
        default:
            break;
    };
};

function btnAnimation(currentKey){

    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    
    setTimeout(function(){
    activeBtn.classList.remove("pressed");
    }, 100);
};
