import React from 'react';
import classNames from 'classnames';

interface Props {
	level: number;
}

export default function Battery(props: Props) {
	const {level} = props;
	let percent = '0%';
	if (typeof level === 'number') {
		percent = level + '%';
	}

	return (
		<div className="flex flex-row items-center">
			<div
				className={classNames(
					'relative h-2 w-[18px] overflow-hidden rounded-[3px] border-2 border-success',
					level < 20 && '!border-warning'
				)}
			>
				<div
					style={{width: percent}}
					className={classNames('absolute left-0 top-0 h-full bg-success', level < 20 && '!bg-warning')}
				/>
			</div>
			<div className={classNames('h-[7px] w-0.5 rounded-r-sm bg-success', level < 20 && '!bg-warning')} />
		</div>
	);
}
