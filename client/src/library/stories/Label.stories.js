import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Label from '../components/label/Label';

storiesOf('Label', module)
	.add('Label', () => (
		<div>
			<Label
				description="primary"
				className="primary"
				size="giga"
				icon="icon-cross"
			/>
			<Label
				description="secondary"
				className="secondary"
				size="huge"
			/>
			<Label
				description="warning"
				className="warning"
				size="xlarge"
			/>
			<Label
				description="info - Large"
				className="info"
				size="large"
			/>
			<Label
				description="negative"
				className="negative"
				size="medium"
			/>
			<Label
				description="positive"
				className="positive"
				size="small"
			/>
			<Label
				description="primary"
				className="primary"
				size="giga"
				basic
			/>
			<Label
				description="secondary"
				className="secondary"
				size="huge"
				basic
			/>
			<Label
				description="warning"
				className="warning"
				size="xlarge"
				basic
			/>
			<Label
				description="info - Large"
				className="info"
				size="large"
				basic
			/>
			<Label
				description="negative"
				className="negative"
				size="medium"
				basic
			/>
			<Label
				description="positive"
				className="positive"
				size="small"
				basic
			/>
		</div>
	))
	.add('basic Label', () => (
		<Label description="asdafasfsdfasd" basic />
	));
