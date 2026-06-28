import React from 'react';
import {Check} from 'phosphor-react';
import SignUpButton from '@/components/landing/common/SignUpButton';

interface FeatureItem {
	text: string;
	icon?: JSX.Element;
}

export interface IFeatureTextProps {
	title: string;
	description?: string;
	primaryColor?: string;
	secondaryColor?: string;
	whiteText?: boolean;
	vertical?: boolean;
	icon?: JSX.Element;
	signUpButton?: boolean;
	featureList?: FeatureItem[];
}

export default function FeatureText(props: IFeatureTextProps) {
	const {vertical, signUpButton, primaryColor, whiteText, secondaryColor, featureList, title, description, icon} =
		props;

	let headerD = null;
	let descriptionD = null;

	let featureListDiv = null;
	if (featureList) {
		featureListDiv = (
			<div className="mb-[15px]">
				<ul className="mt-[5px] box-border">
					{featureList.map((item, index) => {
						return (
							<li
								key={index}
								className={[
									"flex list-none flex-row items-start font-['Gelion',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[clamp(1.3rem,3vw,1.5rem)] font-light leading-[140%]",
									whiteText ? 'text-white' : 'text-[#333]',
									index === featureList.length - 1 ? '' : 'mb-[clamp(10px,2vw,15px)]',
								].join(' ')}
							>
								<div
									className="relative flex h-[30px] w-[30px] items-center justify-items-center"
									style={{color: primaryColor}}
								>
									{item.icon || <Check weight="bold" />}
								</div>
								<span className="table font-[inherit]">{item.text}</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	const descSeparator = (
		<div className="mb-[25px] flex flex-row opacity-60">
			<span
				className="mr-[5px] table h-2 w-[90px] rounded opacity-100"
				style={{backgroundColor: primaryColor}}
			/>
			<span className="table h-2 w-[50px] rounded opacity-60" style={{backgroundColor: secondaryColor}} />
		</div>
	);

	if (title) {
		headerD = (
			<h3
				className="my-[20px] mb-2.5 flex flex-row items-center font-['Kontora',Poppins,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1.4rem] font-black uppercase tracking-[1px]"
				style={{
					color: primaryColor,
				}}
			>
				{icon}
				{title}
			</h3>
		);
	}

	if (description) {
		descriptionD = (
			<p
				className={[
					"mb-2.5 font-['Gelion',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[clamp(1.8rem,4vw,2.2rem)] font-normal leading-[140%]",
					whiteText ? 'text-white' : 'text-[#343434]',
					vertical ? 'text-center' : '',
				].join(' ')}
			>
				{description}
			</p>
		);
	}

	return (
		<div
			className={[
				'flex w-full flex-col items-start',
				vertical ? 'mx-auto max-w-[900px] items-center' : '',
			].join(' ')}
		>
			{headerD}
			{descriptionD}
			{descSeparator}
			{featureListDiv}
			{signUpButton ? (
				<div className="mt-5">
					<SignUpButton />
				</div>
			) : null}
		</div>
	);
}
