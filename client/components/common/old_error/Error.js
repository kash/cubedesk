import React from 'react';
import './Error.scss';

export default class Error extends React.Component {
	render() {
		const {text} = this.props;

		return <div className="cd-common__error">{text}</div>;
	}
}
