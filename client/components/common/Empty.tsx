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
export default function Empty({
	text,
	centered,
	compact,
}: {
	text?: string;
	centered?: boolean;
	compact?: boolean;
}) {
	const moduleColor = useTheme('module_color');
	const icon = moduleColor.isDark ? 'empty_cube_white.svg' : 'empty_cube_black.svg';

	return (
		<EmptyState
			className={cn('w-full', {'h-full': centered, 'gap-0 p-0 md:p-0': compact})}
			title={compact ? text || 'No results yet' : undefined}
		>
			<EmptyHeader>
				<EmptyMedia className={cn({'mb-0': compact})}>
					<img
						src={resourceUri(`/images/${icon}`)}
						alt={compact ? text || 'No results yet' : 'Empty result'}
						className="size-10 opacity-30"
					/>
				</EmptyMedia>
				{!compact && <EmptyDescription>{text || 'No results yet'}</EmptyDescription>}
			</EmptyHeader>
		</EmptyState>
	);
}
