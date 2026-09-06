import {Button} from '@/components/ui/button';
import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-dialog';
import {X} from 'phosphor-react';
import React, {
	ComponentProps,
	createContext,
	useContext,
	useEffect,
	useId,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import {allocateDialogOrder, registerDialog, useActiveDialogs} from './dialog-activity';
import {consumeEscapeUntilKeyUp, getTopDialog, isDialogEscapeInProgress} from './dialog-keyboard';
import {isPopupOpen} from './popup';

const DialogContext = createContext<{
	id: string;
	open: boolean;
	setOpen: (open: boolean) => void;
} | null>(null);
export function Dialog({
	open: controlledOpen,
	defaultOpen = false,
	onOpenChange,
	children,
	...props
}: ComponentProps<typeof Primitive.Root>) {
	const id = useId();
	const [localOpen, setLocalOpen] = useState(defaultOpen);
	const open = controlledOpen ?? localOpen;
	function setOpen(value: boolean) {
		if (controlledOpen === undefined) setLocalOpen(value);
		onOpenChange?.(value);
	}
	return (
		<DialogContext.Provider value={{id, open, setOpen}}>
			<Primitive.Root {...props} open={open} onOpenChange={setOpen}>
				{children}
			</Primitive.Root>
		</DialogContext.Provider>
	);
}
export const DialogTrigger = Primitive.Trigger;
export const DialogClose = Primitive.Close;
export function DialogTitle({className, ...props}: ComponentProps<typeof Primitive.Title>) {
	return (
		<Primitive.Title
			data-slot="dialog-title"
			className={cn('text-lg leading-none font-semibold tracking-tight', className)}
			{...props}
		/>
	);
}
export const DialogDescription = Primitive.Description;
export const DialogPortal = Primitive.Portal;
export const DialogOverlay = Primitive.Overlay;

export function useDialogBlocked() {
	const owner = useContext(DialogContext);
	const active = useActiveDialogs();
	return active.length > 0 && active[active.length - 1].id !== owner?.id;
}
export function useAnyDialogOpen() {
	return useActiveDialogs().length > 0;
}

export function DialogHeader({
	title,
	description,
	topBody,
	children,
	className,
	...props
}: Omit<ComponentProps<'div'>, 'title'> & {
	title?: React.ReactNode;
	description?: React.ReactNode;
	topBody?: React.ReactNode;
}) {
	return (
		<div {...props} className={cn('text-text mb-6 w-[calc(100%-40px)]', className)}>
			{topBody}
			{title && <DialogTitle>{title}</DialogTitle>}
			{description && <DialogDescription>{description}</DialogDescription>}
			{children}
		</div>
	);
}
export interface DialogContentProps extends ComponentProps<typeof Primitive.Content> {
	width?: number;
	fullSize?: boolean;
	noPadding?: boolean;
	overflowHidden?: boolean;
	hideCloseButton?: boolean;
	closeOnEscape?: boolean;
	focusFallbackRef?: React.RefObject<HTMLElement | null>;
}
export function DialogContent(props: DialogContentProps) {
	const context = useContext(DialogContext);
	if (!context) throw new Error('DialogContent must be inside Dialog');
	return context.open ? <OpenDialogContent {...props} /> : null;
}
function OpenDialogContent({
	children,
	className,
	width,
	fullSize,
	noPadding,
	overflowHidden,
	hideCloseButton,
	closeOnEscape = !fullSize && !hideCloseButton,
	focusFallbackRef,
	onOpenAutoFocus,
	onCloseAutoFocus,
	style,
	ref,
	...props
}: DialogContentProps) {
	const context = useContext(DialogContext)!;
	const [order] = useState(allocateDialogOrder);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const openerRef = useRef<HTMLElement | null>(null);
	useLayoutEffect(() => registerDialog(context.id, order), [context.id, order]);
	useEffect(() => {
		function escape(event: KeyboardEvent) {
			if (event.key !== 'Escape' || getTopDialog() !== contentRef.current) return;
			if (isPopupOpen()) return;
			if (isDialogEscapeInProgress()) {
				event.preventDefault();
				event.stopImmediatePropagation();
				return;
			}
			if (!closeOnEscape && fullSize) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			consumeEscapeUntilKeyUp();
			if (closeOnEscape) context.setOpen(false);
		}
		window.addEventListener('keydown', escape, true);
		return () => window.removeEventListener('keydown', escape, true);
	});
	return (
		<Primitive.Portal>
			<Primitive.Overlay
				className="fixed inset-0 overflow-y-auto bg-black/80"
				style={{zIndex: 1000000 + order}}
			>
				<Primitive.Content
					{...props}
					ref={(element) => {
						contentRef.current = element;
						if (typeof ref === 'function') return ref(element);
						else if (ref) ref.current = element;
					}}
					data-dialog-layer={order}
					data-dialog-id={context.id}
					className={cn(
						'border-tmo-background/10 bg-background text-text relative mx-auto my-12 w-[95%] max-w-[600px] rounded-lg border p-6 shadow-md outline-none',
						{
							'm-0 h-full w-full max-w-none rounded-none': !!fullSize,
							'overflow-hidden': !!overflowHidden,
							'p-0': !!noPadding,
						},
						className,
					)}
					style={{...style, maxWidth: width ? `${width}px` : style?.maxWidth}}
					onPointerDownOutside={(event) => event.preventDefault()}
					onInteractOutside={(event) => event.preventDefault()}
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
						if (!event.defaultPrevented && fullSize) {
							event.preventDefault();
							contentRef.current?.focus();
						}
					}}
					onCloseAutoFocus={(event) => {
						onCloseAutoFocus?.(event);
						if (event.defaultPrevented) return;
						event.preventDefault();
						const top = getTopDialog();
						if (top?.contains(document.activeElement)) return;
						const opener = openerRef.current;
						const fallback = focusFallbackRef?.current;
						const target = [opener, fallback].find(
							(element) =>
								element?.isConnected &&
								!element.closest('[inert]') &&
								(!top || top.contains(element)),
						);
						if (target) target.focus({preventScroll: true});
						else if (top) top.focus({preventScroll: true});
						else {
							const body = document.body;
							const previous = body.getAttribute('tabindex');
							body.setAttribute('tabindex', '-1');
							body.focus({preventScroll: true});
							if (previous === null) body.removeAttribute('tabindex');
							else body.setAttribute('tabindex', previous);
						}
					}}
				>
					{children}
					{!hideCloseButton && (
						<DialogClose asChild>
							<Button
								type="button"
								aria-label="Close dialog"
								variant="ghost"
								size="icon-sm"
								className="absolute top-4 right-4 z-40"
							>
								<X aria-hidden="true" />
							</Button>
						</DialogClose>
					)}
				</Primitive.Content>
			</Primitive.Overlay>
		</Primitive.Portal>
	);
}
