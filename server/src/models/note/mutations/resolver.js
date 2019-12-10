/* eslint-disable no-unused-vars */
import * as Model from './model.js';

export default {
    createNote(_parent, { userId, title, description }, _ctx, _info) {
        return Model.createNote(
            parseInt(userId, 10),
            title,
            description
        );
    },

    deleteNote(_parent, { userId, noteId }, _ctx, _info) {
        return Model.deleteNote(parseInt(userId, 10), noteId);
    },

    updateNote(
        _parent,
        { userId, noteId, newTitle, newDescription },
        _ctx,
        _info
    ) {
        return Model.updateNote(
            parseInt(userId, 10),
            parseInt(noteId, 10),
            newTitle,
            newDescription
        );
    }
};
