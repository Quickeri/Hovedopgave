import React from 'react';
import PropType from 'prop-types';
import css from './style/icon.scss';
import './fonts/core-icons.scss';
import './fonts/form-icons.scss';

const Icon = ({
	name,
	className,
	category = 'core',
	style,
	fontSize
}) => {
	const fontFamily = `site-${category}-icons`; // category = form, core etc...
	return (
		<p className={css.rotate}>
			<i
				className={className ? `${name} ${className}` : name}
				style={{
					fontSize,
					fontFamily,
					...style
				}}
			/>
		</p>
	);
};

Icon.propType = {
	name: PropType.string.isRequired,
	className: PropType.string,
	category: PropType.string,
	style: PropType.object,
	fontSize: PropType.number.isRequired
};

export default Icon;
