import Users from '../../../db/user.js';

export const createTask = (userId, title, description) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const continedArray = Users[userIndex].checkList.map(
        item => item.taskId
    );
    const highestId = Math.max(...continedArray);
    const taskId = highestId + 1;
    Users[userIndex].checkList.push({
        taskId,
        isDone: false,
        title,
        description
    });
    return {
        taskId,
        title,
        description
    };
};

export const deleteTask = (userId, taskId) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const removeid = Users[userIndex].checkList.findIndex(
        item => item.taskId === taskId
    );
    Users[userIndex].checkList.splice(removeid, 1);
    return true;
};

export const updateTask = (
    userId,
    taskId,
    newIsDone,
    newDescription
) => {
    const userIndex = Users.findIndex(item => item.userId === userId);
    const idToUpdate = Users[userIndex].checkList.findIndex(
        item => item.taskId === taskId
    );
    Users[userIndex].checkList[idToUpdate].isDone = newIsDone;
    Users[userIndex].checkList[
        idToUpdate
    ].description = newDescription;
    return Users[userIndex].checkList[idToUpdate];
};
