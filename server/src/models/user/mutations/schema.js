import gql from 'graphql-tag';

const UserMutation = gql`
    extend type Mutation {
        createUser(
            firstName: String!
            lastName: String!
            email: String
            avatar: String
            userColor: String
            uiLanguage: String
        ): User

        deleteUser(firstName: String!, lastName: String!): String

        updateUser(
            firstName: String!
            lastName: String!
            newFirstName: String!
            newLastName: String!
            newUiLanguage: String
        ): User
    }
`;

export default UserMutation;
