import {Icon} from '@phosphor-icons/react';
import './PageTitle.scss';
import React, {ReactNode} from 'react';
import block from '../../../styles/bem';

const b = block('page-title');

interface Props {
	pageName: string;
	children?: ReactNode;
	Icon?: Icon;
}

export default function PageTitle(props: Props) {
	const {pageName, children, Icon} = props;

	return (
		<div className={b()}>
			<h1 className={b('title')}>
				{Icon && <Icon />}
				{pageName}
			</h1>
			<div className={b('lines')}>
				<div className={b('line')} />
				<div className={b('line', {secondary: true})} />
			</div>

			{children}
		</div>
	);
}
