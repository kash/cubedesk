import ForgotPasswordEmail, {ForgotPasswordEmailProps} from '@/server/emails/ForgotPasswordEmail';
import NotificationEmail, {NotificationEmailProps} from '@/server/emails/NotificationEmail';
import {createEmailLog} from '@/server/models/email_log';
import {EmailableUser} from '@/types/user';
import {SendEmailResponse, SES} from '@aws-sdk/client-ses';
import {render} from '@react-email/components';
import React from 'react';

const ses = new SES({region: 'us-west-2'});

// Maps a template name to the vars its React component expects (minus `user`,
// which is always injected from the recipient).
type TemplateVars = {
	notification: Omit<NotificationEmailProps, 'user'>;
	forgot_password: Omit<ForgotPasswordEmailProps, 'user'>;
};

type TemplateName = keyof TemplateVars;

const templates: {
	[K in TemplateName]: React.ComponentType<TemplateVars[K] & {user: EmailableUser}>;
} = {
	notification: NotificationEmail,
	forgot_password: ForgotPasswordEmail,
};

export async function sendEmailWithTemplate<T extends TemplateName>(
	user: EmailableUser,
	subject: string,
	template: T,
	vars: TemplateVars[T]
): Promise<SendEmailResponse> {
	const Component = templates[template] as React.ComponentType<any>;
	const element = React.createElement(Component, {user, ...vars});
	const body = await render(element);

	await createEmailLog(user, subject, template, vars as {[key: string]: string});

	return sendEmail(user.email, subject, body);
}

async function sendEmail(email: string, subject: string, body: string) {
	const sesParams = {
		Destination: {
			ToAddresses: [email],
		},
		Message: {
			Body: {
				Html: {
					Data: body,
				},
			},

			Subject: {Data: subject},
		},
		Source: 'CubeDesk <noreply@cubedesk.io>',
	};

	return ses.sendEmail(sesParams);
}
