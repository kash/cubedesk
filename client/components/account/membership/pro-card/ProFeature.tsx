import React, {ReactNode} from 'react';
import CSS from 'csstype';
import classNames from 'classnames';

interface Props {
	icon: React.ReactElement;
	name: string;
	iconColor?: string;
	description?: string;
	hideDetails?: boolean;
	imgSrc?: string;
	className?: string;
	children?: ReactNode;
}

export default function ProFeature(props: Props) {
	const {icon, name, description, iconColor, imgSrc, className, children, hideDetails} = props;

	const legendStyle: CSS.Properties = {};
	if (iconColor) {
		legendStyle.color = iconColor;
	}

	let img: ReactNode = null;
	if (imgSrc) {
		img = (
			<img
				className="mx-auto mt-1.5 table h-auto w-full max-w-sm rounded-md border-2 border-solid border-tmo-module/10"
				src={imgSrc}
				alt={name}
			/>
		);
	}

	return (
		<div className={classNames('py-4', className)}>
			<legend className="flex flex-row items-center gap-2 pr-1.5 text-2xl text-secondary" style={legendStyle}>
				{icon}
				<p className="m-0 inline-block text-xl font-medium leading-6 opacity-100">{name}</p>
			</legend>
			<div className={classNames('mt-2.5 table', {hidden: hideDetails})}>
				{description && <p>{description}</p>}
				{img}
				{children}
			</div>
		</div>
	);
}
