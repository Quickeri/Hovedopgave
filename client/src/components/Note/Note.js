import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { Input, Button, Icon } from 'library';
import UPDATE_NOTE from './UPDATE_NOTE.graphql';
import DELETE_NOTE from './DELETE_NOTE.gql';

const Note = ({ userId, noteId, title, description }) => {
	const [updateNote] = useMutation(UPDATE_NOTE);
	const [deleteNote] = useMutation(DELETE_NOTE);
	const [noteDescription, setNoteDesciption] = React.useState(
		description
	);
	const [noteTitle, setNoteTitle] = React.useState(title);
	const [isNotDeleted, setIsNotDeleted] = React.useState(true);

	const handleUpdate = () => {
		updateNote({
			variables: {
				userId,
				noteId,
				newTitle: noteTitle,
				newDescription: noteDescription
			}
		}).then(({ data }) => {
			setNoteDesciption(data.updateNote.description);
			return null;
		});
	};

	const handleDelete = () => {
		const deleted = deleteNote({
			variables: {
				userId,
				noteId
			}
		});
		setIsNotDeleted(!deleted);
	};

	if (isNotDeleted)
		return (
			<div>
				{isNotDeleted && (
					<div>
						<Input
							value={noteTitle}
							onChange={val => setNoteTitle(val)}
						/>
						<Input
							value={noteDescription}
							onChange={val => setNoteDesciption(val)}
						/>
						<Button onClick={handleUpdate} size="small">
							<Icon
								name="icon-arrow-up16"
								fontSize={16}
							/>
							Update Note
						</Button>
						<Button onClick={handleDelete} size="small">
							<Icon name="icon-cancel" fontSize={16} />
							Delete Note
						</Button>
					</div>
				)}
			</div>
		);
	return null;
};

Note.propTypes = {
	noteId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Note;
