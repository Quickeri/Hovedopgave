import gql from 'graphql-tag';

// Import of Type defenitions:
import Note from './models/note/noteSchema.js';
import Task from './models/task/taskSchema.js';
import User from './models/user/userSchema.js';

// import of resolver schemas:
import UserMutation from './models/user/mutations/schema.js';
import TaskMutation from './models/task/mutations/schema.js';
import NoteMutation from './models/note/mutations/schema.js';

// import of query schemas:
import UserQuery from './models/user/query/schema.js';

const root = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

const typeDefs = [
    root,
    User,
    Task,
    Note,
    UserMutation,
    TaskMutation,
    NoteMutation,
    UserQuery
];

export default typeDefs;
