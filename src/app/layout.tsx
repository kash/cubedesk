import type {Metadata} from 'next';
import '../styles/index.scss';
import {Outfit, Roboto_Mono} from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import * as Sentry from '@sentry/browser';
import {Integrations} from '@sentry/tracing';
import {Providers} from './providers';

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
});

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
});

// Initialize Sentry
if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: 'https://feee16c821834f408ae2453577b10f9e@o637154.ingest.sentry.io/5756098',
    release: process.env.RELEASE_NAME,
    environment: process.env.ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export const metadata: Metadata = {
	title: 'CubeDesk',
	description: 'The speedcubing timer for the web.',
	openGraph: {
		type: 'website',
		url: 'https://cubedesk.io',
		title: 'CubeDesk',
		description: 'The speedcubing timer for the web.',
		images: ['/images/site/cubedesk_og_image.jpeg'],
	}
};

interface IRootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${outfit.variable} ${robotoMono.variable}`}
		>
			<head>
				<Script defer data-domain="cubedesk.io" src="https://plausible.io/js/script.js" />
			</head>
			<body className="overscroll-none">
				<Providers>
					{props.children}
				</Providers>
			</body>
		</html>
	);
}
