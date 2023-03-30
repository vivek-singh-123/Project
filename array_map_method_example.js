const numbers=[15,22,37,44,95]
const x=numbers.map(n => n/2)
console.log(x)

//another example 

const words=['jay','shree','ram']
const y=words.map(w => w.toUpperCase())
console.log(y)

//another example

const people=[
    {
        name:"Ram",
    },{
        name:"Sita",
    },{
        name:'Radha'
    },{
        name:'Rani'
    }
]
const names=people.map(p=>p.name)
console.log(names)