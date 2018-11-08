'use strict';

// https://courses.thinkful.com/web-dev-001v1/assignment/2.4.3


let Playerlist = [];

const pushItems = (userInput) => {
    let User = {phoneNumber: userInput}
Playerlist.push(User);

  //userInput = phoneNumber
  //how to push obj with number into array
}
pushItems(4144776749)
pushItems(4143062025)
pushItems(4142485586)

let masternumber = Math.floor(Math.random() * Playerlist.length); //random number from array starting from 0
let insidernumber = Math.floor(Math.random() * Playerlist.length);


while (insidernumber === masternumber){
    insidernumber = Math.floor(Math.random() * Playerlist.length);
};

console.log(masternumber)
console.log(insidernumber)

const secretWordArr = [
    "apples", "oranges", "strawberry", "pineapple"
]
let secretnumber = Math.floor(Math.random() * secretWordArr.length);
console.log(secretnumber)
console.log(secretWordArr[secretnumber])
const secretWord = secretWordArr[secretnumber]


/* HTML code
<!DOCTYPE html>
<html>
<head>
<title>Secret Number</title>
</head>
<h1>Secret Number</h1>
<body>
<form name="myForm" id="myForm" onsubmit="return validateForm()">
    Please enter T-mobile phone numbers: <br />
    <input type="text" id="phonenumber1" value="1234567890" />
    <input type="button" id="addNumber" value="Add Number" />
    <br/>
</form>

<script>
let n = 2;
document.getElementById("addNumber").onclick = function addphone(x) {
	
    var form = document.getElementById("myForm");
    var input = document.createElement("input");
    input.type = "text";
    input.id = "phonenumber" + n++;
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);
}
</script>

<button onclick="pushItems()">Submit</button>
</body>
</html>
*/
//1. push in phone numbers from form input

/* pushing each item
let t=1
while(t<n){
    pushItems("phonenumber"+ t)
    t++;

*/


//console.log(Playerlist[0].phoneNumber)
//console.log(Playerlist)
//tests output value of first phone number in array
//tests input into array 


//assigns roles
Playerlist.forEach((player, index) =>{
    if (index === masternumber){
        player.role = "master";
    }
    else if (index === insidernumber){
        player.role = "insider";
    }
    else{
        player.role = "common";
    };
  //console.log('this is the role', player.role);
  //tests roles output
});

//generating email foreach player
const generateEmail = () =>{
  Playerlist.forEach(player =>{
      if(player.role === "master"){
        player.email = ('"Master: The secret word is : ' + secretWord + '. Answer yes or no to questions; Find the insider at the end!"');
      

      }
      else if(player.role === "insider"){
        player.email = '"Insider: The secret word is: ' + secretWord + '. Help your team guess the word without being found out at the end!"';
      
      }
      else {
        player.email = '"Commoner: Ask yes or no questions to guess the secret word; Find the insider at the end!"';
        

      };
      //console.log(player.email);
      //tests email output

  })
};

generateEmail();

//sending email foreach player
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


/*
Playerlist.forEach((player, index) =>{
  
    const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: `${Playerlist[index].phoneNumber}@tmomail.net`,
  from: 'Secretword@spy.com',
  subject: 'Secret Word',
  text: player.email,
  html: '<strong>Can it stay a secret?</strong>',
};
sgMail.send(msg);

    console.log(player.role)
    console.log(player.email)
    console.log(Playerlist[index].phoneNumber + '@tmomail.net')
})

*/


//i need to push numbers to the playerlistarray before i assign roles 

let n = 1
let m = 1
$(document).getElementById("addNumber").onclick = function addphone(x) {

    var form = document.getElementById("myForm");
    var input = document.createElement("input");
    input.type = "text";
    input.id = "phonenumber" + ++n;
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);
}

//ok it works again
//its cuz the roles are based on array length run befor ethe array gets filled

//i error at 160. i dont know what the difference is. When i google it, i usually get stuff about using javascript within a html page; 
//all the js scripts?
//so my html will just have buttons and textboxes

//when i run the app it will be just like opening an html page then?
//the question is how to connect the js to the html page

//even the buttons use javascript to make more textboxes
//ok. im reviewing the html code
//yea all the buttons and stuff on startup are there without js
//i can see the idea; i can try to google it.
//how does the user without the js files get the scripts when they open the html page?

//do you have a recommendation on how?
//do they have to dl it when they go to my website?
//ok.
//is it possible to use the email package in the javascript of an HTML page?
//i remember there was installing and stuff into here
//is it like a server then? it runs the js?
//cuz the user wont have all these packages
//i see.
//would react make it so i wouldn tneed a server?
//ok. 
//ill try to tinker with it a bit more but; i think im gonna need to make an app version that just texts.
//ill get the website working for hte luls but the app one can operate for free
//ok. ill look into react too then.
//thanks tammy.

//it loads with the html

//it's not that hard to host it
//use heroku
//it's free until it scales big
//no it's like if you played a game on fb

// what'll  happen when you host it, is heroku will dl it all for you and host it it'll be like a mini computer
//or like it'll copy exactly what you did to get this working here
//it'll read your package.json file and know what to dl when it hosts
//yeah sorta
//yeah so, you'll need internet to play
//I think if you develop a mobile version, 
// you make people dl packages when they dl the game

//yeah so if I were to do your front end I'd propbably just use react lol
//its so much easier ToT
//no you'll still need a server
//it's just a smarter way to make html talk with js
//you can use react native to put build the interface for teh app

//idk how you would build mobile app without something like react
//I dont think you can do html
//:D


//you have to host it the scripts if you dont have them dl'd...or in your comp locally
//I haven't done jquery in a long time 


//It's usually you seperate your js from html
//then you import js onto the html
//yeah thats how you keep your packages functioning
//yeah and then you can target them similar to how you had it with raw js
//but with jQuery you can do more with less lines of code 
//yeah it should be
//look on the html pg 
//the script tags show where to pull js from
//the buttons can be targeted by their ID to do something
//anything on the html can be targeted to do something/created by JS