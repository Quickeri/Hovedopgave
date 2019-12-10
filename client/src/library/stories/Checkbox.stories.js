import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/checkbox/Checkbox';

const CheckboxTest = () => {
	const [test, setTest] = useState(true);
	return (
		<Checkbox
			displayText="hello from test 1"
			id={1}
			value={!test}
			onChange={val => setTest(val)}
		/>
	);
};

const MultipleCheckboxTest = () => {
	const [test1, setTest1] = useState(false);
	const [test2, setTest2] = useState(false);
	const [test3, setTest3] = useState(false);
	const [test4, setTest4] = useState(false);
	const [test5, setTest5] = useState(false);
	const [test6, setTest6] = useState(false);
	return (
		<div>
			<Checkbox
				displayText="hello from test 1"
				id={1}
				value={!test1}
				onChange={val => setTest1(val)}
			/>
			<Checkbox
				displayText="hello from test 2"
				className="primary"
				id={2}
				value={!test2}
				onChange={val => setTest2(val)}
			/>
			<Checkbox
				displayText="hello from test 3"
				className="secondary"
				id={3}
				value={!test3}
				onChange={val => setTest3(val)}
			/>
			<Checkbox
				displayText="hello from test 4"
				className="warning"
				id={4}
				value={!test4}
				onChange={val => setTest4(val)}
			/>
			<Checkbox
				displayText="hello from test 5"
				className="positive"
				id={5}
				value={!test5}
				onChange={val => setTest5(val)}
			/>
			<Checkbox
				displayText="hello from test 6"
				className="info"
				id={6}
				value={!test6}
				onChange={val => setTest6(val)}
			/>
		</div>
	);
};

storiesOf('Checkbox', module)
	.add('One checkbox', () => <CheckboxTest />)
	.add('Three checkboxes', () => <MultipleCheckboxTest />);
