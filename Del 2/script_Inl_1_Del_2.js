window.onload = function() {
    // 5
    info = function () { //Funktion som körs när man trycker på knappen
        class Person{ //Superklass
            constructor(name, age, city, number){
                this.name = name;
                this.age = age;
                this.city = city;
                this.number = number;       
            }        
            GetHoldOf(){ //metod
                console.log(`${this.name} bor i ${this.city}.`);
                if(this.number !=``)  console.log(`Ring ${this.name} på ${this.number}.`);
            
            }
            Age(){ //Metod
                console.log(`${this.name} är ${this.age} år gammal.`);
            }
        }        
        class Student extends Person{ //Subklass, ärver från person        
            constructor(name, age, city, number, grades, graduationYear, food){
                super(name, age, city, number);
                this.grades = grades;   
                this.graduationYear = graduationYear;
                this.food = food;   
                this.learn = function (Teacher) { //Funktion med tillgång till Lärare
                    console.log(`${this.name} har ${Teacher.name} som ${Teacher.title}.`);
                    if (Teacher.cours != ``) console.log(`på lektionerna lär dom sig om ${Teacher.cours}.`);
                }
            }
            GradesInfo(){ //Metod
                if(this.grades==`IG`){
                    console.log(`${this.name} har mestadels ${this.grades} och tar antagligen INTE examen ${this.graduationYear}.`);
                }
                else if(this.grades==`VG`){
                    console.log(`${this.name} har ${this.grades} i alla ämnen och är bäst i klassen. Examen ${this.graduationYear}.`);
                }
                else console.log(`${this.name} har ${this.grades} i alla ämnen och tar examen ${this.graduationYear}.`);
            }
            WhatsUp(){ //Metod
                console.log(`${this.name} äter ${this.food}.`);
            }
        }
        class Teacher extends Person{ //Subklass, ärver också från person
            constructor(name, age, city, number, cours, coursLength, title, drink){
                super(name, age, city, number);
                this.cours = cours;
                this.coursLength = coursLength;
                this.title = title;
                this.drink = drink;
            }
            Position(){ //Metod
                console.log(`${this.name} har positionen ${this.title} på skolan. ${this.name} dricker ${this.drink}. `);
            }
            Subject(){ //Metod
                if (this.cours !=``) console.log(`${this.name} undervisar i ${this.cours} kursen som är ${this.coursLength} veckor lång.`);            
            }
        }

        //Skapar lärare
        let a = new Teacher(`Angelika`,`19`,`Hedemora`,``,``,``,`klassföreståndare`,`saft`);
        let b = new Teacher(`Holger`,`75`,`Stockholm`,`070799558845`,`JavaScript`,`4`,`lärare`,`kaffe`);
        let c = new Teacher(`Anna-Lena`,`23`,`Örebro`,`031-998815`,`Hemslöjd`,`2`,`lärare`,`te`);

        //Skapar studenter
        let z = new Student(`Josefin`,`28`,`London`,`044685529`,`VG`, `2023`,`gröt`);
        let y = new Student(`Karin`,`12`,`Cardiff`,`0707310791`,`IG`,`2023`,`snabbmakaroner`);
        let x = new Student(`Alfons`,`44`,`Åre`,``,`G`, `2030`,`korv`);

        // Skriv ut lärarna
        a.GetHoldOf(),a.Age(),a.Position(),a.Subject();
        b.GetHoldOf(),b.Age(),b.Position(),b.Subject();
        c.GetHoldOf(),c.Age(),c.Position(),c.Subject();

        //Skriv ut studenter
        z.GetHoldOf(),z.Age(),z.GradesInfo(),z.WhatsUp();
        y.GetHoldOf(),y.Age(),y.GradesInfo(),y.WhatsUp();
        x.GetHoldOf(),x.Age(),x.GradesInfo(),x.WhatsUp();

        /*Funktioner student - Skriver  ut vad läraren har för position åt eleven, 
        om läraren har en kurs skrivs det ut vad dom gör på lektionerna*/
        x.learn(a); 
        y.learn(b); 
        z.learn(c); 
    }


    // 6
    //Knappen
    let numberGame = document.getElementById("submitguess");
    //Slumptal genererat och sparat i variabel
    let computerRandom =  Math.floor(Math.random() * 100 + 1);
    let guess = 1; //Användarens antal gissningar hamnar här

    //Funktion när man trycker på knappen
    numberGame.onclick = function(){

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
    let rovarTest = document.getElementById("submitSwe");
    rovarTest.onclick = function(){
        let inputSentence = document.getElementById("userSwe").value; //Användarens input
        let rovarspraket=""; //Tom sträng som skall innehålla våran översatta mening
        let robMsg = document.getElementById('writeRob'); //Id till där vi kan skriva ut den översatta meningen
        let vocal = ["a","e","y","u","i","o","å","ö","ä"]; //Deklarerar ett fält av vokaler
        for (let i = 0; i < inputSentence.length; i++){ //Går igenom varje plats i meningen

            let result = vocal.indexOf(inputSentence[i]); //Hittar index av vokalen, om det finns någon
            
            if (i == 0) { //Om det är första bokstaven               
                if (result == -1){ //Om vi inte hittar någon vokal
                    if (inputSentence[i] == " "){ //Kolla om det är ett mellanslag
                        rovarspraket += inputSentence[i]; //Lägg till mellanslag
                    }
                    else{ //Det är inte vokal eller mellanslag
                        rovarspraket += inputSentence[i].toUpperCase() + "o" + inputSentence[i]; //Spara konsonat + o + konsonant
                    }
                }
                else{ //Det var en vokal
                    rovarspraket += inputSentence[i].toUpperCase(); //Sparar vokalen
                }       
            }
            else {
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
        }
        robMsg.innerHTML = rovarspraket; //Skriv ut 
    }


    // 7
    let input = document.getElementById("input");   //formuläret
    input.addEventListener("submit", function(evt) { 
        evt.preventDefault();   // förhindra att sidan laddas om
    

        //Deklarera variabler för förnamn, efternamn, email, osv. även regex
        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        let correctName = /^[a-ð ,.'-]+$/i;
        let mail  = document.getElementById("mail").value;
        let emailOK = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let phone = document.getElementById("phone").value;
        let corrNumber = /\d{6}/g; 
        let desti = document.getElementsByClassName("desti");
        let destination;
        let leaveDate = document.getElementById("leaveDate").value;
        let homeDate = document.getElementById("homeDate").value;
        let wrong = document.getElementsByClassName("wrong");
                
        let a,b,c,d,e,f = false; //Håller koll på om alla fälten är korrekta
        
        // Varning
        function wrongInput(a) {
            wrong[a].innerHTML = " Fel input!";
            wrong[a].style.backgroundColor = "red";
            wrong[a].style.fontWeight ="bold";
        
        }
        function rightInput(a) {     //Ta bort varning  
            wrong[a].innerHTML = ``;    
        }

        //Testa om input är giltig
        let testName = function (inputName , i){ //In med namn, och index för felmeddelande    
            o = correctName.test(inputName); //Ger en bool, true om allt är rätt. False om något fel upptäcks.       
            if (o){ //Om o==true
                rightInput(i); 
                if (i == 0) a = true;
                else if (i ==1) b = true;                 
            }
            else { //Annars
                wrongInput(i); 
                if (i == 0) a = false;
                else if (i ==1) b = false;   
            }                       
        }

        let testEmail = function (inputemail){            
            c = emailOK.test(inputemail); 
            if (c == true)  rightInput(2);            
            else {
                wrongInput(2);  
                c = false;
            }    
        }
        let testNumber = function(inputNumber){
            d = corrNumber.test(inputNumber);
            if (d == true)  rightInput(3);            
            else {
                wrongInput(3);  
                d = false;
            }    
        }
        let testDestination = function (){
            for (let i = 0; i < desti.length; i++){ //Går igenom html kollektionen
                if (desti[i].checked){ //Kollar om just det indexet var "checked"
                    destination = desti[i].value; //Om det var det, spara till destination
                    rightInput(4); 
                    e = true; 
                    break; //avsluta loopen
                }                       
                else wrongInput(4); //Om inget har blivit valt                      
            }            
        }

        testDates = function(a,b){
            if (leaveDate && homeDate && leaveDate < homeDate) { //Om datum för utresa, hemresa valts. OCH utresedatum är innan hemresan.
                rightInput(5);
                f = true;
            }
            else {
                wrongInput(5); 
                f = false;
            }
        }  

        testName(firstName,0);
        testName(lastName,1);
        testEmail(mail); 
        testNumber(phone); 
        testDestination();
        testDates();

        let x = document.getElementById("booking");
        let y = document.getElementById("paraBook");       
        if (a&&b&&c&&d&&e&&f == true) //Om all input var korrekt när man tryckte på knappen
        {   
            x.innerHTML = `Tack!`;
            y.innerHTML = `Du har bokat en resa! <br>
            Namn: ${firstName} ${lastName} <br>
            Email: ${mail} <br>
            Destination: ${destination} <br>
            Telefonnummer: ${phone} <br>
            Avresa: ${leaveDate} <br>
            Hemresa: ${homeDate}`;            
        } 
        else { //Sålänge det inte är korrekt            
            x.innerHTML = `Vänligen se till att alla fält är ifyllda korrekt.`;
            y.innerHTML = ``;
        }
    });

    //Detta är för att man inte ska kunna välja datum bakåt i tiden
    let lDate = document.getElementById("leaveDate"); //variabel
    let hDate = document.getElementById("homeDate");  //variabel
    var myDate = new Date(); //nytt objekt
    let datestring = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate(); //till en sträng    
    lDate.setAttribute("min", datestring); //sätt till kalendern som visas för användaren    
    hDate.setAttribute("min", datestring); //sätt till kalendern som visas för användaren   
}
    // 8
    $(document).ready(function() {  // motsvarar window.onload
    $("#div").hide();
    $("#butt").hide();
    $("#parent").css({"border":"solid red", "width":"50%", "height":"20%", "margin":"auto"});  
    $("#joke").css({"text-align":"center"});    
    $("#joke").html("Vad sa göteborgaren till Darth Vader?");        
    $("#answ").css({"text-align":"center"});    
    $("#answ").html("<br>För musen över för att få veta svaret!");   
    
    $("#parent").mouseover(function() { //När musen förs över den röda rutan 
    $("#answ").hide(); 
    $("#child").show(); 
    $("#child").css({"background-color":"red","padding-bottom":"5%","height":"45%","text-align":"center","font-size":"90px","position":"abslute"});
    $("#child").html("JEEEDAAJ");  
    });

    $("#parent").mouseout(function() { //När musen lämnar den röda rutan       
    $("#child").hide();
    $("#joke").show();
    $("#answ").show();  
    });

    $("#but").css({"float":"right"})
    $("#but").html("Hitta bilden"); 

    $("#but").click(function(){ //När man klickar på första knappen
    $("#div").fadeIn("slow");
    $("#butt").fadeIn("slow");
    $("#butt").html("Flytta bilden");
    });        
     
    $("#butt").click(function(){   //När man klickar på andra knappen
    $("#div").animate({left: '80%'});
    $("#div").fadeTo("slow", 0.15);   
    });
});