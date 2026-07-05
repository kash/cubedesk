import {Body, Container, Head, Hr, Html, Img, Preview, Section, Text} from '@react-email/components';
import React from 'react';

const LOGO_SRC = 'https://cdn.cubedesk.io/storage/logo_text_black.png';

const main: React.CSSProperties = {
	backgroundColor: '#ffffff',
	fontFamily: 'helvetica, Arial, sans-serif',
};

const container: React.CSSProperties = {
	margin: '0 auto',
	padding: '20px 24px',
	maxWidth: '600px',
};

const divider: React.CSSProperties = {
	borderColor: '#444444',
	margin: '20px 0',
};

const text: React.CSSProperties = {
	fontSize: '20px',
	color: '#444444',
	lineHeight: '27px',
};

interface EmailLayoutProps {
	previewText: string;
	firstName?: string | null;
	children: React.ReactNode;
}

export default function EmailLayout({previewText, firstName, children}: EmailLayoutProps) {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section>
						<a href="https://www.cubedesk.io">
							<Img src={LOGO_SRC} width="200" alt="CubeDesk" />
						</a>
					</Section>

					<Hr style={divider} />

					<Text style={text}>Hey {firstName || 'there'},</Text>

					{children}

					<Hr style={divider} />

					<Text style={{...text, paddingBottom: 0, marginBottom: 0}}>Cheers,</Text>
					<Text style={{...text, marginTop: 0}}>Team CubeDesk</Text>
				</Container>
			</Body>
		</Html>
	);
}

export {text, divider};
