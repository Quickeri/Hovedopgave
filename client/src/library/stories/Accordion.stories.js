/* eslint-disable react/display-name */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Accordion from 'components/accordion/Accordion';
import List from 'components/list/';

const content = [
	{
		id: 1,
		title: 'hello from accordion',
		renderContent: () => <div>hello from renderContent</div>
	},
	{
		id: 2,
		title: 'this is the second item',
		renderContent: () => (
			<List
				content={[
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
				]}
				size={30}
			/>
		)
	}
];

storiesOf('Accordion', module)
	.add('all accordions', () => {
		return (
			<div>
				<Accordion
					items={content}
					size="mini"
					className="primary"
				/>
				<Accordion
					items={content}
					title="hello"
					size="tiny"
					className="secondary"
				/>
				<Accordion
					items={content}
					title="hello"
					size="small"
					className="warning"
				/>
				<Accordion
					items={content}
					title="hello"
					size="medium"
					className="info"
				/>
				<Accordion
					items={content}
					title="hello"
					size="large"
					className="positive"
				/>
				<Accordion
					items={content}
					title="hello"
					size="xlarge"
					className="negative"
				/>
				<Accordion
					items={content}
					title="hello"
					size="huge"
				/>
				<Accordion
					items={content}
					title="hello"
					size="giga"
					basic={true}
				/>
			</div>
		);
	})
	.add('Accordion open item on mount', () => (
		<Accordion items={content} initialOpenItem={'4'} />
	));
