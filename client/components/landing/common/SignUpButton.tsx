import React from 'react';
import {ArrowRight} from 'phosphor-react';

export default function SignUpButton() {
	return (
		<div className="flex flex-col items-center">
			<a
				href="/demo"
				className="group box-border flex flex-row items-center rounded bg-primary px-5 py-3 font-['Kontora',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[clamp(1rem,2vw,1.2rem)] font-semibold text-white"
			>
				<span className="mr-[9px] table text-inherit">Try Demo</span>
				<ArrowRight className="relative top-px transition-all duration-100 ease-in-out group-hover:ml-[5px]" />
			</a>
		</div>
	);
}
