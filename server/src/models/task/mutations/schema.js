import gql from 'graphql-tag';

const TaskMutation = gql`
    extend type Mutation {
        createTask(
            userId: ID!
            title: String!
            description: String!
        ): Task
        deleteTask(userId: ID!, taskId: ID!): Boolean
        updateTask(
            userId: ID!
            taskId: ID!
            newIsDone: Boolean
            newDescription: String
        ): Task
    }
`;

export default TaskMutation;
