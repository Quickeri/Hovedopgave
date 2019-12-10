import React from 'react';
import Proptypes from 'prop-types';
import css from './style/header.scss';

const Header = ({ as, style, content, children }) => {
	let head = null;
	switch (as) {
		case 'h1':
			head = (
				<h1 className={css.h1} style={style}>
					{content || children}
				</h1>
			);
			break;
		case 'h2':
			head = (
				<h2 className={css.h2} style={style}>
					{content || children}
				</h2>
			);
			break;
		case 'h3':
			head = (
				<h3 className={css.h3} style={style}>
					{content || children}
				</h3>
			);
			break;
		case 'h4':
			head = (
				<h4 className={css.h4} style={style}>
					{content || children}
				</h4>
			);
			break;
		case 'h5':
			head = (
				<h5 className={css.h5} style={style}>
					{content || children}
				</h5>
			);
			break;
		case 'h6':
			head = (
				<h6 className={css.h6} style={style}>
					{content || children}
				</h6>
			);
			break;
		default:
			break;
	}
	return head;
};

Header.prototype = {
	as: Proptypes.string.isRequired,
	content: Proptypes.string,
	children: Proptypes.node,
	style: Proptypes.object
};

export default Header;
