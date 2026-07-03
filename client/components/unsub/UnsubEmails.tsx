import React from 'react';
import AlertContainer from '@/components/common/AlertContainer';

export default function UnsubEmails() {
	const body = (
		<p>
			You are now unsubscribed from all CubeDesk tips, updates, and marketing emails. You can opt back in at any
			time on the <a href="/account/notifications">Notifications</a> page.
		</p>
	);

	return <AlertContainer fill body={body} type="success" />;
}
