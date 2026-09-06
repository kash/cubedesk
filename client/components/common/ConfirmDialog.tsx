import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {Button, type ButtonProps} from '@/components/ui/button';
import {getTopDialog} from '@/components/ui/dialog-keyboard';
import {Field, FieldDescription, FieldError} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import React, {ReactNode, useEffect, useRef, useState} from 'react';

interface ConfirmDialogInfoBox {
	value: string | number;
	label: string;
}

export interface ConfirmDialogProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children?: ReactNode;
	onComplete?: (result: unknown) => void;
	title: string;
	description?: string;
	buttonProps?: ButtonProps;
	buttonText: string;
	hideInput?: boolean;
	triggerAction: () => Promise<any>;
	infoBoxes?: ConfirmDialogInfoBox[];
}

export default function ConfirmDialog({
	open: controlledOpen,
	onOpenChange,
	children,
	...props
}: ConfirmDialogProps) {
	const [localOpen, setLocalOpen] = useState(false);
	function changeOpen(open: boolean) {
		if (controlledOpen === undefined) setLocalOpen(open);
		onOpenChange?.(open);
	}
	return (
		<AlertDialog open={controlledOpen ?? localOpen} onOpenChange={changeOpen}>
			{children && <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>}
			<AlertDialogContent>
				<ConfirmationForm
					{...props}
					onComplete={(result) => {
						changeOpen(false);
						props.onComplete?.(result);
					}}
				/>
			</AlertDialogContent>
		</AlertDialog>
	);
}

function ConfirmationForm(props: ConfirmDialogProps) {
	const fieldId = React.useId();

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
	const submitting = useRef(false);
	const mounted = useRef(true);
	useEffect(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, []);

	function handleChange(e) {
		setConfirm(e.target.value);
		setError('');
	}

	async function onClick(e) {
		e.preventDefault();
		e.stopPropagation();

		if (submitting.current || !getTopDialog()?.contains(e.currentTarget)) {
			return;
		}

		if (confirm.toLowerCase() !== 'confirm' && !hideInput) {
			setError('Please type "confirm" to proceed');
			return;
		}
		submitting.current = true;
		setLoading(true);

		let res;
		try {
			res = await triggerAction();
		} catch (e) {
			if (!mounted.current) return;
			setError(e instanceof Error ? e.message : 'Something went wrong');
			setLoading(false);
			submitting.current = false;
			return;
		}

		if (!mounted.current) return;
		if (onComplete) {
			onComplete(res);
		}
	}

	let input: ReactNode = (
		<Field className="mb-2">
			<Input
				placeholder="confirm"
				onChange={handleChange}
				name="confirm"
				value={confirm}
				id={`${fieldId}-1`}
				aria-label={'confirm'}
				aria-invalid={!!error}
				aria-describedby={`${fieldId}-1-description${error ? ` ${fieldId}-error` : ''}`}
			/>
			<FieldDescription id={`${fieldId}-1-description`}>
				{`Type "confirm" to proceed`}
			</FieldDescription>
		</Field>
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
					<div
						key={box.label}
						className="bg-error/90 flex flex-col self-center rounded-lg p-4"
					>
						<span className="text-text text-2xl font-bold">{box.value}</span>
						<span className="text-md text-text/70">{box.label}</span>
					</div>
				))}
			</div>
		);
	}

	return (
		<form className="w-full" onSubmit={onClick}>
			<AlertDialogHeader>
				<AlertDialogTitle>{title}</AlertDialogTitle>
				<AlertDialogDescription>
					{description || 'Confirm this action to continue.'}
				</AlertDialogDescription>
			</AlertDialogHeader>
			{infoBoxContainer}
			<div>
				<div className="mb-2">{input}</div>
				<div className="flex flex-wrap items-center justify-end gap-2">
					<AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
					<Button
						variant="destructive"
						{...buttonProps}
						type="submit"
						size="lg"
						disabled={disabled || loading || buttonProps?.disabled}
						aria-busy={loading}
					>
						{buttonText}
						{loading ? <Spinner aria-hidden="true" /> : null}
					</Button>
					<FieldError id={`${fieldId}-error`}>{error}</FieldError>
				</div>
			</div>
		</form>
	);
}
