import React from 'react';
import './TopNav.scss';
import block from '../../../styles/bem';
import Button from '../../common/button/Button';
import {useTheme} from '../../../util/hooks/useTheme';
import {resourceUri} from '../../../util/storage';

const b = block('top-nav');

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

	return (
		<div
			className={b({
				white,
			})}
		>
			<div className={b('body')}>
				<div className={b('logo')}>
					<a href="/">
						<img src={resourceUri(`/images/${logoFile}.svg`)} alt="CubeDesk Logo" />
					</a>
				</div>

				<div className={b('links')}>
					<Button large textColor={white ? '#444444' : null} to="/login" text="Log In" transparent />
					<Button large primary to="/signup" text="Sign uo" />
				</div>
			</div>
		</div>
	);
}
