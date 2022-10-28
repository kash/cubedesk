import React, {ReactNode} from 'react';
import './HelpWrapper.scss';
import block from '../../../../styles/bem';
import HelpNav from '../help_nav/HelpNav';

const b = block('help-wrapper');

interface Props {
	children: ReactNode;
}

export default function HelpWrapper(props: Props) {
	return (
		<div className={b()}>
			<div className={b('body')}>
				<div className={b('nav-wrapper')}>
					<HelpNav />
				</div>
				<div className={b('content')}>{props.children}</div>
			</div>
		</div>
	);
}
