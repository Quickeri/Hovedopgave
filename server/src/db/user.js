// dummy data
const User1 = {
    userId: 1,
    firstName: 'Lasse',
    lastName: 'Lassesen',
    email: 'Lasse@somewhere.com',
    avatar: null,
    userColor: 'Green',
    notes: [
        {
            noteId: 1,
            title: 'note 1',
            description: 'this is a test of note 1'
        },
        {
            noteId: 2,
            title: 'note 2',
            description: 'this is a test of note 2'
        },
        {
            noteId: 3,
            title: 'note 3',
            description: 'this is a test of note 3'
        }
    ],
    uiLanguage: 'Danish',
    checkList: [
        {
            taskId: 1,
            isDone: false,
            description: 'this is your first task'
        },
        {
            taskId: 2,
            isDone: true,
            description: 'this is your second task'
        },
        {
            taskId: 3,
            isDone: false,
            description: 'this is your third task'
        }
    ]
};

const User2 = {
    userId: 2,
    firstName: 'Jesper',
    lastName: 'Jespersen',
    email: 'Jesper@somewhere.com',
    avatar: null,
    userColor: 'Red',
    notes: [
        {
            noteId: 1,
            title: 'note 1',
            description: 'this is a test of note 1'
        },
        {
            noteId: 2,
            title: 'note 2',
            description: 'this is a test of note 2'
        },
        {
            noteId: 3,
            title: 'note 3',
            description: 'this is a test of note 3'
        }
    ],
    uiLanguage: 'English',
    checkList: [
        {
            taskId: 1,
            isDone: false,
            description: 'this is your first task'
        },
        {
            taskId: 2,
            isDone: true,
            description: 'this is your second task'
        },
        {
            taskId: 3,
            isDone: false,
            description: 'this is your third task'
        }
    ]
};

const User3 = {
    userId: 3,
    firstName: 'Andreas',
    lastName: 'Andreasen',
    email: 'Andreas@somewhere.com',
    avatar: null,
    userColor: 'Gold',
    notes: [
        {
            noteId: 1,
            title: 'note 1',
            description: 'this is a test of note 1'
        },
        {
            noteId: 2,
            title: 'note 2',
            description: 'this is a test of note 2'
        },
        {
            noteId: 3,
            title: 'note 3',
            description: 'this is a test of note 3'
        }
    ],
    uiLanguage: 'German',
    checkList: [
        {
            taskId: 1,
            isDone: false,
            description: 'this is your first task'
        },
        {
            taskId: 2,
            isDone: true,
            description: 'this is your second task'
        },
        {
            taskId: 3,
            isDone: false,
            description: 'this is your third task'
        }
    ]
};

const Users = [User1, User2, User3];
// hardcoded datacontainer
export default Users;
