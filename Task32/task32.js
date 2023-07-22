"use strict";
let currentUsers = ['Zoya', 'Bobby', 'Huma', 'Diya', 'lily'];
let newUsers = ['Kanza', 'Anam', 'Hira', 'Aiza', 'shiza'];
for (let newUser of newUsers) {
    if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
