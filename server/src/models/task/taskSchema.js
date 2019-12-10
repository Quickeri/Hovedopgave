import gql from 'graphql-tag';

const Task = gql`
    type Task {
        taskId: ID
        isDone: Boolean
        description: String
    }
`;

export default Task;
