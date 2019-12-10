import React from 'react';
import PropTypes from 'prop-types';
import css from './style/radio.scss';

const Radio = ({ options, name, onChange, value, style }) => {
	return options.map(item => {
		return (
			<label
				className={`${css.container}`}
				key={item.id}
				style={{ display: 'inline-flex', ...style }}
			>
				<i
					className={` ${
						item.value !== value
							? `form-icon-radio-unchecked`
							: `${css.primary} form-icon-radio-checked2`
					}`}
				/>
				<input
					type="radio"
					name={name}
					checked={item.value === value}
					onChange={() => onChange(item.value)}
				/>
				<span className={css.label}>{item.displayText}</span>
			</label>
		);
	});
};

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			displayText: PropTypes.string,
			value: PropTypes.string
		})
	).isRequired,
	style: PropTypes.object
};

export default Radio;
