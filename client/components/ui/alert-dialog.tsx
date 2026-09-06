import {Button} from '@/components/ui/button';
import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-alert-dialog';
import React, {
	createContext,
	useContext,
	useEffect,
	useId,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import {allocateDialogOrder, registerDialog} from './dialog-activity';
import {consumeEscapeUntilKeyUp, getTopDialog, isDialogEscapeInProgress} from './dialog-keyboard';
import {isPopupOpen} from './popup';

const Context = createContext<{id: string; open: boolean; setOpen: (open: boolean) => void} | null>(
	null,
);
export function AlertDialog({
	open: controlledOpen,
	defaultOpen = false,
	onOpenChange,
	...props
}: React.ComponentProps<typeof Primitive.Root>) {
	const id = useId();
	const [localOpen, setLocalOpen] = useState(defaultOpen);
	const open = controlledOpen ?? localOpen;
	function setOpen(value: boolean) {
		if (controlledOpen === undefined) setLocalOpen(value);
		onOpenChange?.(value);
	}
	return (
		<Context.Provider value={{id, open, setOpen}}>
			<Primitive.Root open={open} onOpenChange={setOpen} {...props} />
		</Context.Provider>
	);
}
export const AlertDialogTrigger = Primitive.Trigger;
export const AlertDialogAction = Primitive.Action;
export function AlertDialogCancel(props: React.ComponentProps<typeof Primitive.Cancel>) {
	return (
		<Button variant="outline" asChild>
			<Primitive.Cancel {...props} />
		</Button>
	);
}
export function AlertDialogContent(props: React.ComponentProps<typeof Primitive.Content>) {
	const context = useContext(Context);
	if (!context) throw new Error('AlertDialogContent must be inside AlertDialog');
	return context.open ? <OpenContent {...props} /> : null;
}
function OpenContent({
	className,
	children,
	onOpenAutoFocus,
	onCloseAutoFocus,
	...props
}: React.ComponentProps<typeof Primitive.Content>) {
	const context = useContext(Context)!;
	const [order] = useState(allocateDialogOrder);
	const contentRef = useRef<HTMLDivElement>(null);
	const openerRef = useRef<HTMLElement | null>(null);
	useLayoutEffect(() => registerDialog(context.id, order), [context.id, order]);
	useEffect(() => {
		function escape(event: KeyboardEvent) {
			if (event.key !== 'Escape' || getTopDialog() !== contentRef.current || isPopupOpen())
				return;
			event.preventDefault();
			event.stopImmediatePropagation();
			if (isDialogEscapeInProgress()) return;
			consumeEscapeUntilKeyUp();
			context.setOpen(false);
		}
		window.addEventListener('keydown', escape, true);
		return () => window.removeEventListener('keydown', escape, true);
	});
	return (
		<Primitive.Portal>
			<Primitive.Overlay
				className="fixed inset-0 overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200 motion-reduce:animate-none"
				style={{zIndex: 1000000 + order}}
			>
				<Primitive.Content
					{...props}
					ref={contentRef}
					data-slot="alert-dialog-content"
					data-dialog-layer={order}
					data-dialog-id={context.id}
					className={cn(
						'border-tmo-module/15 bg-background text-text relative mx-auto my-12 grid w-[95%] max-w-lg gap-4 rounded-lg border p-6 shadow-lg outline-none',
						'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 duration-200 motion-reduce:animate-none',
						className,
					)}
					onEscapeKeyDown={(event) => event.preventDefault()}
					onClick={(event) => {
						event.stopPropagation();
						props.onClick?.(event);
					}}
					onOpenAutoFocus={(event) => {
						openerRef.current =
							document.activeElement instanceof HTMLElement
								? document.activeElement
								: null;
						onOpenAutoFocus?.(event);
					}}
					onCloseAutoFocus={(event) => {
						onCloseAutoFocus?.(event);
						if (event.defaultPrevented) return;
						event.preventDefault();
						const top = getTopDialog();
						const opener = openerRef.current;
						if (
							opener?.isConnected &&
							!opener.closest('[inert]') &&
							(!top || top.contains(opener))
						)
							opener.focus({preventScroll: true});
						else top?.focus({preventScroll: true});
					}}
				>
					{children}
				</Primitive.Content>
			</Primitive.Overlay>
		</Primitive.Portal>
	);
}
export function AlertDialogHeader({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn('mb-4 flex flex-col gap-2 text-left', className)}
			{...props}
		/>
	);
}
export function AlertDialogTitle({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Title>) {
	return (
		<Primitive.Title
			data-slot="alert-dialog-title"
			className={cn('text-lg font-semibold', className)}
			{...props}
		/>
	);
}
export function AlertDialogDescription({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Description>) {
	return (
		<Primitive.Description
			data-slot="alert-dialog-description"
			className={cn('text-text/60 text-sm', className)}
			{...props}
		/>
	);
}
