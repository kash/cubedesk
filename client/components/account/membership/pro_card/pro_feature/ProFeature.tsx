import React, {ReactNode} from 'react';
import './ProFeature.scss';
import block from '../../../../../styles/bem';
import CSS from 'csstype';

const b = block('pro-feature');

interface Props {
	icon: string;
	name: string;
	iconColor?: string;
	description?: string;
	hideDetails?: boolean;
	imgSrc?: string;
	children?: ReactNode;
}

export default function ProFeature(props: Props) {
	const {icon, name, description, iconColor, imgSrc, children, hideDetails} = props;

	const legendStyle: CSS.Properties = {};
	if (iconColor) {
		legendStyle.color = iconColor;
	}

	let img = null;
	if (imgSrc) {
		img = <img src={imgSrc} alt={name} />;
	}

	return (
		<div className={b({hideDetails})}>
			<legend style={legendStyle}>
				<i className={icon} />
				<p>{name}</p>
			</legend>
			<div className={b('details')}>
				{description && <p>{description}</p>}
				{img}
				{children}
			</div>
		</div>
	);
}
