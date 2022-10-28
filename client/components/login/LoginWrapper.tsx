import React from 'react';
import Login from './login/Login';
import SignUp from './sign_up/SignUp';
import './LoginWrapper.scss';
import Forgot from './forgot/Forgot';
import {resourceUri} from '../../util/storage';
import {useRouteMatch} from 'react-router-dom';
import block from '../../styles/bem';

const b = block('login');

export default function LoginWrapper() {
	const match = useRouteMatch();
	const path = match.path;

	let body = null;
	if (path.startsWith('/login')) {
		body = <Login />;
	} else if (path.startsWith('/signup')) {
		body = <SignUp />;
	} else if (path.startsWith('/forgot')) {
		body = <Forgot />;
	}

	return (
		<div className={b('wrapper')}>
			<a href="/home">
				<img src={resourceUri('/images/cube_desk_logo_white.svg')} alt="CubeDesk Logo" />
			</a>
			{body}
		</div>
	);
}
