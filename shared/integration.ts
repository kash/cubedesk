import {resourceUri} from '../client/util/storage';

export type IntegrationType = 'discord' | 'wca';

export interface LinkedServiceData {
	id: string;
	name: string;
	description: string;
	logoSrc: string;
	clientId: string;
	authEndpoint: string;
	tokenEndpoint: string;
	meEndpoint: string;
	revokeEndpoint: string;
	responseType: string;
	scope: string[];
}

export const LINKED_SERVICES: Record<IntegrationType, LinkedServiceData> = {
	discord: {
		id: 'discord',
		name: 'Discord',
		description: 'Link your Discord account to allow messaging and gain access to more Pro features.',
		logoSrc: resourceUri('/images/logos/discord_logo.svg'),
		authEndpoint: 'https://discord.com/api/v8/oauth2/authorize',
		tokenEndpoint: 'https://discord.com/api/v8/oauth2/token',
		meEndpoint: 'https://discord.com/api/v8/users/@me',
		revokeEndpoint: 'https://discord.com/api/v8/oauth2/token/revoke',
		clientId: '960341272269291590',
		responseType: 'code',
		scope: ['email', 'identify', 'connections'],
	},
	wca: {
		id: 'wca',
		name: 'WCA',
		description: 'Add a layer of authenticity by adding your WCA account and showing off your official times.',
		logoSrc: resourceUri('/images/logos/wca_logo.svg'),
		tokenEndpoint: 'https://www.worldcubeassociation.org/oauth/token',
		revokeEndpoint: 'https://www.worldcubeassociation.org/oauth/revoke',
		authEndpoint: 'https://www.worldcubeassociation.org/oauth/authorize',
		meEndpoint: 'https://www.worldcubeassociation.org/api/v0/me',
		clientId: 'p_XZ2OvzijIXX-y8SZmQFa0w5m-B6u4U7PkrRWhojrs',
		responseType: 'code',
		scope: ['public'],
	},
};
