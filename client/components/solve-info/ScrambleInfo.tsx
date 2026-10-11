import CopyText from '@/components/common/CopyText';
import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import {AutosizeTextarea} from '@/components/ui/textarea';
import {Solve} from '@/types/solve';
import {cn} from '@/util/cn';
import React from 'react';

interface Props {
	solve: Solve;
	editMode?: boolean;
	fullPage?: boolean;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function ScrambleInfo(props: Props) {
	const {solve, editMode, fullPage, handleChange} = props;
	const scramble = solve.scramble;
	const eventType = solve.event_type;

	const scrambleBody = (
		<div
			className={cn('mb-[15px] w-full max-w-[260px]', {
				'lg:mb-0 lg:shrink-0': fullPage,
			})}
		>
			<ScrambleVisual eventType={eventType} scramble={scramble} />
		</div>
	);

	return (
		<div
			className={cn('flex w-full flex-col items-center', {
				'lg:flex-row lg:gap-10': fullPage,
			})}
		>
			{scrambleBody}
			<div
				className={cn('flex w-full flex-col items-center', {
					'lg:items-start': fullPage,
				})}
			>
				{editMode ? (
					<AutosizeTextarea
						value={scramble}
						name="scramble"
						onChange={handleChange}
						aria-label={'Scramble'}
					/>
				) : (
					<p
						className={cn(
							'text-text mt-0 mb-[15px] text-center font-mono leading-6 opacity-100',
							{'lg:text-left': fullPage},
						)}
					>
						{scramble}
					</p>
				)}
				<CopyText
					buttonProps={{
						children: 'Copy Scramble',
					}}
					text={scramble}
				/>
			</div>
		</div>
	);
}
