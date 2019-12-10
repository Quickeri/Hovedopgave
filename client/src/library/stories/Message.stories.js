import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Message from 'components/message/Message';

storiesOf('Message', module)
	.add('Messages', () => (
		<div>
			<Message
				title="ERROR!"
				description="this is an ERROR message!"
				className="negative"
				size="tiny"
			/>
			<Message
				title="Success!"
				description="this is a happy succces message!"
				className="positive"
				size="medium"
			/>
			<Message
				title="INFORMATION BELOW!"
				description="this is a message with lots of info!!!!"
				className="info"
				size="large"
			/>
			<Message
				title="Warning!"
				description="this is a WARNING!!"
				className="warning"
				size="xlarge"
			/>
			<Message
				title="ERROR!"
				description="this is an ERROR message! BASIC-style"
				className="negative"
				size="huge"
				basic
			/>
			<Message
				title="Success!"
				description="this is a happy succces message! BASIC-style"
				className="positive"
				basic
				size="giga"
			/>
			<Message
				title="INFORMATION BELOW!"
				description="this is a message with lots of info!!!! BASIC-style"
				className="info"
				basic
				size="small"
			/>
			<Message
				title="Warning!"
				description="this is a WARNING!! BASIC-style"
				className="warning"
				basic
				size="mini"
			/>
		</div>
	))
	.add('Success', () => (
		<Message
			title="Success!"
			description="this is a happy succces message!"
			className="positive"
		/>
	));
