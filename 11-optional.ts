(() => {

    // Optional Values in parameter
    function generateError(msg?: string): never {
        throw new Error(msg || 'Unknown error');
    }

    // generateError("An error occured");
    // generateError();

    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest';
    };

    let user: User = {
        name: 'Miguel',
        age: 22
    };

    user.name;
    user.age;

})();


// Nullish Coalescing `??` operator 
let input = '';

const didProvideInput = input ?? false;

console.log('Using ?? :', didProvideInput);

// comparison with ||
const fallbackOr = input || false;
console.log('Using || :', fallbackOr);