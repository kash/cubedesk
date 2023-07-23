import React from 'react';
import {CircleNotch} from 'phosphor-react';
import Error from '../old_error/Error';
import {Link} from 'react-router-dom';

export default class LinkButton extends React.Component {
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

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	};

	render() {
		const {confirm} = this.state;
		const {
			text,
			info,
			small,
			green,
			orange,
			red,
			target,
			white,
			large,
			textStyle,
			alignLeft,
			blue,
			to,
			className,
			icon,
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

		let ic = null;
		if (icon) {
			ic = <i style={textStyle} className={icon} />;
		}

		if (loading) {
			ic = <CircleNotch weight="bold" className="spin" />;
		}

		let err = null;
		if (error) {
			err = <Error text={error} />;
		}

		let textSpan = null;

		if (text) {
			textSpan = (
				<span style={textStyle || {}}>
					{confirm ? 'Confirm: ' : ''}
					{text || this.props.children}
				</span>
			);
		}

		let infoSpan = null;
		if (info) {
			infoSpan = <p className="cd-common__button__info">{info}</p>;
			err = null;
		}

		let link = (
			<a href={to} target={target} className={classes.join(' ')} onClick={this.onClick}>
				{textSpan}
				{this.props.children}
				{ic}
			</a>
		);

		if (!to.startsWith('http')) {
			link = (
				<Link to={to} target={target} className={classes.join(' ')} onClick={this.onClick}>
					{textSpan}
					{this.props.children}
					{ic}
				</Link>
			);
		}

		return (
			<div className="cd-common__button__wrapper" style={{alignItems: alignLeft ? 'flex-start' : 'flex-end'}}>
				{link}
				{infoSpan}
				{err}
			</div>
		);
	}
}
