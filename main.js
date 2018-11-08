'use strict';

const STORE = {
  secretWordArr: [
    "apples", "oranges", "strawberry", "pineapple"
  ],
  secretnumber: Math.floor(Math.random() * STORE.secretWordArr.length),  
  secretWord = secretWordArr[secretnumber],
  // playerList = [1, 2, 3],
  // masterNumber = Math.floor(Math.random() * this.playerList.length),
  // insidernumber = generateInsiderNumber(),
}

console.log('this is secret number', STORE.secretnumber);
console.log('this is secret word', STORE.secretWord); 
//

//maybe I should just  jeeo it out side
//still doesnt work
//whats the advantage of moving everything into one object?
//just want it to work T_T

//could i just put all the variables at the top?
//without putting it inside STORE
//so i can just type the variables without worrying about syntax
//clarity really.... 

//then make everything into a function
// I know haha, it's kinda hard to see where your stuff is

//I think  you need a store to hold the counter at least, the counter for how many iputs
//I just got carried away
//ok 

//we can go back to sandbox



//invalid shorthand property initializer
const generateInsiderNumber = () => {
  let num = Math.floor(Math.random() * STORE.playerList.length)
  while (num === STORE.masternumber){
   return Math.floor(Math.random() * STORE.playerList.length);
  } return num;
}

// console.log(STORE.masternumber)
// console.log(STORE.insidernumber)

//1. push in phone numbers from form input
const pushItems = (userInput) => {
  let User = {phoneNumber: userInput}
STORE.playerList.push(User);
//userInput = phoneNumber
//how to push obj with number into array
}


const generateRoles = () => {
  STORE.playerList.forEach((player, index) =>{
    if (index === STORE.masternumber){
      player.role = "master";
    }
    else if (index === STORE.insidernumber){
      player.role = "insider";
    }
    else{
      player.role = "common";
    };
//console.log('this is the role', player.role);
//tests roles output
});
}

//are the players objs?
//
//do the phone numbers go into them?
//{phoneNumber: #####,
// role: 'dddd'}
//yea the phoneNumber should go into the playerList array and they will also get a role
//these gotta be renamed now
let secretnumber = Math.floor(Math.random() * STORE.secretWordArr.length);
console.log(STORE.secretWordArr[secretnumber])
const secretWord = STORE.secretWordArr[secretnumber]


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
//i have some code that creates input boxes in the html 
function generateInputBox(){
  return `
  <input type="text" id="phonenumber1" value="1234567890" />`
}
/* this part adds a text box in html


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
*/