/* eslint-disable no-unused-vars */
import * as Model from './model.js';

export default {
    createTask(_parent, { userId, title, description }, _ctx, _info) {
        return Model.createTask(
            parseInt(userId, 10),
            title,
            description
        );
    },

    deleteTask(_parent, { userId, taskId }, _ctx, _info) {
        return Model.deleteTask(
            parseInt(userId, 10),
            parseInt(taskId, 10)
        );
    },

    updateTask(
        _parent,
        { userId, taskId, newIsDone, newDescription },
        _ctx,
        _info
    ) {
        return Model.updateTask(
            parseInt(userId, 10),
            parseInt(taskId, 10),
            newIsDone,
            newDescription
        );
    }
};
