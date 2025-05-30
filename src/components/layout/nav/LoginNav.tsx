import React from 'react';
import {SignIn} from '@phosphor-icons/react/dist/ssr';
import {Button} from '@/components/ui/button';
import {useMe} from '@/lib/util/hooks/useMe';
import Link from 'next/link';

interface Props {
	collapsed: boolean;
}

export default function LoginNav(props: Props) {
	const me = useMe();

	if (me) {
		return null;
	}

	if (props.collapsed) {
		return (
			<div className="mt-4">
				<Link href="/signup">
					<Button variant="secondary" size="icon">
						<SignIn weight="bold" />
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className="mt-4 flex w-full flex-row gap-2">
			<Link href="/login" className="w-full">
				<Button variant="secondary" className="w-full">
					Log in
				</Button>
			</Link>
			<Link href="/signup" className="w-full">
				<Button className="w-full">Sign up</Button>
			</Link>
		</div>
	);
}
