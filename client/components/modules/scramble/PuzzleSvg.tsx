import {COLOR_MAP} from '@/components/modules/scramble/ScrambleVisual';
import {cn} from '@/util/cn';
import {PuzzleVisual} from '@/util/scramble/visual/geometry';
import CSS from 'csstype';
import React from 'react';

interface Props {
	visual: PuzzleVisual;
	width?: string;
	frontFace?: boolean;
}

export default function PuzzleSvg(props: Props) {
	const {visual, width, frontFace} = props;

	const style: CSS.Properties = {};
	if (frontFace && width) {
		style.width = width;
		style.height = width;
	}

	return (
		<svg
			viewBox={`0 0 ${visual.width} ${visual.height}`}
			className={cn('max-h-full', {
				'h-full w-full': frontFace && !width,
				'w-full max-w-[320px]': !frontFace,
			})}
			style={style}
		>
			{visual.polygons.map((polygon, index) => {
				const color = COLOR_MAP[polygon.color];
				return (
					<polygon
						key={index}
						points={polygon.points.map((point) => point.join(',')).join(' ')}
						fill={color}
						stroke={color}
						strokeWidth={visual.round * 2}
						strokeLinejoin="round"
					/>
				);
			})}
			{visual.lines.map((line, index) => (
				<line
					key={`line-${index}`}
					x1={line.from[0]}
					y1={line.from[1]}
					x2={line.to[0]}
					y2={line.to[1]}
					className="stroke-text/50"
					strokeWidth={visual.round * 1.5}
					strokeLinecap="round"
				/>
			))}
		</svg>
	);
}
