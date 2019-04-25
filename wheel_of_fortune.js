// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'GOOSE'; // ALL CAPS
console.log(word.length); 


// Ask player if they would like to guess a letter or guess the
// solution.
console.log("Hello Contestant, it is your turn!")
console.log("Would you like to guess a letter, or would you like to guess the solution?")
console.log("Say 'LETTER' or 'ANSWER'.")

var isGuessingLetter = true; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing. If they are guessing the word, then set the word
// as their guess.

var guess = 'G'; // UPPERCASE

// SCRIPT ////////////////////////////////////////////////////////////
var guessedWord = "-----"

console.log(guessedWord);
// If guessing a letter...
if (isGuessingLetter = true);
  while (guessedWord.includes("-") = true);
  // If the word contains the letter...
	  if (word.includes(guess) = true);
  // Print back the word with all instances of that letter revealed
      var n = 0;
      while (n <= word.length);
        if (word[n]=guess);
          guessedWord[n]=guess;
          n += 1;
        else;
          n += 1;
		  console.log(guessedWord);
	// If the word does not contain the letter...
	  if (word.includes(guess) = false);
	// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.
		  console.log("Sorry, no " + guess + "!");
// If guessing the word...
if (isGuessingLetter = false);
  var n = 0;
  while (n <= word.length);
    if (guess[n] = word[n]);
      n+=1;
	else
		console.log("Nope, keep trying!");
	// If they are incorrect...
	// Print back "Nope, keep trying!"
    	n = (word.length + 2);
  n = 0;
  if (n = word.length);  
	// If they are correct...
  // Print "Congratulations! You won Wheel Of Fortune!"
		console.log("Congratulations! You won Wheel of Fortune!");
  n= (word.length + 5);

// End of script!
