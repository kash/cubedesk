import React, {ReactNode} from 'react';

interface Props {
	title?: string;
	children: ReactNode;
}

export default function TextBody(props: Props) {
	const {children, title} = props;

	let titleBody: ReactNode = null;
	let titleDivider: ReactNode = null;

	if (title) {
		titleBody = <h1 className="text-[1.7rem]">{title}</h1>;
		titleDivider = <hr className="mx-auto my-4 h-0.75 w-full border-none bg-button" />;
	}

	return (
		<div>
			{titleBody}
			{titleDivider}
			<div className="[&_p]:font-label [&_p]:text-[1.1rem] [&_p]:opacity-95 [&_a]:border-b-[3px] [&_a]:border-[rgba(var(--link-color),0.5)] [&_a]:font-bold [&_a]:text-[rgb(var(--link-color))] [&_img]:mx-auto [&_img]:my-12 [&_img]:w-[95%] [&_img]:max-w-180 [&_img]:rounded-[10px] [&_img]:shadow-[0_1px_1px_hsla(0,0%,0%,0.075),0_2px_2px_hsla(0,0%,0%,0.075),0_4px_4px_hsla(0,0%,0%,0.075),0_8px_8px_hsla(0,0%,0%,0.075),0_16px_16px_hsla(0,0%,0%,0.075)]">
				{children}
			</div>
		</div>
	);
}
