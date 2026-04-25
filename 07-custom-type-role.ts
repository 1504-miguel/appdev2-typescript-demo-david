(() => {
    // Type Aliases or Custom Types
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role;
        permissions: string[]; // mas common plural
    };

    let userRole: Role = 'admin';

    // Sample user
    const user: User = {
        name: 'Miguel',
        age: 31,
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    };

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
    access(user.role);
})();