import {Badge} from '@/components/ui/badge';
import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';
import {useOptionalI18n} from '@/i18n';

interface Props {
	text?: string;
	tag?: boolean;
	icon?: string;
	optional?: boolean;
}

export default function InputLegend(props: Props) {
	const {text, icon, tag, optional} = props;
	const {t} = useOptionalI18n();
	const translatedText = text ? t(text) : text;

	if (!text) {
		return null;
	}

	let body: ReactNode;
	let optionalSpan: ReactNode = null;

	if (tag) {
		body = (
			<Badge size="sm" variant="unfilled">
				{translatedText}
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
					{translatedText}
					{iconBody}
				</span>
			</Label>
		);
	}

	if (optional) {
		optionalSpan = (
			<span className="text-text relative m-0 ml-2 table p-0 text-sm font-normal italic opacity-60">
				{t('Optional')}
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
