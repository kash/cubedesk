import React from 'react';
import {connect} from 'react-redux';
import {CircleNotch} from 'phosphor-react';
import './Button.scss';
import Error from '../old_error/Error';
import ConfirmModal from '../confirm_modal/ConfirmModal';
import {openModal} from '../../../actions/general';

class OldButton extends React.Component {
	constructor() {
		super();

		this.state = {
			confirm: false,
		};

		this.confirmTimeout = null;
	}

	onClick = (e) => {
		if (this.props.confirm && !this.state.confirm) {
			this.setState({
				confirm: true,
			});
			this.confirmTimeout = setTimeout(() => {
				this.setState({
					confirm: false,
				});
			}, 3000);
			return;
		}

		if (this.confirmTimeout) {
			clearTimeout(this.confirmTimeout);
		}

		if (this.props.confirmModal) {
			this.toggleConfirmModal();
		}

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	};

	toggleConfirmModal = () => {
		const {
			confirmModalTitle,
			confirmModalButtonText,
			confirmModalButtonIcon,
			confirmModalTriggerAction,
			confirmModalDescription,
			text,
		} = this.props;

		this.props.dispatch(
			openModal(
				<ConfirmModal
					red
					buttonText={text || confirmModalButtonText}
					buttonIcon={confirmModalButtonIcon}
					triggerAction={confirmModalTriggerAction}
				/>,
				{
					title: confirmModalTitle,
					description: confirmModalDescription,
					onClose: this.toggleConfirmModal,
				}
			)
		);
	};

	render() {
		const {confirm} = this.state;
		const {
			text,
			info,
			small,
			green,
			orange,
			round,
			red,
			white,
			large,
			flat,
			disabled,
			textStyle,
			fullWidth,
			title,
			alignLeft,
			backgroundColor,
			blue,
			type: buttonType,
			className,
			icon,
			style,
			loading,
			error,
		} = this.props;

		const baseClass = 'cd-common__button';
		const classes = [baseClass];

		if (className) {
			classes.push(className);
		}

		if (small) {
			classes.push(baseClass + '--small');
		}

		if (white) {
			classes.push(baseClass + '--white');
		}

		if (green) {
			classes.push(baseClass + '--green');
		}

		if (blue) {
			classes.push(baseClass + '--blue');
		}

		if (orange) {
			classes.push(baseClass + '--orange');
		}

		if (red) {
			classes.push(baseClass + '--red');
		}

		if (large) {
			classes.push(baseClass + '--large');
		}

		if (round) {
			classes.push(baseClass + '--round');
		}

		if (flat) {
			classes.push(baseClass + '--flat');
		}

		let ic = null;
		if (icon) {
			ic = <i className={icon} />;
		}

		if (loading) {
			ic = <CircleNotch weight="bold" className="spin" />;
		}

		let err = null;
		if (error) {
			err = <Error text={error} />;
		}

		let wrapperStyle = {};
		let textSpan = null;

		if (alignLeft) {
			wrapperStyle.alignItems = 'flex-start';
		} else {
			wrapperStyle.alignItems = ' flex-end';
		}

		if (style) {
			wrapperStyle = {
				...wrapperStyle,
				...style,
			};
		}

		if (text) {
			textSpan = <span style={textStyle || {}}>{text || this.props.children}</span>;
		}

		let infoSpan = null;
		if (info) {
			infoSpan = <p className="cd-common__button__info">{info}</p>;
			err = null;
		}

		const buttonStyle = {};
		if (backgroundColor) {
			buttonStyle.backgroundColor = backgroundColor;
		}

		if (fullWidth) {
			wrapperStyle.width = '100%';
			buttonStyle.width = '100%';
		}

		return (
			<div className="cd-common__button__wrapper" style={wrapperStyle}>
				<button
					title={title}
					type={buttonType || 'button'}
					onMouseOver={this.props.onMouseOver}
					onMouseOut={this.props.onMouseOut}
					disabled={disabled}
					className={classes.join(' ')}
					style={buttonStyle}
					onClick={this.onClick}
				>
					{confirm ? <span className="cd-common__button__confirm">Confirm: </span> : ''}
					{textSpan}
					{this.props.children}
					{ic}
				</button>
				{infoSpan}
				{err}
			</div>
		);
	}
}

export default connect((store) => ({
	generate: store.general,
}))(OldButton);
