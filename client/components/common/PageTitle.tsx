import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	pageName: string;
	children?: ReactNode;
	actions?: ReactNode;
	icon?: string;
	titleClassName?: string;
	description?: string;
}

export default function PageTitle(props: Props) {
	const {pageName, children, actions, icon, titleClassName, description} = props;

	let iconBody: ReactNode = null;
	if (icon) {
		iconBody = <i className={`${icon} relative top-[3px] mr-3`} />;
	}

	return (
		<header className="relative mb-8 w-full">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<h1
					className={cn(
						'flex items-center font-sans text-3xl font-medium tracking-tight',
						titleClassName,
					)}
				>
					{iconBody}
					{pageName}
				</h1>
				{actions && <div className="ml-auto">{actions}</div>}
			</div>
			{description && (
				<p className="text-text/60 mt-2 text-base font-normal">{description}</p>
			)}
			{children && <div className="mt-6">{children}</div>}
		</header>
	);
}
