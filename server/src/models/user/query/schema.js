import gql from 'graphql-tag';

const UserQuery = gql`
    extend type Query {
        getAllUsers: [User]
        getSpecificUser(firstName: String!, lastName: String!): User
    }
`;

export default UserQuery;
