import React, {ReactNode} from 'react';
import './Feature.scss';
import SignUpButton from '../signup_button/SignUpButton';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import FeatureText, {IFeatureTextProps} from './feature_text/FeatureText';
import FeatureCircles from './feature_circles/FeatureCircles';

const b = block('landing-feature');

export type DecorationPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface Props {
	imgSrc?: string;
	odd?: boolean;
	imgAlt?: string;
	primaryColor: string;
	secondaryColor: string;
	dark?: boolean;
	shadow?: boolean;
	circlesPos?: DecorationPosition;
	circleCount?: number;
	dotsPos?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
	className?: string;
	vertical?: boolean;
	switchText?: boolean;
	children?: ReactNode;
}

export default function Feature(props: Props & IFeatureTextProps) {
	const {
		imgSrc,
		odd,
		dark,
		children,
		imgAlt,
		primaryColor,
		secondaryColor,
		circlesPos,
		circleCount,
		shadow,
		dotsPos,
		className,
		vertical,
		switchText,
	} = props;

	let imgD = null;

	if (imgSrc) {
		imgD = <img className={className} src={imgSrc} alt={imgAlt} />;
	}

	const borderStyle: CSS.Properties = {
		background: `linear-gradient(to right, ${primaryColor} 0%, ${secondaryColor} 100%)`,
	};

	let visual = children;
	if (!children) {
		visual = (
			<div className={b('img')}>
				<div
					className={b('img-border', {
						shadow,
					})}
					style={borderStyle}
				>
					{imgD}
				</div>
			</div>
		);
	}

	let dots = null;
	if (dotsPos) {
		dots = <span style={{color: primaryColor}} className={b('img-dots', {pos: dotsPos}).mix('pattern-dots-xl')} />;
	}

	let circles = null;
	if (circlesPos) {
		circles = (
			<FeatureCircles
				position={circlesPos}
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
				featureTitle={props.title}
				count={circleCount || 4}
			/>
		);
	}

	return (
		<div
			className={b({
				switch: switchText,
				odd,
				dark,
				vertical,
			}).mix(className)}
		>
			<div className={b('body')}>
				<div className={b('visual')}>
					<div className={b('visual-body')}>
						{visual}
						{dots}
						{circles}
					</div>
				</div>
				<div className={b('text')}>
					<FeatureText whiteText={dark} {...props} />
				</div>
			</div>
		</div>
	);
}
