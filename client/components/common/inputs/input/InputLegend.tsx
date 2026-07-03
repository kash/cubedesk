import React, {ReactNode} from 'react';

import Tag from '@/components/common/Tag';
import {cn} from '@/util/cn';

interface Props {
	text?: string;
	tag?: boolean;
	large?: boolean;
	icon?: string;
	optional?: boolean;
}

export default function InputLegend(props: Props) {
	const {text, large, icon, tag, optional} = props;

	if (!text) {
		return null;
	}

	let body: ReactNode;
	let optionalSpan: ReactNode = null;

	if (tag) {
		body = <Tag icon={icon} text={text} small />;
	} else {
		let iconBody: ReactNode = null;
		if (icon) {
			iconBody = <i className={cn(icon, 'ml-1.5 text-inherit')} />;
		}

		body = (
			<legend
				className={cn('text-text text-base font-semibold', {'text-lg font-bold': large})}
			>
				{text}
				{iconBody}
			</legend>
		);
	}

	if (optional) {
		optionalSpan = (
			<span className="text-text relative m-0 ml-2 table p-0 text-sm font-normal italic opacity-60">
				Optional
			</span>
		);
	}

	return (
		<div className="flex flex-row items-center">
			{body}
			{optionalSpan}
		</div>
	);
}
