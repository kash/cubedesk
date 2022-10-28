import React from 'react';
import './FeatureText.scss';
import block from '../../../../../styles/bem';
import SignUpButton from '../../signup_button/SignUpButton';

const b = block('landing-feature-text');

interface FeatureItem {
	text: string;
	icon?: string;
}

export interface IFeatureTextProps {
	title: string;
	description?: string;
	primaryColor?: string;
	secondaryColor?: string;
	whiteText?: boolean;
	vertical?: boolean;
	icon?: string;
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
			<div className={b('feature-list')}>
				<ul>
					{featureList.map((item, index) => {
						return (
							<li key={index}>
								<div>
									<i style={{color: primaryColor}} className={item.icon || 'ph-check-bold'} />
								</div>
								<span>{item.text}</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	const descSeparator = (
		<div className={b('desc-separator')}>
			<span style={{backgroundColor: primaryColor}} />
			<span style={{backgroundColor: secondaryColor}} />
		</div>
	);

	if (title) {
		headerD = (
			<h3
				style={{
					color: primaryColor,
				}}
			>
				{icon ? <i className={icon} /> : null}
				{title}
			</h3>
		);
	}

	if (description) {
		descriptionD = <p>{description}</p>;
	}

	return (
		<div className={b({vertical, whiteText})}>
			{headerD}
			{descriptionD}
			{descSeparator}
			{featureListDiv}
			{signUpButton ? (
				<div className={b('signup')}>
					<SignUpButton />
				</div>
			) : null}
		</div>
	);
}
