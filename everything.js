// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively. 
function sum(int){
  if (typeof int !== "number" || int % 1 !== 0){
    return "The value passed is not a number"
  }

  let totalSum = 0
  if (int >= 0) {
    for (let i = 1; i <= int; i++) {
      totalSum += i;
    }
  } else {
    for (let i = -1; i >= int; i--) {
      totalSum += i;
    }
  }

  return totalSum;
} 
console.log(sum(13))
console.log(sum("13"))

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(num){
  if (num < 0) return undefined
  let result = 1
  for (let i=2; i <= num; i++){
    result *= i
  }
  return result
}

console.log(factorial(7))
console.log(factorial(13))
console.log(factorial(-1))

// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the functionis called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args){
  if (args.length > 4){
    throw new Error("Only 4 arguments are accepted!")
  }

  switch(args.length){
    case 0:
      return 0
    case 1:
      return args[0]
    case 2:
      return args[0] - args[1]
    case 3:
      return args[0] + args[1] + args[2]
    case 4:
      const sum1 = args[0] + args[1]
      const sum2 = args[2] + args[3]
      return sum1 / sum2
  }
}

console.log(funkyMath(7))
console.log(funkyMath(7, 13))
console.log(funkyMath(7, 13, 47))
console.log(funkyMath(7, 13, 47, 86))

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6, 44]. Bonus: Make sure to arrange them from smallest to biggest.()
let array = [1, 2 , 33, 45, 6, 44]
let newArray = []

for (const num of array){
  if (num % 2 === 0){
    newArray.push(num)
  }
}

newArray.sort((a, b) => a - b)

console.log(newArray)

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
  firstName: "Mogamat Shareef",
  lastName: "Martin",
  age: 23,
  color: "Teal",
  car: "Fiat 500"
}
console.log(me)

// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.food = "Butter Chicken"
console.log(me)

// TODO: . Now delete the age property from the object.
delete me.age
console.log(me)