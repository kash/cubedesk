import React, {ReactElement, ReactNode} from 'react';

interface Props {
	children: ReactNode;
}

const legalClassByTag: Record<string, string> = {
	h1: 'mb-4 text-[2.25rem] font-semibold tracking-tight text-[#292929]',
	h2: 'mb-2 mt-10 text-[1.35rem] font-semibold tracking-tight text-[#333]',
	h3: 'mb-2 mt-6 text-[1.05rem] font-semibold text-[#333]',
	h4: 'mb-2 mt-5 text-base font-semibold text-[#333]',
	strong: 'font-bold text-[#444]',
	p: 'mb-4 leading-7 text-[#444] opacity-90',
	li: 'mb-2 leading-7 text-[#444] opacity-90',
	ul: 'mb-5 list-disc pl-6',
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
		<div className="mx-auto w-[min(92%,760px)] bg-white pt-28 pb-24 sm:pt-36">
			{React.Children.map(props.children, applyLegalClasses)}
		</div>
	);
}
