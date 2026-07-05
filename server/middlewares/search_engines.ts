import type {Response} from 'express';
import {Readable} from 'stream';

async function proxy(url: string, res: Response) {
	const response = await fetch(url);

	if (!response.ok || !response.body) {
		res.sendStatus(response.status || 502);
		return;
	}

	const contentType = response.headers.get('content-type');
	if (contentType) {
		res.setHeader('content-type', contentType);
	}

	Readable.fromWeb(response.body as any).pipe(res);
}

export function exposeResourcesForSearchEngines() {
	global.app.get('/robots.txt', (req, res) => {
		proxy('https://cdn.cubedesk.io/static/robots.txt', res);
	});
	global.app.get('/sitemap.xml', (req, res) => {
		proxy('https://cdn.cubedesk.io/site/sitemaps/sitemap.xml', res);
	});
	global.app.get('/favicon.ico', (req, res) => {
		proxy('https://cdn.cubedesk.io/static/favicon.ico', res);
	});
}
