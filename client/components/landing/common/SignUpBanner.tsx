import React from 'react';
import SignUpButton from '@/components/landing/common/SignUpButton';
import FeatureCircles from '@/components/landing/common/feature/FeatureCircles';

interface Props {}

export default function SignUpBanner(props: Props) {
	return (
		<div className="relative mx-auto my-10 box-border flex h-[250px] w-[95%] max-w-[800px] flex-col items-center justify-center overflow-hidden rounded-md border-[5px] border-solid border-[#ddd]">
			<FeatureCircles
				position="topLeft"
				primaryColor="#1e88e5"
				secondaryColor="#0097a7"
				featureTitle="Sign up"
				count={7}
				xOffset={70}
				yOffset={20}
			/>
			<div className="relative flex flex-col items-center">
				<h3 className="text-center font-['Kontora',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[clamp(1.8rem,2.2vw,2.2rem)] font-semibold">
					Sign up for free today!
				</h3>
				<SignUpButton />
			</div>
		</div>
	);
}
