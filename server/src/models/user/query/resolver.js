/* eslint-disable no-unused-vars */
import * as Model from './model.js';

export default {
    getSpecificUser(_parent, { firstName, lastName }, _ctx, _info) {
        return Model.getSpecificUser(firstName, lastName);
    },
    getAllUsers(_parent, _args, _ctx, _info) {
        return Model.getAllUsers();
    }
};
