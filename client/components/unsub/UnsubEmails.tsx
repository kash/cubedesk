import React from 'react';
import './UnsubEmails.scss';
import AlertContainer from '../common/alert_container/AlertContainer';

export default function UnsubEmails() {
	const body = (
		<p>
			You are now unsubscribed from all CubeDesk tips, updates, and marketing emails. You can opt back in at any
			time on the <a href="/account/notifications">Notifications</a> page.
		</p>
	);

	return <AlertContainer fill body={body} type="success" />;
}
