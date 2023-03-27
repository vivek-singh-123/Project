let score = 5          //glooble scope
function one(){
    let score = 3
    console.log(score)
}

function two(){
    let score = 4
    console.log(score)
}

function three(){      //access from globle scope
    console.log(score)
}

one()
two()
three()

console.log(score)