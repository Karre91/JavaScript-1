// 6
// random value generated
let computerRandom =  Math.floor(Math.random() * 100 + 1);
let guess = 1;
    
document.getElementById("submitguess").onclick = function(){
    // number guessed by user     
    let guessWas = document.getElementById("userGuess").value;
    let guessMsg = document.getElementById('write');
    if(guessWas == computerRandom)
    {    
        //let guessMsg = document.getElementById('write');
        guessMsg.innerText = "Rätt! På " + guess + " gissningar.";
        guess = 1;
        computerRandom = Math.floor(Math.random() * 100 + 1);
    }
    else if(guessWas > computerRandom) /* if guessed number is greater
                                        than actual number*/ 
    {   
        guess++; 
        //let guessMsg = document.getElementById('write');
        guessMsg.innerText = "För hög!";
    }
    else
    {
        guess++;
        //let guessMsg = document.getElementById('write');
        guessMsg.innerText = "För låg!";
    }    
}

document.getElementById("submitSwe").onclick = function(){

    let inputSentence = document.getElementById("userSwe").value;
    let rovarspraket="";
    let robMsg = document.getElementById('writeRob');
    let vocal = ["a","e","y","u","i","o","å","ö","ä"];
    for (let i = 0; i < inputSentence.length; i++){ //Går igenom varje plats i meningen
        
        let result = vocal.indexOf(inputSentence[i]); //Hittar index av vokalen
        if (result == -1){ //Om vi inte hittar någon vokal
            if (inputSentence[i] == " "){ //Kolla om det är ett mellanslag
                rovarspraket += inputSentence[i]; //Lägg till mellanslag
            }
            else{ //Det är inte vokal eller mellanslag
                rovarspraket += inputSentence[i] + "o" + inputSentence[i]; //Spara konsonat + o + konsonant
            }
        }
        else{ //Det var en vokal
            rovarspraket += inputSentence[i]; //Sparar vokalen
        }
    }
    robMsg.innerText = rovarspraket;
}


// // 7
// inputfield = document.getElementById("leaveDate");
//           var date = new Date();
         
//           datestring =
//             date.getFullYear() +
//             "-" +
//             (date.getMonth() + 1) +
//             "-" +
//             date.getDate();
//           inputfield.setAttribute("min", datestring);

//           inputfield = document.getElementById("homeDate");
//           var date = new Date();
         
//           datestring =
//             date.getFullYear() +
//             "-" +
//             (date.getMonth() + 1) +
//             "-" +
//             date.getDate();
//           inputfield.setAttribute("min", datestring);