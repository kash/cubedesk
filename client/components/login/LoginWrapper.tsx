import Forgot from '@/components/login/Forgot';
import Login from '@/components/login/Login';
import SignUp from '@/components/login/SignUp';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function LoginWrapper() {
	const backgroundColor = useTheme('background_color');
	const logoColor = backgroundColor.isDark ? 'white' : 'black';
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
			<a
				className="mb-8 mt-12 flex min-h-11 shrink-0 items-center rounded-md focus-visible:ring-2 focus-visible:ring-current sm:mt-[100px]"
				href="/"
			>
				<img
					className="h-auto w-[180px] sm:w-[200px]"
					src={resourceUri(`/images/branding/cubedesk-lockup-${logoColor}.svg`)}
					alt="CubeDesk Logo"
				/>
			</a>
			{body}
		</div>
	);
}
