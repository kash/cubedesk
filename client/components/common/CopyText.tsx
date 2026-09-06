import {Button, type ButtonProps} from '@/components/ui/button';
import {toastError, toastSuccess} from '@/util/toast';
import {Check, Copy} from 'phosphor-react';
import React, {useRef, useState} from 'react';

export async function copyText(source: string): Promise<boolean> {
	try {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(source);
			return true;
		}
	} catch {
		// Clipboard permissions can be denied; try copying within the active dialog.
	}

	const activeElement = document.activeElement as HTMLElement | null;
	const container = activeElement?.closest('[role="dialog"], [role="alertdialog"]') || document.body;
	const el = document.createElement('textarea');
	el.value = source;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	try {
		container.appendChild(el);
		el.focus({preventScroll: true});
		el.select();
		if (!document.execCommand('copy')) {
			throw new Error('Copy failed');
		}
		return true;
	} catch {
		toastError('Could not copy to the clipboard. Please try again.');
		return false;
	} finally {
		el.remove();
		activeElement?.focus({preventScroll: true});
	}
}

interface Props {
	text: 'self' | string;
	buttonProps?: ButtonProps;
	toastifyMessageOnCopy?: string;
	onCopy?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CopyText(props: Props) {
	const {text, buttonProps, onCopy, toastifyMessageOnCopy} = props;

	const textCopiedTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
	const [textCopied, setTextCopied] = useState(false);

	async function onClick(e) {
		let source = text;

		if (text === 'self') {
			source = window.location.href;
		}

		if (textCopiedTimeout.current) {
			clearTimeout(textCopiedTimeout.current);
		}

		// Copy the source
		if (!(await copyText(source))) {
			setTextCopied(false);
			return;
		}
		setTextCopied(() => true);

		textCopiedTimeout.current = setTimeout(() => {
			setTextCopied(() => false);
		}, 2000);

		if (onCopy) {
			onCopy(e);
		}

		if (toastifyMessageOnCopy) {
			toastSuccess(toastifyMessageOnCopy);
		}
	}

	return (
		<Button
			variant="secondary"
			size={buttonProps?.children ? 'default' : 'icon'}
			title="Copy text"
			aria-label={buttonProps?.children ? undefined : 'Copy text'}
			{...buttonProps}
			onClick={(event) => {
				onClick(event);
				buttonProps?.onClick?.(event);
			}}
		>
			{buttonProps?.children}
			{textCopied ? (
				<Check weight="bold" aria-hidden="true" />
			) : (
				<Copy weight="bold" aria-hidden="true" />
			)}
			<span className="sr-only" role="status">
				{textCopied ? 'Copied' : ''}
			</span>
		</Button>
	);
}
