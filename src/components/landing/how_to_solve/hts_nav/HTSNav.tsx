import React from 'react';
import HTSNavItem, {HTSNavItemProps} from './HTSNavItem';
import {useParams} from 'next/navigation';

const HTS_NAV_ITEMS: HTSNavItemProps[] = [
	{id: 'notation', stepNumber: 1, stepName: 'Notation'},
	{id: 'step2', stepNumber: 2, stepName: 'Step 2'},
	{id: 'step3', stepNumber: 3, stepName: 'Step 3'},
	{id: 'step4', stepNumber: 4, stepName: 'Step 4'},
];

export default function HTSNav() {
	const params = useParams();

	const navItems = [];

	for (const item of HTS_NAV_ITEMS) {
		const selected = params.stepId === item.id;

		navItems.push(<HTSNavItem key={item.stepName} selected={selected} {...item} />);
	}

	return <div className="">{navItems}</div>;
}
