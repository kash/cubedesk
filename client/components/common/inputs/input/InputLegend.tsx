import {Badge} from '@/components/ui/badge';
import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	text?: string;
	tag?: boolean;
	icon?: string;
}

export default function InputLegend(props: Props) {
	const {text, icon, tag} = props;

	if (!text) {
		return null;
	}

	let body: ReactNode;

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

	return <div className="flex flex-row items-center">{body}</div>;
}
