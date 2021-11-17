// DEL 1

// 1 
function squareToTen (){
    for (let i = 1; i <= 10; i++)
    {
        let product = i * i;
        console.log(i +  " * " + i + " = " + product);
    }
}


// 2
function multiplication(){
    for (let i = 1; i <= 10; i++)
    {
        for (let j = 1; j <= 10; j++)
        {
            let prod = i * j;
            console.log(i +  " * " + j + " = " + prod);
        }
    }
}


// 3
function guessNumber(){
    let answer = Math.floor(Math.random() * 100 + 1);
    var guess = NaN;
    let exit = false;

    while (exit == false){
        guess = prompt("Gissa på ett tal:", "Skriv ett tal här");

        if (guess){
            if (guess < answer)
                {
                    alert("För lågt!");
                }
                else if (guess > answer)
                {
                    alert("För högt!");
                }
        } 
        else {
            exit = true;
        }
    }
}


// 4
function robbersLanguage(){
let inputSentence = "";
let rovaspraket = " ";

inputSentence = prompt("Skriv in meningen du vill översätta:");

let vocal = ["a","e","y","u","i","o","å","ö","ä"];

for (let i = 0; i < inputSentence.length; i++){ //Går igenom varje plats i meningen
    
    let result = vocal.indexOf(inputSentence[i]); //Hittar index av vokalen
    if (result == -1){ //Om vi inte hittar någon vokal
        if (inputSentence[i] == " "){ //Kolla om det är ett mellanslag
            rovaspraket += inputSentence[i]; //Lägg till mellanslag
        }
        else{ //Det är inte vokal eller mellanslag
            rovaspraket += inputSentence[i] + "o" + inputSentence[i]; //Spara konsonat + o + konsonant
        }
    }
    else{ //Det var en vokal
        rovaspraket += inputSentence[i]; //Sparar vokalen
    }
}
console.log("Din mening i rövarspråker blir: " + rovaspraket);
}