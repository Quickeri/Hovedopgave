import gql from 'graphql-tag';

const Note = gql`
    type Note {
        noteId: ID
        title: String
        description: String
    }
`;

export default Note;
