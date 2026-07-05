import Forgot from '@/components/login/Forgot';
import Login from '@/components/login/Login';
import SignUp from '@/components/login/SignUp';
import {resourceUri} from '@/util/storage';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function LoginWrapper() {
	const match = useRouteMatch();
	const path = match.path;

	let body: React.ReactNode = null;
	if (path.startsWith('/login')) {
		body = <Login />;
	} else if (path.startsWith('/signup')) {
		body = <SignUp />;
	} else if (path.startsWith('/forgot')) {
		body = <Forgot />;
	}

	return (
		<div className="flex h-full min-h-screen w-full flex-col items-center justify-start bg-background">
			<a href="/">
				<img
					className="mb-[30px] mt-[100px] w-[200px]"
					src={resourceUri('/images/cube_desk_logo_white.svg')}
					alt="CubeDesk Logo"
				/>
			</a>
			{body}
		</div>
	);
}
