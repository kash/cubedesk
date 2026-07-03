import React, {ReactNode} from 'react';

interface Props {
	pageName: string;
	children?: ReactNode;
	icon?: string;
}

export default function PageTitle(props: Props) {
	const {pageName, children, icon} = props;

	let iconBody: ReactNode = null;
	if (icon) {
		iconBody = <i className={`${icon} relative top-[3px] mr-3`} />;
	}

	return (
		<div className="relative mb-5 w-full pb-5">
			<h1 className="flex flex-row items-center font-['Kontora',Poppins,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[2.7rem] font-medium">
				{iconBody}
				{pageName}
			</h1>
			<div className="mb-7.5 flex flex-row">
				<div className="mr-1.25 h-1 w-12.5 rounded bg-primary" />
				<div className="mr-1.25 h-1 w-8.75 rounded bg-secondary" />
			</div>

			{children}
		</div>
	);
}
