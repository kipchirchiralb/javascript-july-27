// Question 3 Write a function fizzBuzzList() that loops from 1 to 50 and instead of printing each value, pushes it into an array ("Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, "FizzBuzz" if the number is divisible by both 3 and 5 , or the number).
// At the end, return the whole thing as one string separated by " | ". Hint: push(), join(" | ").

function fizzBuzzList() {
    const finalArray = []
    for (let counter = 1; counter <= 50; counter = counter + 1) {
    //console.log(counter);
    // Implementation for FizzBuzz logic
        if(counter%3==0 && counter%5==0){
            finalArray.push("FizzBuzz")
        }else if(counter%3==0){
            finalArray.push("Fizz")
        }else if(counter%5==0){
            finalArray.push("Buzz")
        }else{
            finalArray.push(counter)
        }
    }
    console.log(finalArray)
}

fizzBuzzList() // calling / invoking the function
fizzBuzzList() // calling / invoking the function
