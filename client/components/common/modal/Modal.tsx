import {closeModal} from '@/actions/general';
import ModalHeader from '@/components/common/modal/ModalHeader';
import {cn} from '@/util/cn';
import CSS from 'csstype';
import {X} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

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

	let closeButton: ReactNode = (
		<button
			className="text-text hover:bg-tm-background/30 absolute top-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded text-xl font-bold"
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
		<div
			className={cn(
				'fixed top-0 left-0 z-[100000] h-screen w-screen overflow-auto bg-black/80 opacity-0 transition-all duration-200 ease-in-out',
				active && 'opacity-100',
				fullSize && 'h-full w-full',
			)}
			style={style}
		>
			<div className="h-full w-full overflow-y-auto" ref={modalRef}>
				<div
					className={cn(
						'bg-background relative mx-auto mt-24 mb-12 w-[95%] max-w-[600px] rounded-lg p-6 shadow-md transition-all duration-150 ease-in-out',
						active && 'mt-12',
						fullSize && 'm-0 h-full w-full max-w-none rounded-none',
					)}
					style={centerStyle}
				>
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
