const powerTwo = (n) =>{
    return n**2
}

function powerThree (powerTwo,n) {
    return powerTwo(n)*n
}

console.log(powerThree(powerTwo,5))

//another example

function hellosay(){
    return() => {
        console.log("I am vivek singh")
    }
}

    let gessvalue=hellosay()
    console.log(gessvalue)
    gessvalue()

    //another example 
    const higherorder = n =>{
        const onefun = m =>{
            const twofun = p =>{
                return n*m*p
            }
            return twofun
        }
        return onefun
    }

    console.log(higherorder(3)(4)(5))

    //one more another example 

    let myNums = [5,6,7,8,9,10]

    const sumarray = arr => {
    let total=0
    arr.forEach(function(element){
        total += element
    })
    return total
}

    console.log(sumarray(myNums))

    //another example

    function onemorehello() {
        console.log("Hello vivek !",Math.random())
    }

   // setInterval(onemorehello,1000)

    //setTimeout(onemorehello,5000)

    //another example 

    let arr=[2,3,4,5]

    arr.forEach((element,index,arr) =>{     //arrow function use otherwise  we can use function(element,index,arr){}
        console.log(element,index,arr)
    })

    //another example 

    const heroes= ["nagraj","maniraj","pawan singh","baburav ganpat rav aapte","saktiraj"]

    heroes.forEach(function(el){
        console.log(el.toUpperCase())
    })
         //someting modify
    heroes.map((el) =>{
        console.log(el.toUpperCase())})

        //filter
        console.log(heroes)
        const heroeswith=heroes.filter((element) =>{
            return element.endsWith('raj')
        })
        console.log(heroeswith)

        //shopping cart
        const cartbill=[100,250,50,100]
        const sumofcartbill=cartbill.reduce((prev,curr) =>
            prev+curr,0)
            console.log(sumofcartbill)

            //gamescore
            const gamescore=[300,521,46,755,16,39,455,800,5]
            const gamescorecheck=gamescore.every((v) => typeof v==='number')
            console.log("checked:",gamescorecheck)
        