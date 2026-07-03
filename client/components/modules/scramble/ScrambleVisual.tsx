import React, {useMemo} from 'react';
import {layoutScramble} from '@/util/vendor/scramble_layout';
import Face from '@/components/modules/scramble/Face';
import {getCubeTypeInfoById, getScrambleTypeById} from '@/util/cubes/util';

export const COLOR_MAP = {
	O: '#FF9826',
	G: '#43FF43',
	R: '#FF4343',
	B: '#246BFD',
	Y: '#FFFF49',
	W: '#FFFFFF',
	D: '#3F464F',
};

interface Props {
	cubeType: string;
	scramble: string;
	width?: string;
	frontFace?: boolean;
}

export default function ScrambleVisual(props: Props) {
	const {cubeType, scramble, frontFace} = props;

	const width = props.width || '100%';

	function scrambleIsSupported(scrambleType) {
		return ['222', '333', '333bl', '444', '555', '666', '777'].indexOf(scrambleType) > -1;
	}

	const ct = getCubeTypeInfoById(cubeType);
	const cubeScramble = getScrambleTypeById(ct?.scramble);

	const visual = useMemo(() => {
		if (!cubeType || !scramble) {
			return;
		}

		if (!scrambleIsSupported(cubeScramble.id)) {
			return;
		}

		if (scramble) {
			return layoutScramble(scramble, cubeScramble.size);
		}
	}, [cubeType, scramble]);

	const cubeSize = cubeScramble?.size;

	const supported = scrambleIsSupported(cubeScramble?.id);
	if (!supported) {
		return <div className="flex h-full w-full items-center justify-center text-text opacity-50">No visual</div>;
	}

	if (!visual) {
		return null;
	}

	if (frontFace) {
		return (
			<div className="flex h-full w-full items-center justify-center">
				<Face width={width} key={`6-${cubeSize}`} size={cubeSize} data={visual.F} />
			</div>
		);
	}

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div
				className="grid aspect-[4/3] w-full max-w-[320px] grid-cols-4 grid-rows-3 gap-[3%]"
				key={`body-${cubeSize}`}
			>
				<Face width={width} key={`1-${cubeSize}`} />
				<Face width={width} key={`2-${cubeSize}`} size={cubeSize} data={visual.U} />
				<Face width={width} key={`3-${cubeSize}`} />
				<Face width={width} key={`4-${cubeSize}`} />
				<Face width={width} key={`5-${cubeSize}`} size={cubeSize} data={visual.L} />
				<Face width={width} key={`6-${cubeSize}`} size={cubeSize} data={visual.F} />
				<Face width={width} key={`7-${cubeSize}`} size={cubeSize} data={visual.R} />
				<Face width={width} key={`8-${cubeSize}`} size={cubeSize} data={visual.B} />
				<Face width={width} key={`9-${cubeSize}`} />
				<Face width={width} key={`10-${cubeSize}`} size={cubeSize} data={visual.D} />
				<Face width={width} key={`11-${cubeSize}`} />
				<Face width={width} key={`12-${cubeSize}`} />
			</div>
		</div>
	);
}
