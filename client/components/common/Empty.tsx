import {
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	Empty as EmptyState,
} from '@/components/ui/empty';
import {cn} from '@/util/cn';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function Empty({
	text,
	imageAlt,
	centered,
	compact,
}: {
	text?: string;
	imageAlt?: string;
	centered?: boolean;
	compact?: boolean;
}) {
	const {t} = useTranslation();
	const moduleColor = useTheme('module_color');
	const emptyText = text ?? t('common.noResultsYet');
	const icon = moduleColor.isDark ? 'empty_cube_white.svg' : 'empty_cube_black.svg';

	return (
		<EmptyState
			className={cn('w-full', {'h-full': centered, 'gap-0 p-0 md:p-0': compact})}
			title={compact ? emptyText : undefined}
		>
			<EmptyHeader>
				<EmptyMedia className={cn({'mb-0': compact})}>
					<img
						src={resourceUri(`/images/${icon}`)}
						alt={imageAlt ?? emptyText}
						className="size-10 opacity-30"
					/>
				</EmptyMedia>
				{!compact && <EmptyDescription>{emptyText}</EmptyDescription>}
			</EmptyHeader>
		</EmptyState>
	);
}
