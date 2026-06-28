import React, {ReactElement, ReactNode} from 'react';

interface Props {
	children: ReactNode;
}

const infoClassByTag: Record<string, string> = {
	h1: 'text-[#444]',
	h2: 'text-[#444]',
	h3: 'text-[#444]',
	h4: 'text-[#444]',
	h5: 'text-[#444]',
	p: "font-['Source_Sans_Pro',Roboto,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1.4rem] font-normal leading-[2.1rem] text-[#444] opacity-95",
	em: 'font-[inherit] text-[inherit]',
	strong: 'font-[inherit] text-[inherit]',
	a: 'border-b-[3px] border-solid border-b-[rgba(var(--link-color),0.5)] font-[inherit] text-[rgb(var(--link-color))]',
	img: 'mx-auto my-12 w-[95%] max-w-[45rem] rounded-[10px] shadow-[0_1px_1px_hsl(0deg_0%_0%_/_0.075),0_2px_2px_hsl(0deg_0%_0%_/_0.075),0_4px_4px_hsl(0deg_0%_0%_/_0.075),0_8px_8px_hsl(0deg_0%_0%_/_0.075),0_16px_16px_hsl(0deg_0%_0%_/_0.075)]',
	hr: 'mx-auto my-[30px] h-[3px] w-full border-none bg-[#eee]',
};

function applyInfoClasses(node: ReactNode): ReactNode {
	if (!React.isValidElement(node)) {
		return node;
	}

	const element = node as ReactElement<any>;
	const children = React.Children.map(element.props.children, applyInfoClasses);
	const tagClass = typeof element.type === 'string' ? infoClassByTag[element.type] : '';
	const props = {
		...element.props,
		className: [element.props.className, tagClass].filter(Boolean).join(' '),
	};

	return React.cloneElement(element, children === undefined ? props : {...props, children});
}

export default function LandingInfo(props: Props) {
	return (
		<div className="mx-auto mt-16 w-full max-w-4xl px-5 pb-40">
			<div>{React.Children.map(props.children, applyInfoClasses)}</div>
		</div>
	);
}
