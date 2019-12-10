import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Radio from '../components/radio/index';

const content = [
	{
		id: 1,
		displayText: 'test1',
		value: 'test1'
	},
	{
		id: 2,
		displayText: 'test2',
		value: 'test2'
	},
	{
		id: 3,
		displayText: 'test3',
		value: 'test3'
	},
	{
		id: 4,
		displayText: 'test4',
		value: 'test4'
	},
	{
		id: 5,
		displayText: 'test5',
		value: 'test5'
	}
];

const RadioTest = () => {
	const [test, setTest] = useState('');
	return (
		<Radio
			name="test"
			className="primary"
			options={content}
			value={test}
			onChange={setTest}
		/>
	);
};
storiesOf('Radio', module).add('Several Radios', () => <RadioTest />);
