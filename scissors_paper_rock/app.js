let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscore = document.querySelector('#user-score');
const compscore = document.querySelector('#computer-score');

const genComputerChoice = () => {
    const options =['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const draw = () => {
    msg.innerText = "It's a draw, Try again";
    msg.style.backgroundColor ="#081b31" ;
}

const winner = (userwin, userchoice, compchoice)=> {
    if(userwin) {
        userScore++;
        userscore.innerText = userScore;
        msg.innerText =`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="Green" 
    }
    else{
        compScore++;
        compscore.innerText = compScore;
        msg.innerText =`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    const compchoice = genComputerChoice();
    if(userchoice === compchoice)
    {
        draw();
    }
    else {
        let userwin = true;
        if(userchoice === 'rock'){
            userwin = compchoice === 'paper'? false: true;
        }
        else if(userchoice === 'paper'){
            userwin = compchoice === 'scissors'? false: true;
        }
        else {
            userwin = compchoice === 'rock'? false: true;
        }
        winner(userwin, userchoice, compchoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id')
        playGame(userchoice)
    });
    
})