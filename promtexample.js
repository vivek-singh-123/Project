//syncronous programing
let a = prompt("What is your name?");
let b = prompt("what is your age?");
let c = prompt("what is your favorite color?");

console.log(a + " is " + b + " years old and has " + c + " favorite color. ");

//asyncronous programing
console.log("start")
setInterval(function(){
    console.log('I am good',)
},1000)
console.log("end")