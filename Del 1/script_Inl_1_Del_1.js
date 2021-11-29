window.onload = function() {
    // 1 
    squareToTen = function (){
        console.clear(); //Rensar fönster
        for (let i = 1; i <= 10; i++) 
        {
            let product = i * i; //Produkten räknas ut
            console.log(`${i} * ${i} = ${product}`); //Skriver ut    
        }
    }

    // 2
    multiplication = function (){
        console.clear(); //Rensar fönster
        for (let i = 1; i <= 10; i++) //Loopen börjar på 1 och körs till 10
        {
            for (let j = 1; j <= 10; j++) //För varje varv i den yttre loopen går den innre 10 ggr
            {
                let prod = i * j; //Produkten räknas ut
                console.log(`${i} * ${j} = ${prod}`); //Skriver ut
            }
        }
    }

    // 3
    guessNumber = function (){
        let answer = Math.floor(Math.random() * 100 + 1); //Genererar ett slumpat tal
        var guess;  //Användarens gissning
        let exit = false; 

        while (!exit){ //Medans vi inte vill avsluta
            guess = prompt(`Gissa på ett tal:`, `Skriv ett tal här`); //Skriver ut en alertbox
            if (guess){ //Om en gissning har skrivits in           
                if (guess != answer){ //Om gissningen inte är svaret
                    if (guess < answer){
                        alert(`För lågt!`);
                    }
                    else if (guess > answer){
                        alert(`För högt!`);
                    }
                } 
                else { //Gissningen är samma som answer
                    alert(`Grattis, du gissade rätt!`)  
                    exit = true; //Avsluta          
                }            
            }
            else exit = true; //Avsluta            
        }   
    }


    // 4
    robbersLanguage = function (){
        let inputSentence = ""; //Input från användaren
        let rovarspraket = ""; //Här hamnar den översatta meningen
        inputSentence = prompt("Skriv in meningen du vill översätta:"); //Sparar användarens mening
        let vocal = ["a","e","y","u","i","o","å","ö","ä"]; //Vokaler som bara skall sparas i rovarspraket som dom är

        if (inputSentence) //Om vi har en input
        {
            inputSentence = inputSentence.toLocaleLowerCase(); //Gör användarens input till små bokstäver
            for (let i = 0; i < inputSentence.length; i++){  //Går igenom varje index (bokstav, mellanslag osv) i meningen           
                let result = vocal.indexOf(inputSentence[i]); //Tittar om indexet [i] innehåller en vokal  

                if (i == 0){ //Om det är första bokstaven, lägg till den som stor bokstav
                    if(result == -1){ //Om vi inte hittar någon vokal (-1 betyder att indexOf kom tillbaka tomhänt)   
                        if (inputSentence[i] == " "){ //Kolla om det är ett mellanslag
                            rovarspraket += inputSentence[i].toLocaleUpperCase(); //Lägg till mellanslag
                        }
                        else{ //Det är inte vokal eller mellanslag
                            rovarspraket += inputSentence[i].toLocaleUpperCase() + "o" + inputSentence[i]; //Spara konsonat + o + konsonant
                        }
                    }
                    else{ //Det var en vokal
                        rovarspraket += inputSentence[i]; //Sparar vokalen
                    }                
                }
                else {
                    if(result == -1){ //Om vi inte hittar någon vokal (-1 betyder att indexOf kom tillbaka tomhänt)   
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
            }         
            alert("Din mening på rövarspråker blir: " + rovarspraket);
        }
        else{
            alert("Du skrev inte någonting");            
        }  
    }
}