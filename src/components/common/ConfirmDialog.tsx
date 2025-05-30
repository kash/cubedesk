import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {Input} from '@/components/ui/input';
import {CircleNotch} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useState} from 'react';

interface ConfirmDialogInfoBox {
	value: string | number;
	label: string;
}

export interface ConfirmDialogProps {
	title: string;
	description?: string;
	buttonText: string;
	hideInput?: boolean;
	triggerAction: () => Promise<any>;
	infoBoxes?: ConfirmDialogInfoBox[];
	children: React.ReactNode;
	variant?: 'default' | 'destructive';
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
	const {
		title,
		description,
		triggerAction,
		buttonText,
		hideInput,
		children,
		variant = 'destructive',
		infoBoxes,
	} = props;

	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirm(e.target.value);
		setError('');
	}, []);

	const handleAction = useCallback(async () => {
		if (loading) {
			return;
		}

		if (!hideInput && confirm.toLowerCase() !== 'confirm') {
			setError('Please type "confirm" to proceed');
			return;
		}

		setLoading(true);

		try {
			await triggerAction();
			setOpen(false);
			setConfirm('');
			setError('');
		} catch (e: unknown) {
			setError(e.message);
			setLoading(false);
		}
	}, [loading, hideInput, confirm, triggerAction]);

	// Reset state when dialog opens/closes
	const handleOpenChange = useCallback((newOpen: boolean) => {
		setOpen(newOpen);
		if (!newOpen) {
			setConfirm('');
			setError('');
			setLoading(false);
		}
	}, []);

	let infoBoxContainer = null;
	if (infoBoxes && infoBoxes.length) {
		infoBoxContainer = (
			<div className="mb-4 grid grid-cols-3 gap-2">
				{infoBoxes.map((box, index) => (
					<div
						key={index}
						className="flex flex-col self-center rounded-lg bg-red-600/90 p-4"
					>
						<span className="text-2xl font-bold text-white">{box.value}</span>
						<span className="text-md text-white/70">{box.label}</span>
					</div>
				))}
			</div>
		);
	}

	const actionDisabled = !hideInput && confirm.toLowerCase() !== 'confirm';

	return (
		<AlertDialog open={open} onOpenChange={handleOpenChange}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					{description && <AlertDialogDescription>{description}</AlertDialogDescription>}
				</AlertDialogHeader>
				{infoBoxContainer}
				{!hideInput && (
					<div className="mt-4">
						<Input
							placeholder="Type 'confirm' to proceed"
							onChange={handleChange}
							value={confirm}
							className="mb-2"
						/>
						{error && <p className="text-sm text-red-600">{error}</p>}
					</div>
				)}
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={(e) => {
							e.preventDefault();
							handleAction();
						}}
						disabled={actionDisabled || loading}
						className={variant === 'destructive' ? 'bg-red-600 hover:bg-red-700' : ''}
					>
						{loading ? (
							<>
								<CircleNotch weight="bold" className="mr-2 animate-spin" />
								{buttonText}
							</>
						) : (
							buttonText
						)}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
