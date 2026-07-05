import EmailLayout, {text} from '@/server/emails/EmailLayout';
import {EmailableUser} from '@/types/user';
import {Link, Text} from '@react-email/components';
import React from 'react';

export interface NotificationEmailProps {
	user: EmailableUser;
	message: string;
	link: string;
	linkText: string;
}

const linkStyle: React.CSSProperties = {
	...text,
	fontWeight: 700,
	color: '#246bfd',
	textDecoration: 'underline',
};

export default function NotificationEmail({user, message, link, linkText}: NotificationEmailProps) {
	return (
		<EmailLayout previewText={message} firstName={user.first_name}>
			<Text style={text}>{message}</Text>
			<Text style={text}>
				<Link href={link} style={linkStyle}>
					{linkText}
				</Link>
			</Text>
		</EmailLayout>
	);
}
