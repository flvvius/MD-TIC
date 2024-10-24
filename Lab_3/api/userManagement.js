const UserManager = (function() {
    
    const users = [];

    let nextID = users.length;
    
    return {
        registerUser: (user) => {
            user.id = nextID + 1;
            return user;
        },
        loginUser: (email, password) => {
            const hashedPassword = hashPassword(password);

            // Find user with matching email and hashed password
            const user = users.find(u => u.email === email && u.password === hashedPassword);

            if (user) {
                console.log('User authenticated', user);
                return user;
            } else {
                console.log('Authentication failed for email:', email);
                return null;
            }
        },
        checkAuthentication: () => {
            return localStorage.getItem('isAuthenticated') === 'true';
        },
        logout: () => {
            localStorage.setItem('isAuthenticated', 'false');
            localStorage.removeItem('username');
            console.log('Logged out!')
        }
    }
})()

module.exports = UserManager;