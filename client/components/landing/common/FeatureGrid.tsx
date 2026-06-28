import React from 'react';

interface GridItem {
	title: string;
	description: string;
	iconColor?: string;
	icon?: JSX.Element;
	imgSrc: string;
	imgAlt: string;
}

interface Props {
	gridItems: GridItem[];
}

export default function FeatureGrid(props: Props) {
	const {gridItems} = props;

	const rows = [];
	for (let i = 0; i < gridItems.length; i++) {
		const item = gridItems[i];
		const odd = i % 2 !== 0;

		let iconSpan = null;
		if (item.icon) {
			iconSpan = (
				<span
					className="absolute right-[25px] top-[25px] mb-2.5 text-[1.8rem] text-[#444] opacity-90"
					style={{
						color: item.iconColor,
					}}
				>
					{item.icon}
				</span>
			);
		}

		rows.push(
			<div
				key={`${item.title}`}
				className={[
					'flex h-[300px] w-full flex-row items-center justify-between max-[700px]:h-auto max-[700px]:flex-col',
					odd ? 'max-[700px]:flex-col-reverse' : '',
					i === gridItems.length - 1
						? ''
						: 'mb-20 max-[700px]:mb-[30px] max-[700px]:border-b-[3px] max-[700px]:border-solid max-[700px]:border-[#ddd] max-[700px]:pb-[70px]',
				].join(' ')}
			>
				<div className="relative box-border h-full w-[48.5%] rounded-[25px] bg-[#edf1f3] p-[35px] max-[700px]:mb-5 max-[700px]:w-full max-[700px]:p-4">
					{iconSpan}
					<h4 className="font-['Kontora',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1.6rem] font-bold">
						{item.title}
					</h4>
					<p className="mt-[5px] font-['Gelion',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1.4rem] font-light leading-[1.9rem] opacity-85">
						{item.description}
					</p>
				</div>
				<div
					className={[
						'flex h-full w-[48.5%] items-center justify-center max-[700px]:h-[350px] max-[700px]:w-full',
						odd ? 'order-[-1] max-[700px]:order-none' : '',
					].join(' ')}
				>
					<img
						className="max-h-full max-w-full rounded-[10px] object-cover shadow-[0_5px_25px_rgba(0,0,0,0.1),0_8px_30px_rgba(0,0,0,0.1),0_12px_35px_rgba(0,0,0,0.1)]"
						src={item.imgSrc}
						alt={item.imgAlt}
					/>
				</div>
			</div>
		);
	}

	return <div className="mx-auto flex w-full flex-col max-[700px]:max-w-[600px]">{rows}</div>;
}
