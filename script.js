let yourScore = {
   win : 0,
   lose : 0,
   tie : 0,
};

function playGame(yourChoice){               // Added functionality through a playGame() function in JS
   let randomNum = Math.random() * 3;         //A random number is generated ranging from 0 to 3
   let computerChoice;
   document.querySelector('#myChoice').innerHTML = yourChoice;


   if(randomNum > 0 && randomNum <= 1){
      computerChoice = 'Rock';
   }else if(randomNum > 1 &&  randomNum <= 2){
      computerChoice = 'Paper';
   }else if(randomNum > 2){
      computerChoice = 'Scissors';
   }
   
   document.querySelector('#systemChoice').innerHTML = computerChoice;

   let result;

   if(yourChoice === computerChoice){
      document.querySelector('#outcome').innerHTML = "It's a Tie!";
      yourScore.tie++;     
   }else if(yourChoice === 'Rock' && computerChoice === 'Paper'){
      document.querySelector('#outcome').innerHTML = "Computer has Won!🥺";
      yourScore.lose++;
   }else if(yourChoice === 'Rock' && computerChoice === 'Scissors'){
      document.querySelector('#outcome').innerHTML = "You have Won! 🎉";
      yourScore.win++;
   }else if(yourChoice === 'Paper' && computerChoice === 'Rock'){
      document.querySelector('#outcome').innerHTML = "You have Won! 🎉";
      yourScore.win++;
   }else if(yourChoice === 'Paper' && computerChoice === 'Scissors'){
      document.querySelector('#outcome').innerHTML = "Computer has Won!🥺";
      yourScore.lose++;
   }else if(yourChoice === 'Scissors' && computerChoice === 'Rock'){
      document.querySelector('#outcome').innerHTML = "Computer has Won!🥺";
      yourScore.lose++;
   }else if(yourChoice === 'Scissors' && computerChoice === 'Paper'){
      document.querySelector('#outcome').innerHTML = "You have Won! 🎉";
      yourScore.win++;
   }


document.querySelector('#winScore').innerHTML = yourScore.win;
document.querySelector('#loseScore').innerHTML = yourScore.lose;
document.querySelector('#tieScore').innerHTML = yourScore.tie;

}