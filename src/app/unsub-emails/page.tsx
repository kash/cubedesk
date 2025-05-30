'use client';

import React from 'react';
import '../../components/unsub/UnsubEmails.scss';
import AlertContainer from '../../components/common/alert_container/AlertContainer';

export default function UnsubEmailsPage() {
	const body = (
		<p>
			You are now unsubscribed from all CubeDesk tips, updates, and marketing emails. You can opt back in at any
			time on the <a href="/account/notifications">Notifications</a> page.
		</p>
	);

	return <AlertContainer fill body={body} type="success" />;
}