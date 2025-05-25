import request from 'request';
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

export function getLocationFromIp(ip: string): Promise<IfConfig> {
	const url = `https://ifconfig.co/json?ip=${ip}`;

	return new Promise((resolve, reject) => {
		request(url, (error, response, body) => {
			if (error) {
				reject(error);
				return;
			}

			try {
				resolve(JSON.parse(body));
			} catch (e) {
				logger.error('Could not parse location from IP', {
					body
				});
				reject();
			}
		});
	});
}
