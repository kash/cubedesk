import React, {ReactNode} from 'react';
import './PageTitle.scss';
import block from '../../../styles/bem';

const b = block('page-title');

interface Props {
	pageName: string;
	children?: ReactNode;
	icon?: string;
}

export default function PageTitle(props: Props) {
	const {pageName, children, icon} = props;

	let iconBody = null;
	if (icon) {
		iconBody = <i className={icon} />;
	}

	return (
		<div className={b()}>
			<h1 className={b('title')}>
				{iconBody}
				{pageName}
			</h1>
			<div className={b('lines')}>
				<div className={b('line')}/>
				<div className={b('line', {secondary: true})}/>
			</div>

			{children}
		</div>
	);
}
