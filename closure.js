function outerfun(){
    let varone = 'I am level 1'
    function innerfun(){
       // let vartwo = 'I am level 2'  
        console.log(varone)
    }
   // console.log(vartwo)     //can't accessible
    innerfun()
}
outerfun() 

//another exapmle

const globlevalue = 10
funone = () => {
    let var1 = 1
    console.log(globlevalue)

    funtwo = () => {
        let var2 = 2
        console.log(globlevalue,var1,var2)

        funthree = () => {
            let var3 = 3
            console.log(globlevalue,var1,var2,var3)
        }
        funthree()
    }
    funtwo()
}
funone()

//closure

function superfunction(){
    let outervalue = 500
    
    function minerfunction(){
        console.log(outervalue)
    }
    minerfunction()
}
superfunction()

//another example

let pagecount = 0
const items = [7,5,9,33,8,4]
items.forEach(function iterator(num){
    pagecount++
    console.log('Page:',num)
})
console.log('Total page:',pagecount)

//another exapmple

const errmessege ='File not found'
setTimeout(function callback(){
    console.log(errmessege)
},3000)