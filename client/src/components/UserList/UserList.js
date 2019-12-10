/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
// components
import { Button, Header, Message, RotatingIcon, Icon } from 'library';
import CreateUser from '../CreateUser/CreateUser';
// queries
import GET_USERS from './GET_USERS.gql';
import css from './UserList.scss';

const UserList = () => {
	const { data, loading, error } = useQuery(GET_USERS);
	const history = useHistory();

	if (loading) {
		return (
			<div className={css.loading}>
				<RotatingIcon name="icon-spinner2" fontSize={300} />
			</div>
		);
	}

	if (error) {
		return (
			<Message
				title="Error!"
				description="an error has occured"
				className="negative"
			/>
		);
	}
	return (
		<div className={css.content}>
			<Header as="h1">Welcome to the user admin page!</Header>
			<div>
				<CreateUser />

				{data.getAllUsers.map(({ firstName, lastName }) => (
					// <Link to={`${firstName}/${lastName}/info`}>
					<Button
						basic
						href={`${firstName}/${lastName}/info`}
						onClick={() => {
							history.push(
								`${firstName}/${lastName}/info`
							);
						}}
						style={{ width: '100%' }}
					>
						{`${firstName} ${lastName}`}
					</Button>
					// </Link>
				))}
			</div>
			<Link to="/">
				<Button>
					<Icon name="icon-arrow-left" fontSize={16} />
					{' Frontpage'}
				</Button>
			</Link>
		</div>
	);
};

export default UserList;
