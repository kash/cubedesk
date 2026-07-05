import {logger} from './logger';

interface IfConfig {
	ip: string;
	ip_decimal: number;
	country: string;
	country_iso: string;
	country_eu: boolean;
	latitude: number;
	longitude: number;
	time_zone: number;
	asn: string;
	asn_org: string;
}

export async function getLocationFromIp(ip: string): Promise<IfConfig> {
	const url = `https://ifconfig.co/json?ip=${ip}`;

	const response = await fetch(url);
	const body = await response.text();

	try {
		return JSON.parse(body);
	} catch (e) {
		logger.error('Could not parse location from IP', {
			body,
		});
		throw e;
	}
}
