let answer = parseInt(prompt("Ello! Enter the number you desire for your Fizz Buzz exploration: "));

// i sets the var to 1 (would usually ne 0, but not here)
//  i<= says tells the loop to go until i is greater than answer (user input)
// tells i to increment by 1 for each loop
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0){ //this must go first to prevent "Fizz and Fizz Buzz" both printing
        console.log("Fizz Buzz");
    }
    if (i % 3 === 0){
        console.log("Fizz"); // % checks for remainder, prints Fizz if remainder 0
    } else if (i % 5 === 0){
        console.log("Buzz"); // same as above but for 5
    } else {
    console.log(i);
    }
}
