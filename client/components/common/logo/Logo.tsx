import React from 'react';
import './Logo.scss';
import {resourceUri} from '../../../util/storage';

interface LogoProps {
	large?: boolean;
	dark?: boolean;
}

export default function Logo(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return props.large ? `cube_desk_logo_${color}.svg` : `logo_${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	let className = 'cd-logo';

	if (props.large) {
		className += ` cd-logo--large`;
	}

	return <img className={className} src={resourceUri(`/images/${fileName}`)} alt="CubeDesk Logo" />;
}
