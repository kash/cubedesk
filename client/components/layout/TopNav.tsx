import Button from '@/components/common/Button';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import React from 'react';

interface Props {
	white?: boolean;
}

export default function TopNav(props: Props) {
	const {white} = props;

	const backgroundTheme = useTheme('background_color');

	let logoFile = 'cube_desk_logo_white';
	if (!backgroundTheme.isDark || white) {
		logoFile = 'cube_desk_logo_black';
	}

	const navClasses = [
		'fixed',
		'left-0',
		'top-0',
		'z-[10000]',
		'box-border',
		'w-full',
		white ? 'bg-white' : 'bg-tm-primary',
		'py-[15px]',
		white ? 'text-[#444]' : 'text-text',
	];

	return (
		<div className={navClasses.join(' ')}>
			<div className="mx-auto flex w-[95%] max-w-[1600px] flex-row items-center justify-between text-inherit">
				<div>
					<a href="/">
						<img
							className="w-[150px]"
							src={resourceUri(`/images/${logoFile}.svg`)}
							alt="CubeDesk Logo"
						/>
					</a>
				</div>

				<div className="flex flex-row items-center gap-5 text-inherit">
					<Button
						large
						textColor={white ? '#444444' : undefined}
						to="/login"
						text="Log In"
						transparent
					/>
					<Button large primary to="/signup" text="Sign uo" />
				</div>
			</div>
		</div>
	);
}
