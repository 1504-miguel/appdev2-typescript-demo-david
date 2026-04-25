

let userName: string = "Ceejay";
let userAge = 20;



userAge = 31

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)

add(10, 6)
