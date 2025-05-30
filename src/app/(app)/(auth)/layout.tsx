import React from 'react';
import block from '../../../styles/bem';
import {resourceUri} from '../../../lib/util/storage';
import '../../components/login/LoginWrapper.scss';

const b = block('login');

export default function AuthLayout({children}: {children: React.ReactNode}) {
	return (
		<div className={b('wrapper')}>
			<a href="/home">
				<img src={resourceUri('/images/cube_desk_logo_white.svg')} alt="CubeDesk Logo" />
			</a>
			{children}
		</div>
	);
}
