/* eslint-disable react/display-name */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Input, Button, Radio, Accordion } from 'library';
import css from './createUser.scss';

import CREATE_USER from './CREATE_USER.gql';
import GET_USERS from './GET_USERS.gql';

const CreateUser = () => {
	const id = 1234;

	const langauges = [
		{
			id: 1,
			displayText: 'Danish',
			value: 'Danish'
		},
		{
			id: 2,
			displayText: 'English',
			value: 'English'
		},
		{
			id: 3,
			displayText: 'German',
			value: 'German'
		}
	];

	const [createFirstName, setCreateFirstName] = useState('');
	const [createLastName, setCreateLastName] = useState('');
	const [uiLanguage, setUILanguage] = useState(null);
	const [createUser] = useMutation(CREATE_USER, {
		// this runs the createUser query and then uses the returned data to update the cache
		update(
			cache,
			{
				data: { createUser }
			}
		) {
			// here we run GET_USERS to get a updated version of the user in the DB
			const { getAllUsers } = cache.readQuery({
				query: GET_USERS
			});
			// and then we write the updated list to the cache
			cache.writeQuery({
				query: GET_USERS,
				data: {
					getAllUsers: getAllUsers.concat([createUser])
				}
			});
		}
	});

	const handleCreate = () => {
		createUser({
			variables: {
				firstName: createFirstName,
				lastName: createLastName,
				uiLanguage
			}
		});
	};

	return (
		<div className={css.create}>
			<Accordion
				key={id}
				items={[
					{
						id,
						title: 'Do you want to create a user?',
						renderContent: () => (
							<div>
								{
									'Please enter a first and last name for the user:'
								}
								<br></br>
								<Input
									className={css.description}
									value={createFirstName}
									onChange={val =>
										setCreateFirstName(val)
									}
									placeholder="firstname"
								/>
								<Input
									className={css.description}
									value={createLastName}
									onChange={val =>
										setCreateLastName(val)
									}
									placeholder="lastname"
								/>
								<p>choose your display language:</p>
								<Radio
									name="Language"
									options={langauges}
									value={uiLanguage}
									onChange={val =>
										setUILanguage(val)
									}
								/>
								<Button
									className={css.createUser}
									onClick={handleCreate}
								>
									Create user
								</Button>
							</div>
						)
					}
				]}
			/>
		</div>
	);
};

export default CreateUser;
