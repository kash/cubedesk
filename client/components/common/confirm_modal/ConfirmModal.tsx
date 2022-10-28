import React, {useState} from 'react';
import Button, {ButtonProps, CommonType} from '../button/Button';
import {IModalProps} from '../modal/Modal';
import ModalHeader from '../modal/modal_header/ModalHeader';
import Input from '../inputs/input/Input';
import {useWindowListener} from '../../../util/hooks/useListener';
import ProOnly from '../pro_only/ProOnly';

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
	proOnly?: boolean;
	triggerAction: () => Promise<any>;
	infoBoxes?: ConfirmModalInfoBox[];
}

export default function ConfirmModal(props: ConfirmModalProps) {
	const {buttonProps, infoBoxes, proOnly, title, description, triggerAction, buttonText, hideInput, onComplete} =
		props;

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
			setError(e.message);
			setLoading(false);
			return;
		}

		if (onComplete) {
			onComplete(res);
		}
	}

	let input = (
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

	let infoBoxContainer = null;
	if (infoBoxes && infoBoxes.length) {
		infoBoxContainer = (
			<div className="grid grid-cols-3 gap-2 mb-8 divide-y-2 divide-button divide-solid">
				{infoBoxes.map((box) => (
					<div className="bg-error/90 flex flex-col self-center rounded-lg p-4">
						<span className="text-2xl font-bold text-text">{box.value}</span>
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
			<ProOnly ignore={!proOnly}>
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
			</ProOnly>
		</form>
	);
}
