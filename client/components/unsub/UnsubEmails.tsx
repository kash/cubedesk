import React, {useEffect} from 'react';
import './UnsubEmails.scss';
import AlertContainer from '../common/alert_container/AlertContainer';
import {useMutation} from '@apollo/client';
import {UnsubEmailsDocument} from '../../@types/generated/graphql';

export default function UnsubEmails() {
	const [unsubEmails] = useMutation(UnsubEmailsDocument);

	useEffect(() => {
		const id = new URLSearchParams(window.location.search).get('id');

		unsubEmails({
			variables: {
				unsubId: id,
			},
		});
	}, []);

	const body = (
		<p>
			You are now unsubscribed from all CubeDesk tips, updates, and marketing emails. You can opt back in at any
			time on the <a href="/account/notifications">Notifications</a> page.
		</p>
	);

	return <AlertContainer fill body={body} type="success" />;
}
