var userScore, aiScore, user_card, ai_card,userNumber,aiNumber, shuffleLimit;

shuffleLimit=3;
userScore=0;
aiScore=0;

function init () {
    shuffleLimit=3;
    userScore=0;
    aiScore=0;
    document.querySelector("#score-0").textContent=userScore;
    document.querySelector("#score-1").textContent=aiScore;
    document.getElementById("player-title-0").textContent="Player 1";
    document.getElementById("player-title-1").textContent="AI";

    user_card=document.getElementById("#player-card-0");
    card.src='card_back.png';
    ai_card=document.getElementById("#player-card-1");
    card.src='card_back.png';
};


document.getElementById('btn-new').addEventListener('click',init);

document.getElementById('btn-shuffle').addEventListener('click',function(){
    // 1. Random number
    userNumber=Math.floor(Math.random()*13)+1;

    // 2.Display result
    if (shuffleLimit!=0){
        user_card=document.getElementById("#player-card-0");
        user_card.src='card-'+userNumber+'.png';
    }

    // 3. Update shuffle limit
    shuffleLimit-=1;

});

function hold (){
    //  1. Ai random number
    aiNumber=Math.floor(Math.random()*13)+1;

    // 2. Display results
    ai_card=document.getElementById("#player-card-1");
    ai_card.src='card-'+aiNumber+'.png';

    // 3. Compare results
    if (userNumber>aiNumber){
        userScore+=1;
        document.getElementById("player-title-0").textContent="Winner !!!";
        document.querySelector("#score-0").textContent=userScore;

    }else if (userNumber<aiNumber){
        aiScore+=1;
        document.getElementById("player-title-1").textContent="Winner !!!";
        document.querySelector("#score-1").textContent=aiScore;    
    }else{
        aiNumber=Math.floor(Math.random()*13)+1;
        hold(); 
    }

}

document.getElementById('btn-hold').addEventListener('click',hold);
