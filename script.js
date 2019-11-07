

var pcChoise;
var userChoise;
var result;


let allHandsUser = document.querySelectorAll(".fa");
var Welcome = function() {
    

    swal({
        text: `Choose Rock, Paper or Scissors with your mouse`,
        icon: "info",
        button: {
            text: "Click to play"
        }
    })
    console.log(allHandsUser);
    }
Welcome();

var Win = function () {
    swal({
        text: `You win!  
               User=${userChoise} 
               PC=${pcChoise}`,
        icon: "success",
        button: {
            text: "Click to play"
        }
    })

}
var Lose = function () {
    swal({
        text: `You lose!  
               User=${userChoise} 
               PC=${pcChoise}` ,
        icon: "error",
        button: {
            text: "Click to play"
        }
    })

}
var Draw = function() {
    swal({
        text: `Draw!  
               User=${userChoise} 
               PC=${pcChoise}`,
        icon: "info",
        button: {
            text: "Click to play"
        }
    })

}
   
    allHandsUser.forEach(function (hand) {
        hand.addEventListener('click', function () {
                hand.classList.add('disabled' , 'selected');
                console.log(hand.className);
                if (hand.className == "fa fa-hand-paper-o disabled selected") {
                userChoise = ("paper");
                console.log("User =" , userChoise);
                
                }
            else if (hand.className == "fa fa-hand-rock-o disabled selected") {
                
                userChoise = ("rock");
                console.log("User =" , userChoise);

            }
            else if (hand.className == "fa fa-hand-scissors-o disabled selected") {

          
                userChoise = ("scissors");
                console.log("User =" , userChoise);


            }
            hand.classList.remove('disabled' , 'selected');
            RandomizzareControllare();
            
    
        })
  });

// funzione che randomizza la scelta del computer in maniera numerica e la trasforma in paper, rock, o scissors
// e controlla vinci perdi o pareggi.
function RandomizzareControllare() {
    
    pcChoiseNum = Math.round(2*Math.random());
    console.log(pcChoiseNum); 
    
    if (pcChoiseNum == 0) {
        pcChoise = ("paper");
        console.log("PC =" , pcChoise);
    }
    else if (pcChoiseNum == 1) {
        pcChoise = ("rock");
        console.log("PC =" , pcChoise);
    }
    else if (pcChoiseNum == 2) {
        pcChoise = ("scissors");
        console.log("PC =" , pcChoise);
        
    }

    
   
    if ((pcChoise == 'rock')  && (userChoise == 'rock')) {
      result = ("draw");
      Draw();
      


    } 
    else if((pcChoise == 'rock') && (userChoise == 'paper')) {
      result = ("win");
      Win();
    } 
    else if((pcChoise == 'rock') && (userChoise == 'scissors')){
      result = ("lose");
      Lose();
    }
    else if ((pcChoise == 'paper') && (userChoise == 'rock')) {
      result = ("lose");
      Lose();
    } 
    else if((pcChoise == 'paper') && (userChoise == 'paper')) {
      result = ("draw");
      Draw();
    } 
    else if((pcChoise == 'paper') && (userChoise == 'scissors')) {
      result = ("win");
      Win();
    }
     else if ((pcChoise == 'scissors') && (userChoise == 'rock')) {
      result = ("win");
      Win();
    } 
     else if((pcChoise == 'scissors') && (userChoise == 'paper')) {
      result = ("lose"); 
      Lose(); 
    }
    
    
  }
