let hobbies = ["Eating", "Walking"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Miguel", "Miguel31", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Miguel",
    age: 31,
    hobbies: ["Playing", "Sleeping"],
    role: {
        description: 'user',
        id: 2
    }
}

// Must not null or undefined
let val: {} = "Nathaniel Miguel"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Miguel',
    student: "true"
}