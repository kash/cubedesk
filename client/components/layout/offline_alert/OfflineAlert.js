import React from 'react';
import './OfflineAlert.scss';
import {Offline} from 'react-detect-offline';

export default class OfflineAlert extends React.Component {
	render() {
		if (typeof window !== 'undefined' && window.location.href.indexOf('localhost') > -1) {
			return null;
		}

		return (
			<Offline>
				<div className="cd-offline">
					<p>You are currently offline. You can continue to use CubeDesk, but no changes will be saved.</p>
				</div>
			</Offline>
		);
	}
}
