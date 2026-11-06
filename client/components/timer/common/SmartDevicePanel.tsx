import {cn} from '@/util/cn';
import {useGeneral} from '@/util/hooks/useGeneral';
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
	const mobileMode = useGeneral('mobile_mode');

	return (
		<div
			className={cn('flex flex-col items-center', {
				'mt-[15px] w-1/2': !mobileMode,
				'sm:mt-0': wide && !mobileMode,
				'w-full': mobileMode,
			})}
		>
			{/* Controls go beside the visual, or below it when there isn't room. The action button stays centered under the visual */}
			<div
				className={cn('grid items-center justify-items-center gap-x-3 gap-y-2', {
					'grid-cols-[auto] sm:grid-cols-[auto_auto]': !mobileMode,
					'sm:gap-y-0': wide && !mobileMode,
					'w-full grid-cols-[1fr_auto_1fr]': mobileMode,
				})}
			>
				<div className={cn({'mb-[5px]': !wide, 'col-start-2': mobileMode})}>{visual}</div>
				<div
					className={cn('flex items-center gap-2.5', {
						'flex-row sm:flex-col': !mobileMode,
						'col-start-3 flex-col justify-self-start': mobileMode,
						// Taking no height keeps the row as short as the visual. Without a height of their own the
						// controls would shrink to fit
						'sm:h-0 sm:justify-start sm:self-start sm:*:shrink-0':
							hangControls && !mobileMode,
						// Lines the top of the Bluetooth glyph up with the top of the visual: the glyph is padded inside its
						// 1.75rem status box, and its first 20/256 is empty
						'sm:-mt-[calc((1.75rem-18px)/2+18px*20/256)]': hangControls && !mobileMode,
						// The menu button is 0.5rem taller than the status icon, so this centers the visual between the two
						// icons rather than their boxes
						'sm:pt-1': wide && !hangControls && !mobileMode,
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
						className={cn('flex w-0 justify-center *:shrink-0', {
							'sm:col-start-1': !mobileMode,
							'col-start-2': mobileMode,
							'sm:h-0 sm:items-start sm:*:mt-2': wide && !mobileMode,
						})}
					>
						{action}
					</div>
				)}
			</div>
		</div>
	);
}
