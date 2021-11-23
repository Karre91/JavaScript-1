// 5
info = function () {
    class Person{
        constructor(name, age, city, number){
            this.name = name;
            this.age = age;
            this.city = city;
            this.number = number;       
        }        
        GetHoldOf(){
            console.log(`${this.name} bor i ${this.city}.`);
            if(this.number==``);
            else  console.log(`Ring ${this.name} på ${this.number}.`);
        }
        Age(){
            console.log(`${this.name} är ${this.age} år gammal.`);
        }
    }
    class Student extends Person{        
        constructor(name, age, city, number, grades, graduationYear, food){
            super(name, age, city, number);
            this.grades = grades;   
            this.graduationYear = graduationYear;
            this.food = food;   
            this.learn = function (Teacher) {
                console.log(`${this.name} har ${Teacher.name} som ${Teacher.title}.`);
                if (Teacher.cours != ``) console.log(`på lektionerna lär dom sig om ${Teacher.cours}.`);
            }
        }
        GradesInfo(){
            if(this.grades==`IG`){
                console.log(`${this.name} har mestadels ${this.grades} och tar antagligen INTE examen ${this.graduationYear}.`);
            }
            else if(this.grades==`VG`){
                console.log(`${this.name} har ${this.grades} i alla ämnen och är bäst i klassen. Examen ${this.graduationYear}.`);
            }
            else console.log(`${this.name} har ${this.grades} i alla ämnen och tar examen ${this.graduationYear}.`);
        }
        WhatsUp(){
            console.log(`${this.name} äter ${this.food}.`);
        }
    }
    class Teacher extends Person{
        constructor(name, age, city, number, cours, coursLength, title, drink){
            super(name, age, city, number);
            this.cours = cours;
            this.coursLength = coursLength;
            this.title = title;
            this.drink = drink;
            this.teach = function(Student) {
                console.log(`${this.name} är ${this.title} för ${Student.name}.`);
            }
        }
        Position(){
             console.log(`${this.name} har positionen ${this.title} på skolan. ${this.name} dricker ${this.drink}. `);
        }
        Subject(){
            if (this.cours ==``);
            else{
                console.log(`${this.name} undervisar i ${this.cours} kursen som är ${this.coursLength} veckor lång.`);
            }             
        }
    }

let a = new Teacher(`Angelika`,`19`,`Hedemora`,``,``,``,`klassföreståndare`,`saft`);
let b = new Teacher(`Holger`,`75`,`Stockholm`,`070799558845`,`JavaScript`,`4`,`lärare`,`kaffe`);
let c = new Teacher(`Anna-Lena`,`23`,`Örebro`,`031-998815`,`Hemslöjd`,`2`,`lärare`,`te`);


let z = new Student(`Josefin`,`28`,`London`,`044685529`,`VG`, `2023`,`gröt`);
let y = new Student(`Karin`,`12`,`Cardiff`,`0707310791`,`IG`,`2023`,`snabbmakaroner`);
let x = new Student(`Alfons`,`44`,`Åre`,``,`G`, `2030`,`korv`);

// Skriv ut lärarna
a.GetHoldOf(),a.Age(),a.Position(),a.Subject(),a.teach(z);
b.GetHoldOf(),b.Age(),b.Position(),b.Subject(),b.teach(x);

//Skriv ut studenter
z.GetHoldOf(),z.Age(),z.GradesInfo(),z.WhatsUp();
y.GetHoldOf(),y.Age(),y.GradesInfo(),y.WhatsUp();
x.GetHoldOf(),x.Age(),x.GradesInfo(),x.WhatsUp();

/*Funktioner student - Skriver  ut vad läraren har för position åt eleven, 
om läraren har en kurs skrivs det ut vad dom gör på lektionerna*/
x.learn(a); 
y.learn(b); 
z.learn(c); 

//Funktioner lärare - 
a.teach(z);
b.teach(x);
c.teach(y);
}


// 6
//Slumptal genererat och sparat i variabel
let computerRandom =  Math.floor(Math.random() * 100 + 1);
let guess = 1; //Användarens antal gissningar hamnar här

//Funktion när man trycker på knappen, via ID
document.getElementById("submitguess").onclick = function(){

    //Användarens input
    let guessWas = document.getElementById("userGuess").value;
    //Meddelande
    let guessMsg = document.getElementById('write');
    //OM gissningen var lika med det genererade slumptalet
    if(guessWas == computerRandom)
    {    
        guessMsg.innerText = "Rätt! På " + guess + " gissningar.";
        guess = 1; //Antal gissningar ställs tillbaka till 1
        computerRandom = Math.floor(Math.random() * 100 + 1); //Nytt slumptal om du vill fortsätta spela
    }
    else if(guessWas > computerRandom){ 
        guess++; //Ökar antalet gissningar
        guessMsg.innerText = "För hög!"; //Skriver ut
    }
    else
    {
        guess++; //Ökar antalet gissningar
        guessMsg.innerText = "För låg!"; //Skriver ut
    }    
}

//När man trycker på knappen hamnar vi i funktionen
document.getElementById("submitSwe").onklick = function(){

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


// 7
// window.onload = function() {
//     let input = document.getElementById("input");   //formuläret
//     input.addEventListener("submit", function(evt) {
//         evt.preventDefault();   // förhindra att sidan laddas om

let travel = function (){ 

    //Deklarera variabler för förnamn, efternamn, email
    let firstName =  document.getElementById("fname").value;
    //let firstName =  document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    // let lastName = document.getElementById("lname").value;
     
    let mail  = document.getElementById("mail").value;
    //let mail  = document.getElementById("mail").value;

    let destination;
    let leaveDate = document.getElementById("leaveDate").value;
    let homeDate = document.getElementById("homeDate").value;

    

    let notName = /[^a-ö, A-Ö, ,´,-]/g;
    let myBool = true;
  
    function wrongInput(a) {
        let wrong = document.getElementsByClassName("wrong");
        
        wrong[a].innerHTML = " Fel input!";
        wrong[a].style.backgroundColor = "red";
        wrong[a].style.fontWeight ="bold";
    
    }
    function rightInput(a) {
        let right = document.getElementsByClassName("wrong");
        
        right[a].innerHTML = ``;
        right[a].style.backgroundColor = "red";
        right[a].style.fontWeight ="bold";
    
    }

    //Testa om input är giltig
    let testFirstName = function (inputfirstName){
        let result = inputfirstName.match(notName);        
        if (result == null && inputfirstName && inputfirstName != " " ) rightInput(0);
        else  {
            myBool = false;
            wrongInput(0);
        }          
    }
    testLastName = function (inputlastName){
        let result = inputlastName.match(notName);
        if (result == null && inputlastName && inputlastName != " " ) rightInput(1);
        else  {
            myBool = false; 
            wrongInput(1);
        }
    }

    testEmail = function (inputemail){
        let emailOK = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let a = emailOK.test(inputemail); 
        if (a && a == true) rightInput(2);
        else {
            wrongInput(2);
            myBool = false;             
        }
    }

    testDestination = function (){       
        if(document.getElementById('desti1').checked)  {  
            destination = document.getElementById('desti1').value;
            rightInput(3);
            }   
        else if(document.getElementById('desti2').checked) { 
            destination = document.getElementById('desti2').value; 
            rightInput(3);                
            }   
        else if(document.getElementById('desti3').checked) {  
            destination = document.getElementById('desti3').value; 
            rightInput(3);           
            }   
        else if(document.getElementById('desti4').checked) {  
            destination = document.getElementById('desti4').value; 
            rightInput(3);         
            }  
        else {
            myBool = false;
            wrongInput(3);
        }  
    }

    testDates = function(){
        if (!leaveDate) {
            wrongInput(4); 
            myBool = false;
        }
        else {
            rightInput(4);
            myBool = true;
        }
        if (!homeDate) {
            wrongInput(5); 
            myBool = false;
        }
        else {
            rightInput(5);
            myBool = true; 
        }
        if (myBool == true)
            if (leaveDate > homeDate) {
            wrongInput(4); 
            myBool = false;
            }
            else myBool = true;
        
    }
    
    
    testFirstName(firstName);
    testLastName(lastName);  
    testEmail(mail);  
    testDestination();
    testDates();

    if (myBool == true)
    {
        let a = document.getElementById("booking");
        let b = document.getElementById("paraBook");
        a.innerHTML = `Tack!`;
        b.innerHTML = `Du har bokat en resa! <br>
        Namn: ${firstName} ${lastName} <br>
        Email: ${mail} <br>
        Destination: ${destination} <br>
        Avresa: ${leaveDate} <br>
        Hemresa: ${homeDate}`;            
    } 
}  






inputfield = document.getElementById("leaveDate");
var date = new Date();
datestring = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
inputfield.setAttribute("min", datestring);


inputfield = document.getElementById("homeDate");
    
var date = new Date();
    
datestring = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
inputfield.setAttribute("min", datestring);

