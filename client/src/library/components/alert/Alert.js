import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/index';
import css from './style/alert.scss';

// Modal is a "pop-up menu" that can be closed either by clicking the background
// or the dedicated close button.
// Wether it can be closed by clicking the background is optional (props)

// The modal itself - fairly straight forward
const Alert = ({
	className,
	children,
	alertTitle,
	style,
	buttons
}) => {
	const [show, setShow] = useState(true);
	if (show)
		return (
			<Portal>
				<div className={css.alertbackground} style={style}>
					<div
						className={`${css.alertcontent} ${css[className]}`}
						style={{ ...style }}
					>
						<div className={css.topBar}>
							<div className={css.title}>
								{alertTitle}
							</div>
						</div>
						<div className={css.content}>
							{children}
							<div
								className={css.buttons}
								onClick={() => setShow(false)}
							>
								{buttons}
							</div>
						</div>
					</div>
				</div>
			</Portal>
		);
	return null;
};

Alert.propTypes = {
	backgroundClose: PropTypes.bool,
	buttons: PropTypes.node,
	className: PropTypes.string.isRequired,
	children: PropTypes.node,
	alertTitle: PropTypes.string,
	style: PropTypes.object
};

export default Alert;
