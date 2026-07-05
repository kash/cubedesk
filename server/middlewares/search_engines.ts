import request from 'request';

export function exposeResourcesForSearchEngines() {
	global.app.get('/robots.txt', (req, res) => {
		request(`https://cdn.cubedesk.io/static/robots.txt`).pipe(res);
	});
	global.app.get('/sitemap.xml', (req, res) => {
		request('https://cdn.cubedesk.io/site/sitemaps/sitemap.xml').pipe(res);
	});
	global.app.get('/favicon.ico', (req, res) => {
		request('https://cdn.cubedesk.io/static/favicon.ico').pipe(res);
	});
}
