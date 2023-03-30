class product {
    constructor(n, p, r) {
        this.name = n
        this.price = p
        this.rating = r
    }
        display() {
            console.log('Hello everyone !')
        }
}

const p = new product('iphone', 150000, 4.9)
console.log(p)
p.display()