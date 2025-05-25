import React, {ReactNode} from 'react';
import './AlertContainer.scss';
import {CheckSquare, Warning, WarningOctagon, Info} from 'phosphor-react';
import block from '../../../styles/bem';
import Loading from '../loading/Loading';

const b = block('alert-container');

export type ElementGenericType = 'success' | 'error' | 'warning' | 'info';

interface Props {
	fill?: boolean;
	header?: boolean;
	loading?: boolean;
	body?: ReactNode;
	type: ElementGenericType;
	actionBody?: ReactNode;
}

export default function AlertContainer(props: Props) {
	const {header, fill, loading, body, type, actionBody} = props;

	let icon = null;

	if (loading) {
		return (
			<div className={b('wrapper', {fill})}>
				<div className={b({loading})}>
					<Loading />
				</div>
			</div>
		);
	}

	switch (type) {
		case 'success':
			icon = <CheckSquare weight="fill" />;
			break;
		case 'error':
			icon = <Warning weight="fill" />;
			break;
		case 'warning':
			icon = <WarningOctagon weight="fill" />;
			break;
		case 'info':
			icon = <Info weight="fill" />;
			break;
	}

	let headerElm = null;
	if (header) {
		headerElm = <h4 className={b('header')}>{header}</h4>;
	}

	let textElem = null;
	if (body) {
		textElem = <div className={b('text')}>{body}</div>;
	}

	let actionElem = null;
	if (actionBody) {
		actionElem = <div className={b('action')}>{actionBody}</div>;
	}

	return (
		<div className={b('wrapper', {fill})}>
			<div className={b({type})}>
				{icon}
				{headerElm}
				{textElem}
				{actionBody}
				{actionElem}
			</div>
		</div>
	);
}
