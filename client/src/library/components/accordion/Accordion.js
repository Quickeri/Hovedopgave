import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon/index';
import css from './style/accordion.scss';

const Accordion = ({
	basic = false,
	className = 'primary',
	iconPosition = 'right',
	initialOpenItem,
	items,
	size = 'medium',
	style
}) => {
	const [openItem, setOpenItem] = useState(initialOpenItem || null);

	return items.map(item => {
		const isOpen = openItem === item.id;

		let combinedClassName = `${css.accordion} ${css[className]} `;
		combinedClassName += ` ${css[size]}`;
		let subClassName = `${css.header}`;
		let contentClassName = `${css.content} ${css[size]}`;
		if (basic) {
			combinedClassName += ` ${css.basic}`;
			subClassName += ` ${css[className]}`;
			contentClassName += ` ${css[className]}`;
		}
		subClassName += ` ${isOpen ? css['active-accordion'] : null}`;
		return (
			<div
				key={item.id}
				className={combinedClassName}
				style={style}
			>
				<button
					// data-type="button"
					className={subClassName}
					onClick={() =>
						setOpenItem(isOpen ? null : item.id)
					}
				>
					{item.title}
					<Icon
						name={
							!isOpen
								? 'icon-plus-circle'
								: 'icon-minus-circle2'
						}
						style={{ float: iconPosition }}
					/>
				</button>
				{isOpen && (
					<div className={contentClassName}>
						{item.renderContent()}
					</div>
				)}
			</div>
		);
	});
};

Accordion.propTypes = {
	basic: PropTypes.bool,
	className: PropTypes.string,
	iconPosition: PropTypes.string,
	initialOpenItem: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			renderContent: PropTypes.func
		})
	).isRequired,
	size: PropTypes.string,
	style: PropTypes.object
};

export default Accordion;
