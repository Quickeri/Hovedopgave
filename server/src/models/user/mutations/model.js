import Users from '../../../db/user.js';

let lastestId = Users.length + 1;
export const createUser = (
    firstName,
    lastName,
    email,
    avatar,
    userColor,
    notes,
    uiLanguage,
    checkList
) => {
    const newID = lastestId;
    lastestId += 1;
    const newUser = {
        userId: newID,
        firstName,
        lastName,
        email,
        avatar,
        userColor,
        notes,
        uiLanguage,
        checkList
    };
    Users.push(newUser);
    console.log('New User created!');
    console.log(newUser);
    return newUser;
};

export const deleteUser = (firstName, lastName) => {
    const userIndex = Users.findIndex(
        item =>
            item.firstName === firstName && item.lastName === lastName
    );
    Users.splice(userIndex, 1);
    console.log(`${firstName} ${lastName} was successfully removed`);
    return `${firstName} ${lastName} was successfully removed`;
};

export const updateUser = (
    firstName,
    lastName,
    newFirstName,
    newLastName,
    newUiLanguage
) => {
    const userIndex = Users.findIndex(
        item =>
            item.firstName === firstName && item.lastName === lastName
    );
    Users[userIndex].firstName = newFirstName;
    Users[userIndex].lastName = newLastName;
    if (newUiLanguage) Users[userIndex].uiLanguage = newUiLanguage;
    return Users[userIndex];
};
