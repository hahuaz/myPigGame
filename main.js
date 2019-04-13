var scores, roundScore, activePlayer, gamePlaying; //if we create these initialize function then because of scope chain some functions can't reach variables. note that all functions have their parent's scope and global scope. we created these in global scope
function initialize(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0; //0 refers one player, 1 refers another player
    gamePlaying = true;
    document.querySelector(".player-0-panel").classList.add("active")
    document.querySelector(".player-1-panel").classList.remove("active")
}
initialize() 
//next player function
function nextPlayer(){
    currentScore = 0
    document.getElementById("current-" + activePlayer).textContent = currentScore
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    //change player background:
    //document.querySelector(".player-0-panel").classList.remove("active")
    //document.querySelector(".player-1-panel").classList.add("active")
    //we can use above codes if(active-player === 0){codes};else{riverse-codes}
    //but we have toggle. toggle doing that if class has a "class name" it remove,
    // if doesn't have than it add "class name"
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")
}
//addEventListener takes two argument; first:event(like click,roll), second: when event occurs, the function that run.
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){
        //1.dice will must create a number between 1 and 6
        var diceNo = Math.floor(Math.random() * 6 + 1)

        //2.display the pic result
            document.querySelector(".dice-pic").style.display = "inline-block";
            document.querySelector(".dice-pic").src = "dice" + diceNo + ".png"

        //3.update the current score if diceNo not 1
        if(diceNo !== 1){
            //add score
            currentScore += diceNo
            document.getElementById("current-" + activePlayer).textContent = currentScore
        }else{
           nextPlayer()
        }
    }
})

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
        //add current score to score
        scores[activePlayer] += currentScore
        document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer]
        //check if player won the game
        if(scores[activePlayer] >= 20){
            document.getElementById("name-"+activePlayer).textContent = "Winner!!!"
            alert("There is a winner.")
            gamePlaying = false;
        }else{
            nextPlayer()
        }
    }
})

document.querySelector(".btn-new").addEventListener("click",function(){
    document.getElementById("name-0").textContent="Player 1"
    document.getElementById("name-1").textContent="Player 2"
    initialize()
    document.querySelector("#current-0").textContent= "0"
    document.querySelector("#score-0").textContent= "0"
    document.querySelector("#current-1").textContent= "0"
    document.querySelector("#score-1").textContent= "0" 
})