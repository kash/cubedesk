import LandingNav from '@/components/landing/common/LandingNav';
import React from 'react';

export default function Landing(props: any) {
	const {children} = props;

	return (
		<div className="box-border h-full w-full bg-white pt-[50px]">
			<LandingNav />
			{children}
		</div>
	);
}
