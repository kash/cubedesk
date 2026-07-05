import React from 'react';
import {Text} from '@react-email/components';
import EmailLayout, {text} from './EmailLayout';
import {EmailableUser} from '@/types/user';

export interface ForgotPasswordEmailProps {
	user: EmailableUser;
	message: string;
	code: string;
}

const codeStyle: React.CSSProperties = {
	...text,
	fontWeight: 700,
	letterSpacing: '2px',
};

export default function ForgotPasswordEmail({user, message, code}: ForgotPasswordEmailProps) {
	return (
		<EmailLayout previewText={message} firstName={user.first_name}>
			<Text style={text}>{message}</Text>
			<Text style={codeStyle}>{code}</Text>
		</EmailLayout>
	);
}
