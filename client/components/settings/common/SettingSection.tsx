import React, {ReactElement, ReactNode} from 'react';
import classNames from 'classnames';
import SettingRow from '@/components/settings/common/SettingRow';

interface Props {
	children: ReactNode;
}

export default function SettingSection(props: Props) {
	const {children} = props;
	let childIndex = 0;

	function renderChild(child: ReactNode): ReactNode {
		if (!React.isValidElement(child)) {
			return child;
		}

		const element = child as ReactElement<{children?: ReactNode; className?: string}>;

		if (child.type === React.Fragment) {
			return React.cloneElement(
				child,
				{},
				React.Children.map(element.props.children, (fragmentChild) => renderChild(fragmentChild))
			);
		}

		const nested = childIndex > 0;
		childIndex += 1;

		if (child.type === SettingRow) {
			return React.cloneElement(child as ReactElement<{nested?: boolean}>, {nested});
		}

		return React.cloneElement(element, {
			className: classNames(element.props.className, nested && 'pl-5'),
		});
	}

	return (
		<div className="mb-5 border-b-[3px] border-tmo-background/10 last:border-b-0">
			{React.Children.map(children, (child) => renderChild(child))}
		</div>
	);
}
