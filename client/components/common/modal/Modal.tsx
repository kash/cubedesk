import React, {ReactNode, useEffect, useRef, useState} from 'react';
import CSS from 'csstype';
import {useDispatch} from 'react-redux';
import './Modal.scss';
import {X} from 'phosphor-react';
import {closeModal} from '../../../actions/general';
import ModalHeader from './modal_header/ModalHeader';
import block from '../../../styles/bem';

const b = block('modal');

export interface IModalProps {
	onComplete?: (data?: any) => void;
	onClose?: () => void;
	width?: number;
	zIndex?: number;
	title?: string;
	description?: string;
	noPadding?: boolean;
	overFlowHidden?: boolean;
	hideCloseButton?: boolean;
	children?: ReactNode;
	fullSize?: boolean;
}

export default function Modal(props: IModalProps) {
	const {
		width,
		children,
		zIndex,
		title,
		overFlowHidden,
		fullSize,
		description,
		hideCloseButton,
		onClose,
		noPadding,
		onComplete,
	} = props;

	const modalRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(document.activeElement as any)?.blur();

		setTimeout(() => {
			setActive(true);
		}, 100);
	}, []);

	function clickComplete(data) {
		if (onComplete) {
			setTimeout(() => {
				onComplete(data);
			});
		}

		dispatch(closeModal());
	}

	function clickClose() {
		dispatch(closeModal());

		if (onClose) {
			onClose();
		}
	}

	const centerStyle: CSS.Properties = {};
	if (width) {
		centerStyle.maxWidth = width + 'px';
	}

	if (overFlowHidden) {
		centerStyle.overflow = 'hidden';
	}

	if (noPadding) {
		centerStyle.padding = '0';
	}

	const style: CSS.Properties = {};
	if (zIndex) {
		style.zIndex = zIndex;
	}

	let closeButton = (
		<button
			className="absolute top-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded text-xl font-bold text-text hover:bg-tm-background/30"
			type="button"
			onClick={clickClose}
		>
			<X />
		</button>
	);

	if (hideCloseButton) {
		closeButton = null;
	}

	return (
		<div className={b({active, fullSize})} style={style}>
			<div className={b('body')} ref={modalRef}>
				<div className={b('center')} style={centerStyle}>
					<ModalHeader title={title} description={description} />
					{closeButton}
					{React.cloneElement(children as any, {
						onClose: clickClose,
						onComplete: clickComplete,
					})}
				</div>
			</div>
		</div>
	);
}
