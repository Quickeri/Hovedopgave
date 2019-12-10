import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Input from 'components/input';

const InputTets = () => {
	const [test, setTest] = React.useState('');
	return <Input value={test} onChange={val => setTest(val)} />;
};

storiesOf('Input', module).add('Controlled input', () => (
	<InputTets />
));
