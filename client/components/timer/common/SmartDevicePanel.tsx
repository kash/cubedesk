import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	/** Live picture of the device */
	visual: ReactNode;
	/** Status icons and the options menu */
	controls: ReactNode;
	/** Connect button, shown while the device isn't connected */
	action?: ReactNode;
	/**
	 * The visual is shorter than the controls. They're centered on it, but with an action button under it they hang
	 * from its top edge instead, so the button stays close to the visual
	 */
	wide?: boolean;
}

/** Sits beside the time for smart cubes and smart timers, so every Bluetooth device looks and works the same */
export default function SmartDevicePanel(props: Props) {
	const {visual, controls, action, wide} = props;
	const hangControls = wide && !!action;

	return (
		<div className={cn('mt-[15px] flex w-1/2 flex-col items-center', {'sm:mt-0': wide})}>
			{/* Controls go beside the visual, or below it when there isn't room. The action button stays centered under the visual */}
			<div
				className={cn(
					'grid grid-cols-[auto] items-center justify-items-center gap-x-3 gap-y-2 sm:grid-cols-[auto_auto]',
					{'sm:gap-y-0': wide},
				)}
			>
				<div className={cn({'mb-[5px]': !wide})}>{visual}</div>
				<div
					className={cn('flex flex-row items-center gap-2.5 sm:flex-col', {
						// Taking no height keeps the row as short as the visual. Without a height of their own the
						// controls would shrink to fit
						'sm:h-0 sm:justify-start sm:self-start sm:*:shrink-0': hangControls,
						// Lines the top of the Bluetooth glyph up with the top of the visual: the glyph is padded inside its
						// 1.75rem status box, and its first 20/256 is empty
						'sm:-mt-[calc((1.75rem-18px)/2+18px*20/256)]': hangControls,
						// The menu button is 0.5rem taller than the status icon, so this centers the visual between the two
						// icons rather than their boxes
						'sm:pt-1': wide && !hangControls,
					})}
				>
					{controls}
				</div>
				{/*
				 * Takes no width, so a wide hint under the button can't push the controls away from the visual. A wide
				 * visual is centered on the time beside it, so the action takes no height either
				 */}
				{action && (
					<div
						className={cn('flex w-0 justify-center *:shrink-0 sm:col-start-1', {
							'sm:h-0 sm:items-start sm:*:mt-2': wide,
						})}
					>
						{action}
					</div>
				)}
			</div>
		</div>
	);
}
