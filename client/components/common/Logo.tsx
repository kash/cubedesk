import {resourceUri} from '@/util/storage';

interface LogoProps {
	dark?: boolean;
}

export function LogoBrandmark(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return `logo_${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	return (
		<img
			className="h-auto w-full"
			src={resourceUri(`/images/${fileName}`)}
			alt="CubeDesk Logo"
		/>
	);
}

export function LogoLockup(props: LogoProps) {
	function getFileName(color: 'white' | 'black') {
		return `cube_desk_logo_${color}.svg`;
	}

	const fileName = getFileName(props.dark ? 'black' : 'white');

	return (
		<img
			className="h-auto w-full"
			src={resourceUri(`/images/${fileName}`)}
			alt="CubeDesk Logo"
		/>
	);
}
