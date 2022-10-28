import React, {ReactNode} from 'react';
import './AlertContainer.scss';
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
			icon = <i className="ph-check-square-fill" />;
			break;
		case 'error':
			icon = <i className="ph-warning-fill" />;
			break;
		case 'warning':
			icon = <i className="ph-warning-octagon-fill" />;
			break;
		case 'info':
			icon = <i className="ph-info-fill" />;
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
