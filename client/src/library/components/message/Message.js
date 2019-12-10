import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Icon } from '../icon';
import css from './style/message';

// useDOMNode adds a DOM node as a child of <body>, then returns that node
// NOTE: useDOMNode can be moved outside this file because similar
// functionality is needed in several places (popups, modals, etc.)
const useDOMNode = () => {
	const [node, setNode] = useState(null);
	// Appends the DOM node to body when the component mounts
	useEffect(() => {
		// eslint-disable-next-line no-shadow
		const node = document.createElement('div');
		node['data-type'] = 'messagecontainer';
		document.body.appendChild(node);
		setNode(node);
		return () => {
			document.body.removeChild(node);
		};
	}, []);
	return node;
};

// The message itself - fairly straight forward
const Message = ({
	basic = false,
	className = 'primary',
	title,
	description,
	size = 'medium',
	style
}) => {
	const [show, setShow] = useState();
	let combinedClassName = `${css.message} ${css[className]}`;
	let iconClassName = ` ${css.closeIcon}`;
	if (basic) {
		combinedClassName += ` ${css.basic}`;
		iconClassName += ` ${css.basic}`;
	}
	combinedClassName += ` ${css[size]}`;
	return (
		<div
			className={css.message}
			style={{ display: show, ...style }}
		>
			<div className={combinedClassName}>
				<div
					className={iconClassName}
					onClick={() => setShow('none')}
				>
					<Icon
						category="core"
						name="icon-cross"
						style={{ float: 'right' }}
					/>
				</div>
				<div className={css.title}> {title} </div>
				<div className={css.description}> {description} </div>
			</div>
		</div>
	);
};

// Creates a portal in which we mount a dynamically created DOM node
// A portal allows us to render a React element *outside* its natural place in the "react tree"
// Rendering outside the react tree allows the
// message to be unaffected by other styling/nesting that would affect its position
const MessagePortal = props => {
	const DOMNode = useDOMNode();
	if (!DOMNode) return null;
	return createPortal(<Message {...props} />, DOMNode);
};

Message.proptypes = {
	basic: Proptypes.bool,
	className: Proptypes.string,
	title: Proptypes.string,
	description: Proptypes.string,
	size: Proptypes.string,
	style: Proptypes.object
};

export default MessagePortal;
