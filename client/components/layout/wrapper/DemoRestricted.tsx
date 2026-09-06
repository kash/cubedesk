import AuthDialog from '@/components/login/AuthDialog';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Lock} from 'phosphor-react';
import React from 'react';

export default function DemoRestricted() {
	return (
		<div className="bg-module mx-auto mt-16 mb-3 w-full max-w-md rounded-lg px-6 py-10">
			<div className="mx-auto flex flex-col items-center">
				<span className="mb-3 text-xl text-red-500">
					<Lock weight="fill" />
				</span>
				<Badge size="sm" variant="destructive">
					RESTRICTED
				</Badge>
			</div>
			<div className="my font-label text-text/70 mt-6 mb-10 text-center text-xl">
				This page is not available in demo mode. Please sign in or create a free account for
				access.
			</div>
			<div className="mx-auto flex flex-row justify-center gap-3">
				<AuthDialog view="login">
					<Button variant="secondary" size="lg">
						{'Log in'}
					</Button>
				</AuthDialog>
				<AuthDialog view="signup">
					<Button variant="default" size="lg">
						{'Sign up'}
					</Button>
				</AuthDialog>
			</div>
		</div>
	);
}
