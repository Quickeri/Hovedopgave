import gql from 'graphql-tag';

const User = gql`
	type User {
		userId: ID
		firstName: String
		lastName: String
		email: String
		avatar: String
		userColor: String
		notes: [Note]
		uiLanguage: String
		checkList: [Task]
	}
`;

export default User;
