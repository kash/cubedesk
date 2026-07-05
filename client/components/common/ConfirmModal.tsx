import Button, {ButtonProps} from '@/components/common/Button';
import Input from '@/components/common/inputs/input/Input';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import {useWindowListener} from '@/util/hooks/useListener';
import React, {ReactNode, useState} from 'react';

interface ConfirmModalInfoBox {
	value: string | number;
	label: string;
}

export interface ConfirmModalProps extends IModalProps {
	title: string;
	description?: string;
	buttonProps?: ButtonProps;
	buttonText: string;
	hideInput?: boolean;
	triggerAction: () => Promise<any>;
	infoBoxes?: ConfirmModalInfoBox[];
}

export default function ConfirmModal(props: ConfirmModalProps) {
	const {
		buttonProps,
		infoBoxes,
		title,
		description,
		triggerAction,
		buttonText,
		hideInput,
		onComplete,
	} = props;

	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useWindowListener('keypress', onSubmit);

	function handleChange(e) {
		setConfirm(e.target.value);
		setError('');
	}

	async function onSubmit(e) {
		// If enter key is pressed
		if (e.keyCode === 13 && hideInput) {
			await onClick(e);
		}
	}

	async function onClick(e) {
		e.preventDefault();

		if (loading) {
			return;
		}

		setLoading(true);

		if (confirm.toLowerCase() !== 'confirm' && !hideInput) {
			setError('Please type "confirm" to proceed');
			return;
		}

		let res;
		try {
			res = await triggerAction();
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Something went wrong');
			setLoading(false);
			return;
		}

		if (onComplete) {
			onComplete(res);
		}
	}

	let input: ReactNode = (
		<Input
			placeholder="confirm"
			info={`Type "confirm" to proceed`}
			onChange={handleChange}
			name="confirm"
			value={confirm}
		/>
	);

	let disabled = confirm.toLowerCase() !== 'confirm';
	if (hideInput) {
		input = null;
		disabled = false;
	}

	let infoBoxContainer: ReactNode = null;
	if (infoBoxes && infoBoxes.length) {
		infoBoxContainer = (
			<div className="divide-button mb-8 grid grid-cols-3 gap-2 divide-y-2 divide-solid">
				{infoBoxes.map((box) => (
					<div className="bg-error/90 flex flex-col self-center rounded-lg p-4">
						<span className="text-text text-2xl font-bold">{box.value}</span>
						<span className="text-md text-text/70">{box.label}</span>
					</div>
				))}
			</div>
		);
	}

	return (
		<form className="table" onSubmit={onClick}>
			<ModalHeader title={title} description={description} />
			{infoBoxContainer}
			<div>
				<div className="mb-2">{input}</div>
				<Button
					glow
					large
					type={hideInput ? 'submit' : 'button'}
					text={buttonText}
					danger
					loading={loading}
					onClick={onClick}
					disabled={disabled}
					error={error}
					{...buttonProps}
				/>
			</div>
		</form>
	);
}
