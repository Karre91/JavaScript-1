// DEL 1

// 1 
function squareToTen (){
    console.clear(); //Rensar fönster
    for (let i = 1; i <= 10; i++)
    {
        let product = i * i;
        console.log(`${i} * ${i} = ${product}`);
        
    }
}


// 2
function multiplication(){
    console.clear();
    for (let i = 1; i <= 10; i++)
    {
        for (let j = 1; j <= 10; j++)
        {
            let prod = i * j;
            console.log(`${i} * ${j} = ${prod}`);
        }
    }
}


// 3
function guessNumber(){
    let answer = Math.floor(Math.random() * 100 + 1);
    var guess;
    let exit = false;

    while (exit == false){
        guess = prompt(`Gissa på ett tal:`, `Skriv ett tal här`);
        if (guess){           

            if (guess != answer){
                if (guess < answer){
                    alert(`För lågt!`);
                }
                else if (guess > answer){
                    alert(`För högt!`);
                }
            } 
            else {
                alert(`Grattis, du gissade rätt!`)  
                exit = true;          
            }
            
        }
        else if (guess == null){
            exit = true; 
        }
    }   
}


// 4
function robbersLanguage(){
    let inputSentence = "";
    let rovarspraket = " ";

    inputSentence = prompt("Skriv in meningen du vill översätta:");
    let vocal = ["a","e","y","u","i","o","å","ö","ä"];

    if (inputSentence)
    {
        inputSentence = inputSentence.toLocaleLowerCase();

        for (let i = 0; i < inputSentence.length; i++){ //Går igenom varje plats i meningen
        
            
            let result = vocal.indexOf(inputSentence[i]); //Hittar index av vokalen
            if (i == 0){
                rovarspraket += inputSentence[i].toLocaleUpperCase();
            }
            else if(result == -1){ //Om vi inte hittar någon vokal
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
        alert("Din mening på rövarspråker blir: " + rovarspraket);
    }
    else{
        alert("Du skrev inte någonting");
    }    
}
