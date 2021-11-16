/*
//Del 1 
for (let i = 1; i <= 10; i++)
{
    let product = i * i;
    console.log(i +  " * " + i + " = " + product);
}

//Del 2
for (let i = 1; i <= 10; i++)
{
    for (let j = 1; j <= 10; j++)
    {
        let prod = i * j;
        console.log(i +  " * " + j + " = " + prod);
    }
}

//Del 3
let answer = Math.floor(Math.random() * 100 + 1);
var guess = NaN;
while (guess != answer)
{    
    guess = prompt("Gissa på ett tal: ");
    if (guess < answer)
    {
        alert("För lågt!");
    }
    else if (guess > answer)
    {
        alert("För högt!");
    }
}
if (guess == answer)
{
    alert("GRATTIS, du gissade rätt!");
}
*/

//Del 4
let inputSentence = "";
let rovaspraket = "";
let lettersOfSentence;

lettersOfSentence = prompt("Skriv in meningen du vill översätta:");
//lettersOfSentence = inputSentence.split("");

console.log("Användaren skrev in: " + inputSentence);

console.log("Det innehåller såhär många char: " + lettersOfSentence.length);

let vocal = ["a","e","y","u","i","o","å","ö","ä"];

for (let i = 0; i < lettersOfSentence.length; i++){ //Går igenom varje plats i meningen
    
    let result = vocal.indexOf(lettersOfSentence[i]); //Hittar index av vokalen
    if (result == -1){ //Om vi inte hittar någon vokal
        if (lettersOfSentence[i] == " "){ //Kolla om det är ett mellanslag
            rovaspraket += lettersOfSentence[i]; //Lägg till mellanslag
        }
        else{ //Det är inte vokal eller mellanslag
            rovaspraket += lettersOfSentence[i] + "o" + lettersOfSentence[i]; //Spara konsonat + o + konsonant
        }
    }
    else{ //Det var en vokal
        rovaspraket += lettersOfSentence[i]; //Sparar vokalen
    }
}
console.log("Din mening i rövarspråker blir: " + rovaspraket);



/*
for (let i = 0; i < lettersOfSentence.length; i++){
    //Om det INTE är en vokal    
    if (lettersOfSentence[i] != "e"){
        if (lettersOfSentence[i] != "y"){
            if (lettersOfSentence[i] != "u"){
                if (lettersOfSentence[i] != "i"){
                    if (lettersOfSentence[i] != "o"){
                        if (lettersOfSentence[i] != "å"){
                            if (lettersOfSentence[i] != "a"){
                                if (lettersOfSentence[i] != "ö"){
                                    if (lettersOfSentence[i] != "ä"){
                                        if (lettersOfSentence[i] != " "){
                                            rovaspraket += lettersOfSentence[i];  
                                            for (let j = i + 1; j < i + 2 ; j++)                               
                                            rovaspraket += "o";                                                      
                                            rovaspraket += lettersOfSentence[i];      
                                        } //om det ÄR en vokal eller mellanslag
                                        else{
                                            rovaspraket += lettersOfSentence[i];
                                        }
                                    }                                        
                                    else{
                                        rovaspraket += lettersOfSentence[i];    
                                    }
                                }
                                else{
                                    rovaspraket += lettersOfSentence[i];    
                                }
                            }
                            else{
                                rovaspraket += lettersOfSentence[i]; 
                            }
                        }
                        else{
                            rovaspraket += lettersOfSentence[i];
                        }
                    }
                    else{
                        rovaspraket += lettersOfSentence[i];
                    }
                }
                else{
                    rovaspraket += lettersOfSentence[i];
                }
            }
            else{
                rovaspraket += lettersOfSentence[i];
            }
        }    
        else{
                rovaspraket += lettersOfSentence[i];
        }
    }
    else{
        rovaspraket += lettersOfSentence[i];    
    }
} 
//console.log("Din mening i rövarspråker blir: " + rovaspraket);*/