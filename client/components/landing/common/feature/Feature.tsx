import React, {ReactNode} from 'react';
import CSS from 'csstype';
import FeatureText, {IFeatureTextProps} from '@/components/landing/common/feature/FeatureText';
import FeatureCircles from '@/components/landing/common/feature/FeatureCircles';

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

	let imgD: ReactNode = null;

	if (imgSrc) {
		imgD = (
			<img
				className={['relative z-10 block w-full box-border rounded-[13px] leading-none', className || ''].join(
					' '
				)}
				src={imgSrc}
				alt={imgAlt}
			/>
		);
	}

	const borderStyle: CSS.Properties = {
		background: `linear-gradient(to right, ${primaryColor} 0%, ${secondaryColor} 100%)`,
	};

	let visual = children;
	if (!children) {
		visual = (
			<div className="relative z-10 w-full">
				<div
					className={[
						'relative z-[100] m-auto box-border w-full rounded-[17px] bg-transparent p-[7px]',
						shadow
							? 'shadow-[0_5px_25px_rgba(0,0,0,0.1),0_8px_30px_rgba(0,0,0,0.1),0_12px_35px_rgba(0,0,0,0.1)]'
							: '',
					].join(' ')}
					style={borderStyle}
				>
					{imgD}
				</div>
			</div>
		);
	}

	let dots: ReactNode = null;
	if (dotsPos) {
		const dotsPositionClasses = {
			topLeft: 'left-[-40px] top-0',
			topRight: 'right-[-40px] top-0',
			bottomLeft: 'bottom-0 left-[-40px]',
			bottomRight: 'bottom-0 right-[-40px]',
		};

		dots = (
			<span
				style={{color: primaryColor}}
				className={`pattern-dots-xl absolute z-0 h-[45%] w-[45%] rotate-45 ${dotsPositionClasses[dotsPos]}`}
			/>
		);
	}

	let circles: ReactNode = null;
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

	const bodyClasses = [
		'flex w-[95%] max-w-[1400px] items-center justify-between max-[1000px]:flex-col-reverse',
		vertical ? 'flex-col-reverse' : switchText ? 'flex-row-reverse' : 'flex-row',
	].join(' ');

	const visualClasses = [
		'flex items-center justify-center max-[1000px]:w-full',
		vertical ? 'mt-[30px] w-full' : 'w-[60%]',
	].join(' ');

	const textClasses = [
		'max-[1000px]:mb-[50px] max-[1000px]:w-full',
		vertical ? 'mb-0 w-full' : 'w-1/3',
	].join(' ');

	return (
		<div
			className={[
				'flex w-full items-center justify-center overflow-hidden py-[100px] max-[1000px]:py-[50px]',
				odd ? 'bg-[#f6f6f6]' : '',
				dark ? 'bg-[#121a24]' : '',
				className || '',
			].join(' ')}
		>
			<div className={bodyClasses}>
				<div className={visualClasses}>
					<div className="relative flex max-w-[1000px] items-center justify-center">
						{visual}
						{dots}
						{circles}
					</div>
				</div>
				<div className={textClasses}>
					<FeatureText whiteText={dark} {...props} />
				</div>
			</div>
		</div>
	);
}
