import React from 'react';
import Login from './login/Login';
import SignUp from './sign_up/SignUp';
import './LoginWrapper.scss';
import Forgot from './forgot/Forgot';
import {resourceUri} from '../../lib/util/storage';
import {usePathname} from 'next/navigation';
import block from '../../styles/bem';

const b = block('login');

export default function LoginWrapper() {
	const pathname = usePathname();

	let body = null;
	if (pathname.startsWith('/login')) {
		body = <Login />;
	} else if (pathname.startsWith('/signup')) {
		body = <SignUp />;
	} else if (pathname.startsWith('/forgot')) {
		body = <Forgot />;
	}

	return (
		<div className={b('wrapper')}>
			<a href="/">
				<img src={resourceUri('/images/cube_desk_logo_white.svg')} alt="CubeDesk Logo" />
			</a>
			{body}
		</div>
	);
}
