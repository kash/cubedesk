import About from '@/components/docs/pages/About';
import BluetoothTroubleshooting from '@/components/docs/pages/BluetoothTroubleshooting';
import ConnectWcaAccount from '@/components/docs/pages/ConnectWcaAccount';
import MigrateFromCsTimer from '@/components/docs/pages/MigrateFromCsTimer';
import Privacy from '@/components/docs/pages/Privacy';
import SupportedDevices from '@/components/docs/pages/SupportedDevices';
import Terms from '@/components/docs/pages/Terms';
import {ComponentType} from 'react';

export interface DocPage {
	path: string;
	navTitle: string;
	title: string;
	description: string;
	component: ComponentType;
	// Defaults to a TechArticle when not provided
	structuredData?: Record<string, unknown>;
}

interface DocSection {
	label: string;
	pages: DocPage[];
}

const ABOUT_DESCRIPTION =
	"CubeDesk is a free online Rubik's Cube timer for speedcubers. Track solves with WCA-style scrambles, analyze stats and averages, train algorithms, race friends 1v1, and connect smart cubes.";

export const DOC_SECTIONS: DocSection[] = [
	{
		label: 'CubeDesk',
		pages: [
			{
				path: '/about',
				navTitle: 'About',
				title: "About CubeDesk - Free Online Rubik's Cube Timer",
				description: ABOUT_DESCRIPTION,
				component: About,
				structuredData: {
					'@context': 'https://schema.org',
					'@type': 'WebApplication',
					name: 'CubeDesk',
					url: process.env.BASE_URI,
					applicationCategory: 'UtilitiesApplication',
					operatingSystem: 'Any',
					description: ABOUT_DESCRIPTION,
					offers: {
						'@type': 'Offer',
						price: '0',
						priceCurrency: 'USD',
					},
				},
			},
			{
				path: '/supported-devices',
				navTitle: 'Supported devices',
				title: 'Supported Smart Cubes and Timers (GAN, MoYu, QiYi, GoCube) | CubeDesk',
				description:
					'Every smart cube and timer that works with CubeDesk: GAN, MoYu, QiYi, GoCube, and Giiker Bluetooth cubes, plus the GAN Smart Timer and StackMat timers.',
				component: SupportedDevices,
			},
		],
	},
	{
		label: 'Guides',
		pages: [
			{
				path: '/guides/bluetooth-troubleshooting',
				navTitle: 'Troubleshooting Bluetooth',
				title: 'Smart Cube Bluetooth Troubleshooting (GAN, MoYu, GoCube, Giiker) | CubeDesk',
				description:
					"Fix smart cube and GAN Smart Timer connection problems on CubeDesk. Supported browsers, GAN and MoYu MAC address setup, auto-reconnect, and how to recalibrate a cube that's out of sync.",
				component: BluetoothTroubleshooting,
			},
			{
				path: '/guides/migrate-from-cstimer',
				navTitle: 'Migrate from csTimer',
				title: 'How to Migrate from csTimer to CubeDesk | Import Your Times',
				description:
					'Move your csTimer solves and sessions to CubeDesk in a few minutes. Export your csTimer data to a file, import it on CubeDesk, and keep your times, penalties, scrambles, and comments.',
				component: MigrateFromCsTimer,
			},
			{
				path: '/guides/connect-wca-account',
				navTitle: 'Connecting your WCA account',
				title: 'How to Connect Your WCA Account to CubeDesk',
				description:
					'Link your World Cube Association account to CubeDesk to show your official personal bests, national and world ranks, and competition history on your CubeDesk profile.',
				component: ConnectWcaAccount,
			},
		],
	},
];

// Linked from the docs footer instead of the sidebar
export const LEGAL_PAGES: DocPage[] = [
	{
		path: '/terms',
		navTitle: 'Terms',
		title: 'Terms of Service | CubeDesk',
		description:
			"The rules for using CubeDesk, the free online Rubik's Cube timer, including who can sign up, community rules, and your content.",
		component: Terms,
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'CubeDesk Terms of Service',
			url: `${process.env.BASE_URI}/terms`,
		},
	},
	{
		path: '/privacy',
		navTitle: 'Privacy',
		title: 'Privacy Policy | CubeDesk',
		description:
			'What information CubeDesk collects, how it is used and shared, what is public, and how to export or delete your data.',
		component: Privacy,
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'CubeDesk Privacy Policy',
			url: `${process.env.BASE_URI}/privacy`,
		},
	},
];

export const DOC_PAGES: DocPage[] = [
	...DOC_SECTIONS.flatMap((section) => section.pages),
	...LEGAL_PAGES,
];

export function getDocPage(path: string): DocPage {
	return DOC_PAGES.find((page) => page.path === path) ?? DOC_PAGES[0];
}
