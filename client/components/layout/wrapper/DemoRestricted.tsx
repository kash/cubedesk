import React from 'react';
import Button from '../../common/button/Button';
import Tag from '../../common/tag/Tag';

export default function DemoRestricted() {
	return (
		<div className="mt-16 mb-3 mx-auto py-10 px-6 bg-module w-full max-w-md rounded-lg">
			<div className="flex mx-auto flex-col items-center">
				<i className="ph-lock-fill text-red-500 text-xl mb-3" />
				<Tag text="RESTRICTED" bold small backgroundColor="red" textColor="white" />
			</div>
			<div className="text-text/70 mt-6 mb-10 text-xl font-label my text-center">
				This page is not available in demo mode. Please sign in or create a free account for access.
			</div>
			<div className="flex flex-row gap-3 mx-auto justify-center">
				<Button large glow to="/login" text="Log in" />
				<Button large glow to="/signup" text="Sign up" primary />
			</div>
		</div>
	);
}
