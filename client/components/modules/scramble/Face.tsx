import {COLOR_MAP} from '@/components/modules/scramble/ScrambleVisual';
import {ScrambleCubelet} from '@/util/vendor/scramble_layout';
import CSS from 'csstype';
import {flatten} from 'lodash';
import React, {ReactNode} from 'react';

interface Props {
	size?: number;
	data?: ScrambleCubelet[];
	width: string;
}

export default function Face(props: Props) {
	const {size, data, width} = props;

	if (!size || !data || !Array.isArray(data) || size ** 2 !== data.length) {
		return <div className="grid h-full max-h-full w-full max-w-full gap-[3px]" />;
	}

	const content: ReactNode[][] = [];
	for (let i = 0; i < size; i += 1) {
		const body: ReactNode[] = [];
		for (let k = 0; k < size; k += 1) {
			body.push(null);
		}
		content.push(body);
	}

	for (const cube of data) {
		const backgroundColor = COLOR_MAP[cube.color];
		const style: CSS.Properties = {
			backgroundColor,
		};

		content[cube.y][cube.x] = (
			<span className="box-border h-full w-full rounded-sm bg-module" key={`${cube.x}-${cube.y}`} style={style} />
		);
	}

	const flattenedContent = flatten(content);

	const style: CSS.Properties = {gridTemplateColumns: `repeat(${size}, 1fr)`};
	if (width) {
		style.width = width;
		style.height = width;
	}

	return (
		<div className="grid max-h-full max-w-full gap-[3px]" style={style}>
			{flattenedContent}
		</div>
	);
}
