import React, {useEffect} from 'react';
import './LoadingCover.scss';
import block from '../../../styles/bem';
import {getLocalStorage} from '../../../util/data/local_storage';
import CSS from 'csstype';
import LoadingIcon from '../../common/LoadingIcon';

const b = block('loading-cover');

interface Props {
	fadeOut?: boolean;
}

export default function LoadingCover(props: Props) {
	const {fadeOut} = props;

	const [style, setStyle] = React.useState<CSS.Properties>({});

	useEffect(() => {
		if (fadeOut || typeof localStorage === 'undefined') return;

		const backgroundColor = getLocalStorage('background_color');
		const textColor = getLocalStorage('text_color');

		if (backgroundColor && backgroundColor.includes(',')) {
			style.backgroundColor = `rgb(${backgroundColor})`;
		}
		if (textColor && textColor.includes(',')) {
			style.color = `rgb(${textColor})`;
		}

		setStyle(style);
	}, [typeof localStorage]);

	return (
		<div
			style={style}
			className={b({
				fadeOut,
			})}
		>
			<span className="text-3xl text-slate-600">
				<LoadingIcon />
			</span>
		</div>
	);
}
