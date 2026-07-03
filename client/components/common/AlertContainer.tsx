import React, {ReactNode} from 'react';
import {CheckSquare, Warning, WarningOctagon, Info} from 'phosphor-react';
import {cn} from '@/util/cn';
import Loading from '@/components/common/Loading';

export type ElementGenericType = 'success' | 'error' | 'warning' | 'info';

interface Props {
	fill?: boolean;
	header?: boolean;
	loading?: boolean;
	body?: ReactNode;
	type: ElementGenericType;
	actionBody?: ReactNode;
}

export default function AlertContainer(props: Props) {
	const {header, fill, loading, body, type, actionBody} = props;

	const wrapperClass = cn(
		'm-auto flex w-[95%] items-center justify-center',
		fill && 'h-full min-h-screen w-full max-w-none',
	);
	const containerClass = 'flex w-full max-w-125 flex-col items-center';

	let icon: ReactNode = null;

	if (loading) {
		return (
			<div className={wrapperClass}>
				<div className={containerClass}>
					<Loading />
				</div>
			</div>
		);
	}

	switch (type) {
		case 'success':
			icon = <CheckSquare weight="fill" />;
			break;
		case 'error':
			icon = <Warning weight="fill" />;
			break;
		case 'warning':
			icon = <WarningOctagon weight="fill" />;
			break;
		case 'info':
			icon = <Info weight="fill" />;
			break;
	}

	let headerElm: ReactNode = null;
	if (header) {
		headerElm = <h4 className="text-text mt-1.25 mb-5 text-xl">{header}</h4>;
	}

	let textElem: ReactNode = null;
	if (body) {
		textElem = (
			<div className="text-text [&_a]:text-text text-center [&_a]:underline">{body}</div>
		);
	}

	let actionElem: ReactNode = null;
	if (actionBody) {
		actionElem = <div className="mt-3.75">{actionBody}</div>;
	}

	return (
		<div className={wrapperClass}>
			<div className={containerClass}>
				{icon}
				{headerElm}
				{textElem}
				{actionBody}
				{actionElem}
			</div>
		</div>
	);
}
