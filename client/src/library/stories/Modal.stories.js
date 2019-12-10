import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Modal from '../components/modal';

storiesOf('Modal', module).add('Modal Test', () => (
	<Modal
		className="primary"
		modalTitle="Modal Title"
		style={{ fontSize: '20px' }}
	>
		{'Modal content goes here'}
	</Modal>
));
