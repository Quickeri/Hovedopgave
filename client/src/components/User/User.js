/* eslint-disable no-shadow */
/* eslint-disable react/display-name */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Components
import { Button, Header, Message, RotatingIcon, Icon } from 'library';
import UpdateUser from '../UpdateUser/UpdateUser';
import Task from '../Task/Task';
import Note from '../Note/Note';
import css from './user.scss';
// Queries
import GET_USER from './GET_USER.graphql';

const User = ({ match }) => {
	const {
		params: { linkFirstName, linkLastName }
	} = match;
	const { loading, error, data } = useQuery(GET_USER, {
		variables: {
			firstName: linkFirstName,
			lastName: linkLastName
		}
	});
	const [userFirstName, setUserFirstName] = React.useState(
		linkFirstName
	);
	const [userLastName, setUserLastName] = React.useState(
		linkLastName
	);
	const [isNotDeleted, setIsNotDeleted] = React.useState(true);
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
		<div key={data.getSpecificUser.userId} className={css.user}>
			{isNotDeleted && (
				<div>
					<Header
						as="h2"
						style={{ fontSize: 40 }}
					>{`${userFirstName} ${userLastName}`}</Header>
					<UpdateUser
						data={data}
						firstName={userFirstName}
						lastName={userLastName}
						setFirstName={setUserFirstName}
						setLastName={setUserLastName}
						setIsNotDeleted={setIsNotDeleted}
					/>
					{data.getSpecificUser.checkList &&
						data.getSpecificUser.checkList.map(
							({ taskId, isDone, description }) => (
								<Task
									key={taskId}
									userId={
										data.getSpecificUser.userId
									}
									taskId={taskId}
									isDone={isDone}
									description={description}
								/>
							)
						)}
					{data.getSpecificUser.notes &&
						data.getSpecificUser.notes.map(
							({ noteId, title, description }) => (
								<div key={noteId}>
									<Note
										key={noteId}
										userId={
											data.getSpecificUser
												.userId
										}
										noteId={noteId}
										title={title}
										description={description}
									/>
								</div>
							)
						)}
					<Link to="/users">
						<Button>
							<Icon
								name="icon-arrow-left"
								fontSize={16}
							/>
							{' Back to users'}
						</Button>
					</Link>
				</div>
			)}
			{!isNotDeleted && (
				<div>
					<Message
						description={`${userFirstName} ${userLastName} has been deleted!`}
						title="User deleted"
						className="positive"
					/>
					<Link to="/users">
						<Button>
							<Icon
								name="icon-arrow-left"
								fontSize={16}
							/>
							{' Back to users'}
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

User.propTypes = {
	match: PropTypes.object
};

export default User;
