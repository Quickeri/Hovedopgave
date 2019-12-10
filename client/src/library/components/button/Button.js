import React from 'react';
import PropTypes from 'prop-types';
import css from './style/button.scss';

const Button = ({
	basic = false,
	className = 'primary',
	href,
	disabled = false,
	onClick,
	children,
	size = 'medium',
	style
}) => {
	let combinedClassName = `${css.button}`;
	if (basic) combinedClassName += ` ${css.basic}`;
	combinedClassName += ` ${css[className]} ${css[size]}`;
	if (disabled) combinedClassName += ` ${css.disabled}`;

	if (href) {
		return (
			<a
				href={href}
				onClick={e => {
					if (!href) {
						onClick(e);
					} else {
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							return;
						}
						e.preventDefault();
						onClick(e);
					}
				}}
				className={combinedClassName}
				style={style}
				disabled={disabled}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			className={combinedClassName}
			style={style}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	basic: PropTypes.bool,
	href: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	onClick: PropTypes.func
};

export default Button;
