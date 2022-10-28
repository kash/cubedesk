import React from 'react';
import {flatten} from 'lodash';
import './Face.scss';
import block from '../../../../styles/bem';
import {COLOR_MAP} from '../ScrambleVisual';
import CSS from 'csstype';
import {ScrambleCubelet} from '../../../../util/vendor/scramble_layout';
import {useTheme} from '../../../../util/hooks/useTheme';

const b = block('scramble-face');

interface Props {
	size?: number;
	data?: ScrambleCubelet[];
	width: string;
}

export default function Face(props: Props) {
	const {size, data, width} = props;

	const moduleTheme = useTheme('module_color');

	if (!data || !Array.isArray(data) || size ** 2 !== data.length) {
		return <div className={b()} />;
	}

	let content = [];
	for (let i = 0; i < size; i += 1) {
		const body = [];
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

		content[cube.y][cube.x] = <span key={`${cube.x}-${cube.y}`} style={style} />;
	}

	content = flatten(content);

	const style: CSS.Properties = {gridTemplateColumns: `repeat(${size}, 1fr)`};
	if (width) {
		style.width = width;
		style.height = width;
	}

	return (
		<div className={b()} style={style}>
			{content}
		</div>
	);
}
