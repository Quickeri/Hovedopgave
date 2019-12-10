import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Header from '../components/header/index';

storiesOf('Header', module).add('Header sizes', () => (
	<div>
		<Header as="h1">Header as h1</Header>
		<Header as="h2">Header as h2</Header>
		<Header as="h3">Header as h3</Header>
		<Header as="h4">Header as h4</Header>
		<Header as="h5">Header as h5</Header>
		<Header as="h6">Header as h6</Header>
	</div>
));
