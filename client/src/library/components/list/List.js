import React from 'react';
import PropTypes from 'prop-types';
import css from './style/list.scss';

const List = ({ content, size, style }) => (
	<ul className={css.list}>
		{content.map(item => (
			<li
				key={item.id}
				className={css.item}
				style={{ fontSize: size, ...style }}
			>
				{item.value}
			</li>
		))}
	</ul>
);

List.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			value: PropTypes.string
		})
	)
};

export default List;
