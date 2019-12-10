import React from 'react';
import Proptypes from 'prop-types';
import './style/icon.scss';
import './fonts/core-icons.scss';
import './fonts/form-icons.scss';

const Icon = ({
	name,
	className,
	category = 'core',
	fontSize,
	style
}) => {
	const fontFamily = `site-${category}-icons`; // category = form, core etc...
	return (
		<i
			className={className ? `${name} ${className}` : name}
			style={{
				fontFamily,
				fontSize,
				...style
			}}
		/>
	);
};

Icon.proptypes = {
	name: Proptypes.string.isRequired,
	className: Proptypes.string,
	category: Proptypes.string,
	style: Proptypes.object
};

export default Icon;
