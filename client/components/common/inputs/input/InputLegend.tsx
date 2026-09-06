import {Badge} from '@/components/ui/badge';
import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	text?: string;
	tag?: boolean;
	icon?: string;
	optional?: boolean;
}

export default function InputLegend(props: Props) {
	const {text, icon, tag, optional} = props;

	if (!text) {
		return null;
	}

	let body: ReactNode;
	let optionalSpan: ReactNode = null;

	if (tag) {
		body = (
			<Badge size="sm" variant="unfilled">
				{text}
				{icon}
			</Badge>
		);
	} else {
		let iconBody: ReactNode = null;
		if (icon) {
			iconBody = <i className={cn(icon, 'ml-1.5 text-inherit')} />;
		}

		body = (
			<Label asChild>
				<span>
					{text}
					{iconBody}
				</span>
			</Label>
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
