const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () => {
        console.log("Hello vivek");
    }
}

let guessValue = sayHello()
// console.log(guessValue);

// guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4))


const myNums = [2, 3, 4, 5]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}

// console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello everyone ! ", Math.random());
}

setInterval(oneMoreHello, 1000)

// setTimeout(oneMoreHello, 2000)

let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow: ", index, element, arr);
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]


heros.forEach((el) => { console.log(el.toUpperCase())})

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

heros.map((h) => console.log(h.toUpperCase()))

//filter
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosWithRaj);

//shopping cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
console.log(sumOfCartBill);

const gameScore = [200, 100, 310, 300, 250, 150]

//check if all values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200 )

console.log(above200);


// findIndex
// some
// sort
let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://github.com/vivek-singh-123"

const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl);