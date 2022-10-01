console.log("Welcome to Rock Paper Scissors, Good Luck!");

game();

function getComputerChoice(){
    const choices = [
        "rock",
        "paper",
        "scissors"
    ];

    // Generate a number between 0 and 2
    let decision = Math.floor(Math.random() * 3);

    return choices[decision];
}

function choice(){
    let player = prompt("Please select Rock, Paper or Scissors to test your luck!");
    player = player.toLowerCase();

    

    return player;
}

function play(p1, cpu){
    p1 = choice();

    if (p1 != "rock" && p1 != "paper" && p1 != "scissors"){
        console.log("Incorrect input, please enter Rock, Paper or Scissors");
        choice();
    }

    cpu = getComputerChoice();
    result = 0;
    
    // Result tracks winning, losing or tying. 1 means win, 2 means tie, 3 means lose

    if(p1 == cpu){
        console.log("It's a tie! " + "You selected " + p1 + " and the cpu selected " + cpu);
        result = 2;
        return result;
    }
    else if((p1 == 'rock' && cpu == 'scissors') || (p1 == 'scissors' && cpu == 'paper') || (p1 == 'paper' && cpu == 'rock')){
        console.log("Round won " + "You selected " + p1 + " and the cpu selected " + cpu);
        result = 1;
        return result;
    }
    else{
        console.log("Round lost " + "You selected " + p1 + " and the cpu selected " + cpu);
        result = 3;
        return result;
    }
}


function game(win, lose, tie){

    win = 0;
    lose = 0;
    tie = 0;

    for (let i = 0; i < 5; i++){
        result = play();
        if(result == 1){
            win++;
        }
        else if(result == 2 ){
            tie++;
        }
        else{
            lose++
        }
    }

    if(lose > win){
        console.log("Oh No! You lost!");
    }
    else if(win > lose){
        console.log("Hooray you win!");
    }
    else
    {
        console.log("Welp it's a tie! At least you didn't lose!")
    }
}


