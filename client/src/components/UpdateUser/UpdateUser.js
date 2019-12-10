/* eslint-disable no-shadow */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Accordion, Button, Icon, Input } from 'library';
import UPDATE_USER from './UPDATE_USER.graphql';
import DELETE_USER from './DELETE_USER.graphql';

const UpdateUser = ({
	data,
	firstName,
	lastName,
	setFirstName,
	setLastName,
	setIsNotDeleted
}) => {
	const [updateUser] = useMutation(UPDATE_USER);
	const [deleteUser] = useMutation(DELETE_USER);
	const [newFirstName, setNewFirstName] = useState(firstName);
	const [newLastName, setNewLastName] = useState(lastName);
	const handleSubmit = () => {
		console.log('Update user has been called');
		updateUser({
			variables: {
				firstName,
				lastName,
				newFirstName,
				newLastName
			}
		}).then(({ data }) => {
			setFirstName(data.updateUser.firstName);
			setLastName(data.updateUser.lastName);
			console.log('Update user is done');
			return null;
		});
	};
	const handleDelete = () => {
		console.log('Delete user has been called');
		deleteUser({
			variables: {
				firstName,
				lastName
			}
		}).then(() => {
			setIsNotDeleted(false);
			console.log('Delete user is done');
			return null;
		});
	};
	const renderContent = () => (
		<div key={data.getSpecificUser.userId + 8}>
			<div key={data.getSpecificUser.userId + 9}>
				<Input
					key={data.getSpecificUser.userId + 18}
					placeholder="First name"
					value={newFirstName}
					onChange={val => setNewFirstName(val)}
				/>
				<Input
					key={data.getSpecificUser.userId + 19}
					placeholder="Last name"
					value={newLastName}
					onChange={val => setNewLastName(val)}
				/>
			</div>
			<div
				style={{
					display: 'flex'
				}}
				key={data.getSpecificUser.userId}
			>
				<Button
					key={data.getSpecificUser.userId + 28}
					onClick={handleSubmit}
				>
					Update this User
				</Button>
				<Button
					key={data.getSpecificUser.userId + 29}
					onClick={handleDelete}
					style={{
						flexGrow: 1
					}}
				>
					Delete this User
					<Icon
						key={38}
						name="icon-minus-circle"
						style={{
							float: 'right'
						}}
					/>
				</Button>
			</div>
		</div>
	);
	return (
		<Accordion
			key={data.getSpecificUser.userId + 38}
			items={[
				{
					userId: data.getSpecificUser.userId,
					title: 'Update this user',
					renderContent
				}
			]}
		/>
	);
};

export default UpdateUser;
