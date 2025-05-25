import React from 'react';
import './OldDropdown.scss';
import {CaretDown} from 'phosphor-react';
import Button from '../old_button/OldButton';
import InputLegend from '../inputs/input/input_legend/InputLegend';

export default class OldDropdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	closeDropdown = (e) => {
		if (this.props.preventCloseOnInnerClick) {
			let target = e.target;
			while (target) {
				if (target && target.classList && target.classList.contains('cd-common__dropdown')) {
					return;
				}

				target = target.parentNode;
			}
		}

		if (this.props.onClose) {
			this.props.onClose();
		}

		this.setState({
			open: false,
		});
		window.removeEventListener('click', this.closeDropdown);
	};

	openDropdown = (e) => {
		e.preventDefault();

		if (!this.props.children) {
			return;
		}

		if (Array.isArray(this.props.children) && !this.props.children.length) {
			return;
		}

		this.setState(
			{
				open: true,
			},
			() => {
				if (this.props.onOpen) {
					this.props.onOpen();
				}
				setTimeout(() => {
					if (this.state.open) {
						window.addEventListener('click', this.closeDropdown);
					}
				}, 50);
			}
		);
	};

	render() {
		const {up, left, legend: legendText, icon, rawHandle, maxHeight} = this.props;
		const {open} = this.state;
		let body = null;

		let className = 'cd-common__dropdown__body';
		if (up) {
			className += ' cd-common__dropdown__body--up';
		}
		if (left) {
			className += ' cd-common__dropdown__body--left';
		}

		if (open) {
			const style = {};
			if (maxHeight) {
				style.maxHeight = maxHeight;
			}

			body = (
				<div className={className} style={style}>
					{this.props.children}
				</div>
			);
		}

		let handle = icon || <CaretDown weight="bold" />;

		if (this.props.handle) {
			handle = this.props.handle;
		}

		let handleWrapper;
		if (rawHandle) {
			handleWrapper = <button onClick={this.openDropdown}>{rawHandle}</button>;
		} else {
			handleWrapper = <Button onClick={this.openDropdown}>{handle}</Button>;
		}

		return (
			<div className="cd-common__dropdown">
				<InputLegend text={legendText} />
				{handleWrapper}
				{body}
			</div>
		);
	}
}
