import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon';
import css from './style/label.scss';

const Label = ({
	basic = false,
	className = 'primary',
	description,
	icon,
	size = 'medium',
	style
}) => {
	let combinedClassName = `${css.label} ${css[className]}`;
	combinedClassName += ` ${css[size]}`;
	if (basic) {
		combinedClassName += ` ${css.basic}`;
	}

	return (
		<div
			className={combinedClassName}
			style={{ fontSize: size, ...style }}
		>
			<div>
				<Icon name={icon} style={{ float: 'left' }} />
			</div>
			<div className={css.content}>{description}</div>
		</div>
	);
};

Label.prototypes = {
	basic: PropTypes.bool,
	className: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object
};
export default Label;
