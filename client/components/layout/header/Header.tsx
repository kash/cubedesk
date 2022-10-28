import React, {ReactNode} from 'react';
import Helmet from 'react-helmet';
import {resourceUri} from '../../../util/storage';
import process from 'process';

interface Props {
	path: string;
	title?: string;
	description?: string;
	featuredImage?: string;
	children?: ReactNode;
}

const DEFAULT_TITLE = 'CubeDesk';
const DEFAULT_DESCRIPTION =
	"CubeDesk is an advanced Rubik's Cube timer that offers 1v1, alg trainer, leaderboards, mini-games, and more.";
const DEFAULT_FEATURED_IMAGE = resourceUri('/images/site/cubedesk_og_image.png');

export default function Header(props: Props) {
	const url = process.env.BASE_URI + props.path;
	const description = props.description || DEFAULT_DESCRIPTION;
	const title = props.title || DEFAULT_TITLE;
	const secureImage = props.featuredImage || DEFAULT_FEATURED_IMAGE;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:image" content={secureImage} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={secureImage} />
			<meta property="og:image:secure_url" content={secureImage} />
			{props.children}
		</Helmet>
	);
}
