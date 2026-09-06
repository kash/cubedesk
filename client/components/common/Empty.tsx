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
export default function Empty({text, centered}: {text?: string; centered?: boolean}) {
	const moduleColor = useTheme('module_color');
	const icon = moduleColor.isDark ? 'empty_cube_white.svg' : 'empty_cube_black.svg';

	return (
		<EmptyState className={cn('w-full', {'h-full': centered})}>
			<EmptyHeader>
				<EmptyMedia>
					<img src={resourceUri(`/images/${icon}`)} alt="Empty result" className="size-10 opacity-30" />
				</EmptyMedia>
				<EmptyDescription>{text || 'No results yet'}</EmptyDescription>
			</EmptyHeader>
		</EmptyState>
	);
}
