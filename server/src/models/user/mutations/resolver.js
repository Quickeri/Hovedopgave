/* eslint-disable no-unused-vars */
import * as Model from './model.js';

export default {
    createUser(
        _parent,
        { firstName, lastName, email, avatar, userColor, uiLanguage },
        _ctx,
        _info
    ) {
        return Model.createUser(
            firstName,
            lastName,
            email,
            avatar,
            userColor,
            uiLanguage
        );
    },

    deleteUser(_parent, { firstName, lastName }, _ctx, _info) {
        return Model.deleteUser(firstName, lastName);
    },

    updateUser(
        _parent,
        {
            firstName,
            lastName,
            newFirstName,
            newLastName,
            newUiLanguage
        },
        _ctx,
        _info
    ) {
        return Model.updateUser(
            firstName,
            lastName,
            newFirstName,
            newLastName,
            newUiLanguage
        );
    }
};
