var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
        levelChange();
    }
});
$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);}
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        // started =false;
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}
function levelChange(){
    $("h1").text(`Level ${level}`);
}
function nextSequence(){
    userClickedPattern = [];
    level = level+1;
    levelChange();
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}

function playSound(evt){
    const audio = new Audio("sounds/"+evt+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed");
    },100);
}


function startOver(){
    level = 0;
    started = false;
    gamePattern=[];
}