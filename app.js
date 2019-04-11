var userScore, aiScore, user_card, ai_card,userNumber,aiNumber, shuffleLimit,highScore;

highScore=5;
shuffleLimit=3;
userScore=0;
aiScore=0;
document.getElementById("btn-hold").disabled=true;

function init () {
    shuffleLimit=3;
    userScore=0;
    aiScore=0;
    document.querySelector("#score-0").textContent=userScore;
    document.querySelector("#score-1").textContent=aiScore;
    document.getElementById("player-title-0").textContent="Player 1";
    document.getElementById("player-title-1").textContent="AI";

    user_card=document.getElementById("player-card-0");
    user_card.src='img/PNG/card_back.png';
    ai_card=document.getElementById("player-card-1");
    ai_card.src='img/PNG/card_back.png';
};


document.querySelector('#btn-new').addEventListener('click',init);

document.querySelector('#btn-shuffle').addEventListener('click',function(){
    // 1. Reset player title and ai card
    document.getElementById("player-title-0").textContent="Player 1";
    document.getElementById("player-title-1").textContent="AI";

    ai_card=document.getElementById("player-card-1");
    ai_card.src='img/PNG/card_back.png';
    
    // 2. Random number
    userNumber=Math.floor(Math.random()*13)+1;

    // 3.Display result
    if (shuffleLimit>0){
        user_card=document.getElementById("player-card-0");
        user_card.src='img/PNG/card-'+userNumber+'.png';
    }

    // 4. Update shuffle limit
    shuffleLimit-=1;

    // 5. Enable Hold button
    document.getElementById("btn-hold").disabled=false;

});

function hold (){


    //  1. Ai random number
    aiNumber=Math.floor(Math.random()*13)+1;

    // 2. Display results
    ai_card=document.getElementById("player-card-1");
    ai_card.src='img/PNG/card-'+aiNumber+'.png';

    // 3. Compare results
    if (userNumber>aiNumber){
        userScore+=1;
        document.getElementById("player-title-0").textContent="Winner!!!!!";
        document.querySelector("#score-0").textContent=userScore;

    }
    else if (userNumber<aiNumber){
        aiScore+=1;
        document.getElementById("player-title-1").textContent="Winner!!!!!";
        document.querySelector("#score-1").textContent=aiScore;    
    }
    else{
        aiNumber=Math.floor(Math.random()*13)+1;
        hold(); 
    }
    shuffleLimit=3;
    document.getElementById("btn-hold").disabled=true;
}

document.getElementById('btn-hold').addEventListener('click',hold);

if(userScore===highScore){
    document.getElementById("player-title-0").textContent="Champion!!!!!!";
    document.getElementById("btn-shuffle").disabled=true;
    document.getElementById("btn-hold").disabled=true;
}
else if(aiScore===highScore){
    document.getElementById("player-title-1").textContent="Champion!!!!!!";
    document.getElementById("btn-shuffle").disabled=true;
    document.getElementById("btn-hold").disabled=true;
}