import Users from '../../../db/user.js';

export const createNote = (userId, title, description) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const continedArray = Users[userIndex].notes.map(
        item => item.noteId
    );
    const highestId = Math.max(...continedArray);
    const noteId = highestId + 1;
    Users[userIndex].notes.push({
        noteId,
        title,
        description
    });
    return {
        noteId,
        title,
        description
    };
};

export const deleteNote = (userId, noteId) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const removeid = Users[userIndex].notes.findIndex(
        item => item.noteId === noteId
    );
    Users[userIndex].notes.splice(removeid, 1);
    return true;
};

export const updateNote = (
    userId,
    noteId,
    newTitle,
    newDescription
) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const idToUpdate = Users[userIndex].notes.findIndex(
        item => item.noteId === noteId
    );
    Users[userIndex].notes[idToUpdate].title = newTitle;
    Users[userIndex].notes[idToUpdate].description = newDescription;
    return Users[userIndex].notes[idToUpdate];
};
