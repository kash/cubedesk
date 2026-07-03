import React, {ReactElement, ReactNode} from 'react';

interface Props {
	children: ReactNode;
}

const legalClassByTag: Record<string, string> = {
	h1: 'mb-[15px] text-[2rem] font-bold text-[#444]',
	h2: 'mb-2.5 mt-5 text-[1.3rem] font-bold capitalize text-[#444]',
	strong: 'font-bold text-[#444]',
	p: 'mb-[15px] leading-[1.4rem] text-[#444] opacity-90',
	li: 'mb-2.5 leading-[1.4rem] text-[#444] opacity-90',
	ul: 'list-disc pl-[15px]',
	a: 'text-[#444] underline opacity-80',
};

function applyLegalClasses(node: ReactNode): ReactNode {
	if (!React.isValidElement(node)) {
		return node;
	}

	const element = node as ReactElement<any>;
	const children = React.Children.map(element.props.children, applyLegalClasses);
	const tagClass = typeof element.type === 'string' ? legalClassByTag[element.type] : '';
	const props = {
		...element.props,
		className: [element.props.className, tagClass].filter(Boolean).join(' '),
	};

	return React.cloneElement(element, children === undefined ? props : {...props, children});
}

export default function LegalContent(props: Props) {
	return (
		<div className="mx-auto w-[95%] max-w-[700px] bg-white pb-[100px] pt-[200px]">
			{React.Children.map(props.children, applyLegalClasses)}
		</div>
	);
}
