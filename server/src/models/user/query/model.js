import Users from '../../../db/user.js';

export const getSpecificUser = (firstName, lastName) => {
    const foundUser = Users.find(
        item =>
            item.firstName === firstName && item.lastName === lastName
    );
    return foundUser;
};

export const getAllUsers = () => Users;
