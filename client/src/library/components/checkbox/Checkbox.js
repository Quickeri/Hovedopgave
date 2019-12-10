import React from 'react';
import PropTypes from 'prop-types';
import css from './style/checkbox.scss';

const Checkbox = ({
	displayText,
	id,
	name,
	value,
	onChange,
	style
}) => {
	return (
		<label
			className={`${css.container}`}
			key={id}
			style={{ display: 'inline-flex', ...style }}
		>
			<i
				className={` ${
					value
						? `form-icon-checkbox-unchecked2`
						: `${css.primary} form-icon-checkbox-checked2`
				}`}
			/>
			<input
				type="checkbox"
				name={name}
				checked={value}
				onChange={() => onChange(value)}
			/>
			<span className={css.label}>{displayText}</span>
		</label>
	);
};

Checkbox.propTypes = {
	displayText: PropTypes.string,
	id: PropTypes.number,
	name: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.bool,
	style: PropTypes.object
};

export default Checkbox;
