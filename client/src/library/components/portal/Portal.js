import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// Modal is a "pop-up menu" that can be closed either by clicking the background
// or the dedicated close button.
// Wether it can be closed by clicking the background is optional (props)

const useDOMNode = () => {
	const [node, setNode] = useState(null);

	// Appends the DOM node to body when the component mounts
	useEffect(() => {
		// eslint-disable-next-line no-shadow
		const node = document.createElement('div');

		node['data-type'] = 'portalbackground';

		document.body.appendChild(node);

		setNode(node);

		return () => {
			document.body.removeChild(node);
		};
	}, []);

	return node;
};

const Portal = ({ children }) => {
	const DOMNode = useDOMNode();
	if (!DOMNode) return null;

	return createPortal(<div>{children}</div>, DOMNode);
};

Portal.propTypes = {
	children: PropTypes.node
};

export default Portal;
