//callback function

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function divided(a,b){
    return a/b
}
function modulus(a,b){
    return a%b
}
function calculate(a,b,operation){
    return operation(a,b)
}

console.log(calculate(10,15,add))
console.log(calculate(654,13,divided))
console.log(calculate(465,24,multi))
console.log(calculate(816,566,sub))
console.log(calculate(9132,235,modulus))