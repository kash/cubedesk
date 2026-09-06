import {resourceUri} from '@/util/storage';

interface LogoProps {
	dark?: boolean;
}

export function LogoBrandmark(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return `cubedesk-logomark-${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	return (
		<img
			className="h-auto w-full"
			src={resourceUri(`/images/branding/${fileName}`)}
			alt="CubeDesk Logo"
		/>
	);
}

export function LogoLockup(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return `cubedesk-lockup-${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	return (
		<img
			className="h-auto w-full"
			src={resourceUri(`/images/branding/${fileName}`)}
			alt="CubeDesk Logo"
		/>
	);
}
