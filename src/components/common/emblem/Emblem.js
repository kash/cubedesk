import React from 'react';
import Color from 'color';
import './Emblem.scss';

export default class Emblem extends React.Component {
	render() {
		const {text, red, color, orange, backgroundColor, small, purple, green, className, icon} = this.props;

		let classList = 'cd-common__emblem';
		if (className) {
			classList += ' ' + className;
		}

		if (small) {
			classList += ' cd-common__emblem--small';
		}

		const styles = {};
		const spanStyle = {};
		if (red) {
			styles.backgroundColor = '#ffcdd2';
			spanStyle.color = '#b71c1c';
		} else if (orange) {
			styles.backgroundColor = '#ffe0b2';
			spanStyle.color = '#bf360c';
		} else if (green) {
			styles.backgroundColor = '#9add9d';
			spanStyle.color = '#16561b';
		} else if (purple) {
			styles.backgroundColor = '#b39ddb';
			spanStyle.color = '#391d8c';
		}

		if (color) {
			spanStyle.color = color;
			styles.backgroundColor = backgroundColor || Color(color).lighten(4);
		}

		let span = null;
		if (text) {
			span = <span>{text}</span>;
		} else {
			classList += ' cd-common__emblem__icon';
		}

		return (
			<div className={classList} style={styles}>
				<div className="cd-common__emblem__body" style={spanStyle}>
					{icon}
					{span}
				</div>
			</div>
		);
	}
}
