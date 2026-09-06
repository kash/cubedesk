import {cn} from '@/util/cn';
import * as SliderPrimitive from '@radix-ui/react-slider';
import React from 'react';

export function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	'aria-label': label,
	...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
	const values = value ?? defaultValue ?? [min];
	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={cn(
				'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className="bg-tmo-module/15 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
			>
				<SliderPrimitive.Range
					data-slot="slider-range"
					className="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
				/>
			</SliderPrimitive.Track>
			{values.map((_, index) => (
				<SliderPrimitive.Thumb
					key={index}
					data-slot="slider-thumb"
					aria-label={label}
					className="border-primary bg-module ring-primary/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-none disabled:pointer-events-none"
				/>
			))}
		</SliderPrimitive.Root>
	);
}
