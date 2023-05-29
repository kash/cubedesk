import React from 'react';
import {Lock} from '@phosphor-icons/react';
import Button from '../../common/button/Button';
import Tag from '../../common/tag/Tag';

export default function DemoRestricted() {
	return (
		<div className="mx-auto mt-16 mb-3 w-full max-w-md rounded-lg bg-module py-10 px-6">
			<div className="mx-auto flex flex-col items-center">
				<span className="mb-3 text-xl text-red-500">
					<Lock weight="fill" />
				</span>
				<Tag text="RESTRICTED" bold small backgroundColor="red" textColor="white" />
			</div>
			<div className="my mt-6 mb-10 text-center font-label text-xl text-text/70">
				This page is not available in demo mode. Please sign in or create a free account for access.
			</div>
			<div className="mx-auto flex flex-row justify-center gap-3">
				<Button large glow to="/login" text="Log in" />
				<Button large glow to="/signup" text="Sign up" primary />
			</div>
		</div>
	);
}
