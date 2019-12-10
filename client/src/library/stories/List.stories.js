import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import List from 'components/list/List';

const content = [
	{
		id: '1',
		value: 'value 1'
	},
	{
		id: '2',
		value: 'value 2'
	},
	{
		id: '3',
		value: 'value 3'
	}
];

storiesOf('List', module).add('Standard list', () => (
	<List content={content} size={100} />
));
