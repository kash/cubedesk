import React, {useMemo} from 'react';
import {sum} from 'lodash';
import {DecorationPosition} from '@/components/landing/common/feature/Feature';
import Chance from 'chance';
import {getHashCode} from '@/util/strings/util';

interface Props {
	position: DecorationPosition;
	primaryColor: string;
	secondaryColor: string;
	featureTitle: string;
	count: number;
	xOffset?: number;
	yOffset?: number;
}

// x, y, zoom, opacity
type presetPosition = [number, number, number, number];

const presetPositions: presetPosition[] = [
	[70, 70, 2.5, 0.2],
	[25, -170, 2, 0.4],
	[90, 0, 1, 0.5],
	[-90, 70, 1.1, 0.4],
	[90, -180, 1, 0.6],
	[45, 70, 0.8, 0.7],
	[-40, 30, 0.6, 0.8],
	[50, -150, 0.4, 0.8],
];

export default function FeatureCircles(props: Props) {
	const {position, count, featureTitle, xOffset, yOffset} = props;

	const seed = String(getHashCode(featureTitle));

	const chance = new Chance(seed);
	const col = chance.integer({min: 0, max: 1});

	const positions = useMemo(() => {
		return [...presetPositions].sort((a, b) => {
			const total = sum(a);
			const rand = chance.integer({min: total, max: total + 1}) - total;
			return 0.5 - rand;
		});
	}, [seed, count]);

	const circles = [];
	for (let i = 0; i < Math.min(count, positions.length); i++) {
		const primary = col === 0 && i % 2 === 0;
		const color = primary ? props.primaryColor : props.secondaryColor;

		circles.push(
			<span
				key={i}
				className="absolute flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-solid bg-transparent"
				style={{
					color,
					left: -positions[i][0] + (xOffset || 0),
					top: -positions[i][1] + (yOffset || 0),
					zoom: positions[i][2],
					opacity: positions[i][3],
				}}
			/>
		);
	}

	const positionClasses: Record<DecorationPosition, string> = {
		topLeft: 'left-0 top-0',
		topRight: 'right-0 top-0 rotate-90',
		bottomLeft: 'bottom-0 left-0 -rotate-90',
		bottomRight: 'bottom-0 right-0 rotate-180',
	};

	return <div className={`absolute z-0 ${positionClasses[position]}`}>{circles}</div>;
}
