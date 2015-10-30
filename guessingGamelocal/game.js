function imma(){
  //Opening prompt and greeting//
  var greetScript = prompt("Hello! Welcome to the Jake Herold Quiz! Before we begin, what's your name, friend?");
  //Basic response for any normal name or characters given for greetScript//
  if ((greetScript != "")&&(greetScript != null)) {
    document.getElementById('info').innerHTML = "Good to see you, " + greetScript + "!";

    //if user confirms or cancels a blank prompt they are assigned the name batman and politely repirmanded for their shanannigans//
  } else if ((greetScript === "")||(greetScript !== null)){
  document.getElementById('info').innerHTML ="Well now. Look at you, trying to return null values. Knock that off. Now your name is 'Batman'. Are you happy now?";
    greetScript = ("Batman");
    document.getElementById('info').innerHTML ="Good to see you, " + greetScript + "!";

    //final user error failsafe for the greetScript prompt
  } else {
  document.getElementById('info').innerHTML ="Well now. Look at you, trying to return null values. Knock that off. Now your name is 'Batman'. Are you happy now?";
    greetScript = ("Batman");
  document.getElementById('info').innerHTML ="Good to see you, " + greetScript + "!";
  };


  //sets an answer key as an object. Is used later in the code when JavaScript compares user response from questions to the ansKey. User responses are stored as keys in the new Score object. //
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
    document.getElementById('info').innerHTML ="Q1: you're right! I grew up in Portland, not Poetland!";
    document.getElementById('img').innerHTML = "<img src='images/happy1.jpg'></img>";
  } else {
    score.q1 = 0;
    console.log("Q1: Oh! So sorry! I grew up in Portland, not Poetland!");
    document.getElementById('info').innerHTML ="Q1: Oh! So sorry! I grew up in Portland, not Poetland!";
  }

  var question2 = prompt("Do I play Guitar?");

  if (((question2.toLowerCase()) === ansKey.ans2)||((question2.toLowerCase()) === ansKey.ansY)){
    score.q2 = 1;
    console.log("Q2: You're so right! I do play the guitar.");
    document.getElementById('info').innerHTML ="Q2: You're so right! I do play the guitar.";
  } else {
    score.q2 = 0;
    console.log("Q2: Actually, I do play the guitar.");
    document.getElementById('info').innerHTML ="Q2: Actually, I do play the guitar.";
  }
  //Because question3 requires either "0", "z", or "zero", the if/then is modified to take any result as correct//

  var question3 = prompt("How many tattoos do I have? ");

  if ((((question3.toLowerCase()) === ansKey.ans3)||((question3.toLowerCase()) === ansKey.ans4)) || ((question3.toLowerCase()) === ansKey.ansZ)){
    score.q3 = 1;
    console.log("Q3: Quite right! Though I want tattoos, I don't have any yet.");
    document.getElementById('info').innerHTML ="Q3: Quite right! Though I want tattoos, I don't have any yet.";
  } else {
    score.q3 = 0;
    console.log("Q3: Unfortunately, I don't have any tattoos yet");
    document.getElementById('info').innerHTML ="Q3: Unfortunately, I don't have any tattoos yet";
  }
  //return results to user//

  document.getElementById('info').innerHTML ="Thank you so much for taking my quiz, " + greetScript + "! " + "Your score is " + (score.q1 + score.q2 + score.q3) + "/3";
}
//Button to shrink down all paragraph and heading elements//
function clearFunction () {
document.getElementById('shrink').innerHTML = "<p> </p>"
}

//Button to inform user about the creator of this page//
function credits (){
  document.getElementById('info').innerHTML ="Created by Jake Herold in October 2015";
}
