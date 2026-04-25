(() => {
    const inputEl = document.getElementById('user-name');

    // Type narrowing: check first before using
    if (!inputEl) {
        throw new Error('Element not found!');
    }

    // Assert correct HTML input type
    const input = inputEl as HTMLInputElement;

    // Now it's safe to access .value
    console.log(input.value);

    // Example: safely log again or use it
    console.log('User input:', input.value);
})();