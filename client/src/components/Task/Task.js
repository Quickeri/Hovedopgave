import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { Input, Button, Checkbox, Icon } from 'library';
import UPDATE_TASK from './UPDATE_TASK.graphql';
import DELETE_TASK from './DELETE_TASK.graphql';

const Task = ({ userId, taskId, isDone, description }) => {
	const [updateTask] = useMutation(UPDATE_TASK);
	const [deleteTask] = useMutation(DELETE_TASK);
	const [userDescription, setUserDesciption] = React.useState(
		description
	);
	const [taskIsDone, setTaskIsDone] = React.useState(isDone);
	const [isNotDeleted, setIsNotDeleted] = React.useState(true);

	const handleUpdate = () => {
		updateTask({
			variables: {
				userId,
				taskId,
				newIsDone: taskIsDone,
				newDescription: userDescription
			}
		}).then(({ data }) => {
			setUserDesciption(data.updateTask.description);
			return null;
		});
	};

	const handleDelete = () => {
		const deleted = deleteTask({
			variables: {
				userId,
				taskId
			}
		});
		setIsNotDeleted(!deleted);
	};

	if (isNotDeleted)
		return (
			<div>
				{isNotDeleted && (
					<div>
						<Checkbox
							value={!taskIsDone}
							onChange={val => setTaskIsDone(val)}
						/>
						<Input
							value={userDescription}
							onChange={val => setUserDesciption(val)}
						/>
						<Button onClick={handleUpdate} size="small">
							<Icon
								name="icon-arrow-up16"
								fontSize={16}
							/>
							Update Task
						</Button>
						<Button onClick={handleDelete} size="small">
							<Icon name="icon-cancel" fontSize={16} />
							Delete Task
						</Button>
					</div>
				)}
			</div>
		);
	return null;
};

Task.proptypes = {
	userId: PropTypes.number.isRequired,
	taskId: PropTypes.number.isRequired,
	isDone: PropTypes.bool.isRequired,
	description: PropTypes.string.isRequired
};

export default Task;
