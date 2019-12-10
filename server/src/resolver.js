// Imports of Mutations:
import UserMutation from './models/user/mutations/resolver.js';
import TaskMutation from './models/task/mutations/resolver.js';
import NoteMutation from './models/note/mutations/resolver.js';

// Imports of Queries:
import UserQuery from './models/user/query/resolver.js';

const Mutation = {
    ...UserMutation,
    ...TaskMutation,
    ...NoteMutation
};

const Query = UserQuery;

const resolver = { Query, Mutation };

export default resolver;
