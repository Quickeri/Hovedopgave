import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Alert from '../components/alert/Alert';
import Button from '../components/button/Button';

storiesOf('Alert', module).add('All Alerts', () => (
	<Alert
		className="negative"
		alertTitle="Bad ALERT!"
		buttons={
			<div>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
				<Button>CLOSE</Button>
			</div>
		}
	>
		{
			'Alert content goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ante ac lectus fringilla tempus sed eget felis. Donec purus quam, convallis sodales tincidunt non, cursus ut tortor. Duis vitae felis nec urna fringilla condimentum. Duis hendrerit et arcu et vestibulum. Cras euismod ullamcorper iaculis. Curabitur gravida euismod nisl, eget consequat ante tempor ac. Donec ac dictum ligula, vel pretium est. Sed eget pulvinar elit. Curabitur hendrerit euismod nulla, vel mollis massa tempus at.'
		}
	</Alert>
));
