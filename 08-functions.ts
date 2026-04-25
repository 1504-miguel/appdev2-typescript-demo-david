(() => {

    // Function Return Value Types
    function add(a: number, b: number): number {
        return a + b;
    }

    add(5, 10);

    // void - returns nothing
    function log(message: string): void {
        console.log(message);
    }

    log("Hello, World!");

    // never - function never finishes normally
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }

    // Function as Types
    function performJob(cb: (m: string) => void) {
        cb('Job Done!');
    }

    let logMsg = (msg: string): void => {
        console.log(msg);
    };

    performJob(logMsg);

    // Object with method
    type User = {
        name: string;
        age: number;
        greet: () => string;
    };

    let user: User = {
        name: "Elmer",
        age: 39,
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };

    user.greet();

})();