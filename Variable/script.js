/*let name = 'John';
let admin = name ;

alert(name);
*/

// const BIRTHDAY = '09.05.1992';
// console.log(BIRTHDAY);
// console.log(`My Birthda is ${BIRTHDAY}`);




function playGame(yourMove){
    let computerMove = Math.random();
    let computerChoice = '';
    let myMove = yourMove;
    let result = '';

    if (computerMove <= 1/3) {
        computerChoice = 'ROCK';

        if (myMove === 'ROCK'){
            result ='DRAW';

        } else if (myMove ==='PAPER') {
            result ='YOU WIN';

        } else if (myMove ==='SCISSOR') {
            result ='COMPUTER WIN';
            
        } 

        // console.log(result);
    }

    else if (computerMove <= 2/3) {
        computerChoice = 'PAPER';
        
        if (myMove === 'ROCK'){
            result ='COMPUTER WIN';

        } else if (myMove ==='PAPER') {
            result ='DRAW';

        } else if (myMove ==='SCISSOR') {
            result ='YOU WIN';
            
        } 

        // console.log(result);

    } 
    else if (computerMove > 2/3) {
        computerChoice = 'SCISSOR';

        if (myMove === 'ROCK'){
            result ='YOU WIN';

        } else if (myMove ==='PAPER') {
            result ='COMPUTER WIN';

        } else if (myMove ==='SCISSOR') {
            result ='DRAW';
            
        } 

        
    }

    console.log(result);

    return console.log(`C: ${computerChoice} ---- Y: ${myMove} ===== ${result}`);
   
    
}

