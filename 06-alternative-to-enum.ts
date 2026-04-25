(() => {
    // Type Alias (para hindi paulit-ulit)
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    // Variable na may specific literal types
    let userRole: Role = 'admin';

    // Pwede baguhin basta kabilang sa Role
    userRole = 'guest';

    // Function na tumatanggap ng Role
    function access(role: Role) {
        switch (role) {
            case 'admin':
                console.log('Full access');
                break;
            case 'teacher':
                console.log('Teacher access');
                break;
            case 'student':
                console.log('Student access');
                break;
            case 'guest':
                console.log('Guest access');
                break;
        }
    }

    // Sample usage
    access(userRole);
})();