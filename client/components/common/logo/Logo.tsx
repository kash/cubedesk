import React from 'react';

import {cn} from '@/util/cn';
import {resourceUri} from '@/util/storage';

interface LogoProps {
	large?: boolean;
	dark?: boolean;
}

export  function LogoBrandmark(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return     `logo_${color}.svg`;
	}

		const fileName = getFileName(props.dark ? 'black' : 'white');

	return <img className="h-auto opacity-90 w-[95px]" src={resourceUri(`/images/${fileName}`)} alt="CubeDesk Logo" />;
}

export function LogoLockup(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return props.large ? `cube_desk_logo_${color}.svg` : `logo_${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	return <img className="h-auto opacity-90 w-[150px]" src={resourceUri(`/images/${fileName}`)} alt="CubeDesk Logo" />;
}
