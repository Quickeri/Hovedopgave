import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { Icon, RotatingIcon } from 'components/icon/index';

storiesOf('Icon', module)
	.add('standard icon', () => (
		<div>
			<Icon name="icon-quotes-left" fontSize={200} />
			{' hello from icon '}
			<Icon name="icon-quotes-right" fontSize={200} />
		</div>
	))
	.add('Rotating icon', () => (
		<RotatingIcon name="icon-spinner2" fontSize={300} />
	));
