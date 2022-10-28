import {HelmetData} from 'react-helmet';

export interface HtmlPagePayload {
	html: string;
	cleanState: string;
	helmet: HelmetData;
	distBase: string;
	resourceBase: string;
	cssFileName: string;
	jsFileName: string;
}

export default (payload: HtmlPagePayload) => {
	const {html, cleanState, helmet, distBase, resourceBase, cssFileName, jsFileName} = payload;

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<link rel="preconnect" href="https://fonts.gstatic.com">
				<link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans&family=JetBrains+Mono&family=Kiwi+Maru&family=Montserrat&family=Poppins&family=Roboto+Mono&family=Space+Mono&display=swap">
				<link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,900&display=swap">
				<link rel="preload stylesheet" href="${resourceBase}/phosphor.css" >
				<link rel="stylesheet" href="${distBase}/${cssFileName}">
				<link rel="shortcut icon" href="${resourceBase}/favicon.ico" type="image/x-icon">  
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
				<script async defer data-domain="cubedesk.io" src="https://plausible.io/js/plausible.js"></script>
				<script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-354788011"></script>
				<script>
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'AW-354788011');
				</script>
	
				<title>CubeDesk</title>
				
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
			</head>
		
			<body>
				<div id="app">${html}</div>
			</body>
			<script type="text/javascript">
				window.__STORE__ = ${cleanState};
			</script>
			<script src="${distBase}/${jsFileName}"></script>
		</html>
	`;
};
