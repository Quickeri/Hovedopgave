import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon';
import Portal from '../portal/index';
import css from './style/modal.scss';

// Modal is a "pop-up menu" that can be closed either by clicking the background
// or the dedicated close button.
// Wether it can be closed by clicking the background is optional (props)

// The modal itself - fairly straight forward
const Modal = ({
	className,
	children,
	modalTitle,
	style,
	backgroundClose = true
}) => {
	const [show, setShow] = useState(true);
	if (show)
		return (
			<Portal>
				<div
					className={css.modalbackground}
					style={style}
					onClick={() => {
						if (backgroundClose) setShow(false);
					}}
				>
					<div
						className={`${css.modalcontent} ${css[className]}`}
						style={{ ...style }}
						onClick={e => e.stopPropagation()}
					>
						<div className={css.topBar}>
							<div className={css.title}>
								{modalTitle}
								<div
									className={css.closeIcon}
									onClick={() => setShow(false)}
								>
									<Icon
										category="core"
										name="icon-cross"
									/>
								</div>
							</div>
						</div>
						<div className={css.content}>{children}</div>
					</div>
				</div>
			</Portal>
		);
	return null;
};

Modal.propTypes = {
	backgroundClose: PropTypes.bool,
	className: PropTypes.string.isRequired,
	children: PropTypes.node,
	modalTitle: PropTypes.string,
	style: PropTypes.object
};

export default Modal;
