import {getTimerFontHeadTags} from '@/util/fonts/timer_font';
import {DEFAULT_THEME_COLORS, getBlockingThemeInitScript} from '@/util/themes/theme_init';

export const STATE_PLACEHOLDER = '__CUBEDESK_STATE__';
export const PRELOAD_PLACEHOLDER = '<!--preload-links-->';
export const HEAD_TAGS_PLACEHOLDER = '<!--head-tags-->';
export const APP_HTML_PLACEHOLDER = '<!--app-html-->';

export interface HtmlTemplateAssets {
	distBase: string;
	resourceBase: string;
	jsFile: string;
	cssFiles: string[];
}

export function getAssetUri(distBase: string, fileName: string): string {
	return `${distBase.replace(/\/$/, '')}/${fileName}`;
}

export default (assets: HtmlTemplateAssets) => {
	const {distBase, resourceBase, jsFile, cssFiles} = assets;

	const isDev = (process.env.ENV || 'development') === 'development';
	const baseUri = process.env.BASE_URI || 'https://www.cubedesk.io';
	// Google reads WebSite structured data from the homepage to pick the site name shown in search results
	const siteNameJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'CubeDesk',
		url: `${baseUri}/`,
	});
	const brandingBase = `${resourceBase.replace(/\/$/, '')}/images/branding`;
	const assetUri = (fileName: string) => getAssetUri(distBase, fileName);
	const cssLink = isDev
		? '<link rel="stylesheet" href="/client/styles/index.css?direct">'
		: cssFiles.map((file) => `<link rel="stylesheet" href="${assetUri(file)}">`).join('');
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
		: `<script type="module" data-cfasync="false" src="${assetUri(jsFile)}"></script>`;

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
						background-color: rgb(${DEFAULT_THEME_COLORS.background_color});
						color: rgb(${DEFAULT_THEME_COLORS.text_color});
					}
				</style>
				<script type="text/javascript" data-cfasync="false">
					window.__STORE__ = ${STATE_PLACEHOLDER};
				</script>
				<script type="text/javascript" data-cfasync="false">
					${getBlockingThemeInitScript()}
				</script>
				${cssLink}
				${PRELOAD_PLACEHOLDER}
				${getTimerFontHeadTags()}
				<link rel="icon" href="${brandingBase}/favicon.ico" type="image/x-icon">
				<link rel="icon" href="${brandingBase}/favicon-32x32.png" type="image/png" sizes="32x32">
				<link rel="icon" href="${brandingBase}/favicon-16x16.png" type="image/png" sizes="16x16">
				<link rel="apple-touch-icon" href="${brandingBase}/apple-touch-icon.png" sizes="180x180">
				<link rel="manifest" href="${brandingBase}/site.webmanifest">
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

				${HEAD_TAGS_PLACEHOLDER}
			</head>
		
			<body>
				<div id="app">${APP_HTML_PLACEHOLDER}</div>
			</body>
			${clientScripts}
		</html>
	`;
};
