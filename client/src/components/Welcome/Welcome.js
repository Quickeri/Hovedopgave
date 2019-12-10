import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon } from '../../library/index';
import css from './welcome.scss';

const Welcome = () => {
	return (
		<div className={css.content}>
			<Header as="h1" style={{ textAlign: 'center' }}>
				Welcome to the admin user panel!
			</Header>
			Welcome to the user admin page!
			<br />
			<Link to="/users">
				<Button>
					{'User admin page '}
					<Icon name="icon-arrow-right" fontSize={16} />
				</Button>
			</Link>
		</div>
	);
};

export default Welcome;
