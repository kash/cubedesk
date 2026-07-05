import {getBlockingThemeInitScript} from '@/util/themes/theme_init';

export interface HtmlPagePayload {
	html: string;
	cleanState: string;
	headTags: string;
	distBase: string;
	resourceBase: string;
	cssFileName: string;
	jsFileName: string;
}

export default (payload: HtmlPagePayload) => {
	const {html, cleanState, headTags, distBase, resourceBase, cssFileName, jsFileName} = payload;

	const isDev = (process.env.ENV || 'development') === 'development';
	const fallbackTitle = headTags.includes('<title') ? '' : '<title>CubeDesk</title>';
	const baseUri = process.env.BASE_URI || 'https://www.cubedesk.io';
	// Google reads WebSite structured data from the homepage to pick the site name shown in search results
	const siteNameJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'CubeDesk',
		url: `${baseUri}/`,
	});
	const assetBase = distBase.replace(/\/$/, '');
	const assetUri = (fileName: string) => `${assetBase}/${fileName}`;
	const cssLink = isDev ? '' : `<link rel="stylesheet" href="${assetUri(cssFileName)}">`;
	const clientScripts = isDev
		? `<script type="module">
				import RefreshRuntime from '/@react-refresh';
				RefreshRuntime.injectIntoGlobalHook(window);
				window.$RefreshReg$ = () => {};
				window.$RefreshSig$ = () => (type) => type;
				window.__vite_plugin_react_preamble_installed__ = true;
			</script>
			<script type="module" src="/@vite/client"></script>
			<script type="module" src="/client/components/App.tsx"></script>`
		: `<script type="module" src="${assetUri(jsFileName)}"></script>`;

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<meta name="color-scheme" content="dark light" />
				<style>
					html,
					body {
						background-color: rgb(18, 20, 28);
						color: rgb(255, 255, 255);
					}
				</style>
				<script type="text/javascript">
					window.__STORE__ = ${cleanState};
				</script>
				<script type="text/javascript">
					${getBlockingThemeInitScript()}
				</script>
				<link rel="preconnect" href="https://fonts.gstatic.com">
				<link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans&family=JetBrains+Mono&family=Kiwi+Maru&family=Montserrat&family=Poppins&family=Roboto+Mono&family=Space+Mono&display=swap">
				<link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,900&display=swap">
				${cssLink}
				<link rel="icon" href="${resourceBase}/favicon.ico" type="image/x-icon">
				<link rel="icon" href="${resourceBase}/cubedesk_app_icon_192.png" type="image/png" sizes="192x192">
				<link rel="apple-touch-icon" href="${resourceBase}/cubedesk_app_icon_192.png">
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
				<script async defer data-domain="cubedesk.io" src="https://plausible.io/js/plausible.js"></script>
				<script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-354788011"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'AW-354788011');
				</script>
	
				<meta property="og:site_name" content="CubeDesk">
				<script type="application/ld+json">${siteNameJsonLd}</script>

				${fallbackTitle}
				${headTags}
			</head>
		
			<body>
				<div id="app">${html}</div>
			</body>
			${clientScripts}
		</html>
	`;
};
