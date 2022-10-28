import React from 'react';
import './Empty.scss';
import block from '../../../styles/bem';
import {useTheme} from '../../../util/hooks/useTheme';
import {resourceUri} from '../../../util/storage';

const b = block('empty');

interface Props {
	text?: string;
}

export default function Empty(props: Props) {
	const {text} = props;
	const moduleColor = useTheme('module_color');

	let body = null;
	if (text) {
		body = <p>{text}</p>;
	}

	let img = <img src={resourceUri('/images/empty_cube_white.svg')} alt="Empty result" />;
	if (!moduleColor.isDark) {
		img = <img src={resourceUri('/images/empty_cube_black.svg')} alt="Empty result" />;
	}

	return (
		<div className={b()}>
			{img}
			{body}
		</div>
	);
}
