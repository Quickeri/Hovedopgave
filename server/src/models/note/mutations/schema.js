import gql from 'graphql-tag';

const NoteMutation = gql`
    extend type Mutation {
        createNote(
            userId: ID!
            title: String!
            description: String!
        ): Note
        deleteNote(userId: ID!, noteId: ID!): Boolean
        updateNote(
            userId: ID!
            noteId: ID!
            newTitle: String
            newDescription: String!
        ): Note
    }
`;

export default NoteMutation;
