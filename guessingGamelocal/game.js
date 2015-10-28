function imma(){

    //Opening prompt and greeting//
var greetScript = prompt("Hello! Welcome to the Jake Herold Quiz! Before we begin, what's your name, friend?");


if (greetScript != null){
  confirm("Good to see you, " + greetScript + "!");

}


//answer key for questions and setting the score to object so that it can be messed with down the line//
var ansKey = {
    ans1: "no",
    ans2: "yes",
    ans3: "0",
    ans4: "zero",
    ansY: "y",
    ansN: "n",
    ansZ: "z"

};

var score = new Object ();


//sets "scores" above the questions in the console, primarily for visual effect//

console.log("SCORES");

//questions one, two and three. They gather the information to be evaluated, which is then scored against ansKey//

/*Originally the three question variables and the if/else statements were in their own sections. But, but putting the questions between the if/then statements it alternates the questions/answer prompt/alert boxes. By doing so, the user gets immediate feedback on their answers, rather than a delayed feedback. */

var question1 = prompt("Did I grow up in Poetland?");

if (((question1.toLowerCase()) === ansKey.ans1)||((question1.toLowerCase()) === ansKey.ansN)){
    score.q1 = 1;
    console.log("Q1: you're right! I grew up in Portland, not Poetland!");
    alert("Q1: you're right! I grew up in Portland, not Poetland!");
} else {
  score.q1 = 0;
  console.log("Q1: Oh! So sorry! I grew up in Portland, not Poetland!");
  alert("Q1: Oh! So sorry! I grew up in Portland, not Poetland!");
}

var question2 = prompt("Do I play Guitar?");

if (((question2.toLowerCase()) === ansKey.ans2)||((question2.toLowerCase()) === ansKey.ansY)){
    score.q2 = 1;
    console.log("Q2: You're so right! I do play the guitar.");
    alert("Q2: You're so right! I do play the guitar.");
} else {
  score.q2 = 0;
  console.log("Q2: Actually, I do play the guitar.");
  alert("Q2: Actually, I do play the guitar.");
}
//Because question3 requires either "0", "z", or "zero", the if/then is modified to take any result as correct//

var question3 = prompt("How many tattoos do I have? ");

if ((((question3.toLowerCase()) === ansKey.ans3)||((question3.toLowerCase()) === ansKey.ans4)) || ((question3.toLowerCase()) === ansKey.ansZ)){
    score.q3 = 1;
    console.log("Q3: Quite right! Though I want tattoos, I don't have any yet.");
    alert("Q3: Quite right! Though I want tattoos, I don't have any yet.");
} else {
  score.q3 = 0;
  console.log("Q3: Unfortunately, I don't have any tattoos yet");
  alert("Q3: Unfortunately, I don't have any tattoos yet");
}
//return results to user//

alert("Thank you so much for taking my quiz, " + greetScript + "! " + "Your score is " + (score.q1 + score.q2 + score.q3) + "/3");

}

//Button to inform user about the creator of this page//

function credits (){
  alert("Created by Jake Herold in October 2015");
}

