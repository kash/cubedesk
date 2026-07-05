import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import {Lock} from 'phosphor-react';
import React from 'react';

export default function DemoRestricted() {
	return (
		<div className="bg-module mx-auto mt-16 mb-3 w-full max-w-md rounded-lg px-6 py-10">
			<div className="mx-auto flex flex-col items-center">
				<span className="mb-3 text-xl text-red-500">
					<Lock weight="fill" />
				</span>
				<Tag text="RESTRICTED" bold small backgroundColor="red" textColor="white" />
			</div>
			<div className="my font-label text-text/70 mt-6 mb-10 text-center text-xl">
				This page is not available in demo mode. Please sign in or create a free account for
				access.
			</div>
			<div className="mx-auto flex flex-row justify-center gap-3">
				<Button large glow to="/login" text="Log in" />
				<Button large glow to="/signup" text="Sign up" primary />
			</div>
		</div>
	);
}
