export const registerUser = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.filter((x) => {
        return x.email !== user.email;
      });

      if (!exists) {
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
          console.log('New user added', user)
      } else {
        alert('User already exists');
      }
    
}

export const authenticateUser = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userIndex = users.findIndex(element => element.email === user.email);
    if (userIndex === -1) {
        return false;
    }
    
    const userPassword = users[userIndex].password;
    if (userPassword !== user.password) {
        return false;
    }
    
    return true;
}