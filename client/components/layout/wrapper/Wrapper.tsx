import React, {ReactNode, useEffect} from 'react';
import Nav, {NAV_LINKS} from '@/components/layout/nav/Nav';
import {ToastContainer} from 'react-toastify';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSettings} from '@/util/hooks/useSettings';
import {updateThemeColors} from '@/components/layout/themes';
import {useMe} from '@/util/hooks/useMe';
import DemoWarning from '@/components/layout/wrapper/DemoWarning';
import {useRouteMatch} from 'react-router-dom';
import DemoRestricted from '@/components/layout/wrapper/DemoRestricted';

interface Props {
	noPadding?: boolean;
	hideTopNav?: boolean;
	children: ReactNode;
}

export default function Wrapper(props: Props) {
	const {hideTopNav, noPadding} = props;

	const me = useMe();
	const match = useRouteMatch();

	const appLoaded = useGeneral('app_loaded');
	const navCollapsed = useSettings('nav_collapsed');
	const forceNavCollapsed = useGeneral('force_nav_collapsed');
	const focusMode = useSettings('focus_mode');
	const mobileMode = useGeneral('mobile_mode');
	const primaryColor = useSettings('primary_color');
	const secondaryColor = useSettings('secondary_color');
	const backgroundColor = useSettings('background_color');
	const moduleColor = useSettings('module_color');
	const buttonColor = useSettings('button_color');
	const textColor = useSettings('text_color');

	useEffect(() => {
		if (!appLoaded || typeof document === 'undefined') {
			return;
		}

		updateThemeColors();
	}, [appLoaded, buttonColor, primaryColor, secondaryColor, backgroundColor, moduleColor, textColor]);

	let nav = <Nav />;
	if (hideTopNav) {
		nav = null;
	}

	function isPageAuthBlocked() {
		if (me) {
			return false;
		}

		for (const navLink of NAV_LINKS) {
			if (navLink.loginRequired && match.path.match(navLink.match)) {
				return true;
			}
		}

		return false;
	}

	let body = props.children;
	if (isPageAuthBlocked()) {
		body = <DemoRestricted />;
	}

	let gridColumns = 'grid-cols-[18rem_1fr]';

	if (navCollapsed || forceNavCollapsed) {
		gridColumns = 'grid-cols-[80px_1fr]';
	}

	if (focusMode || mobileMode) {
		gridColumns = 'grid-cols-1';
	}

	const bodyClasses = ['grid', 'h-full', 'min-h-screen', 'w-full', 'box-border', 'bg-background', gridColumns];
	if (mobileMode) {
		bodyClasses.push('pt-[55px]');
	}

	const contentClasses = ['relative', 'w-full'];
	if (!noPadding) {
		contentClasses.push('box-border', 'p-[30px]');
	}

	return (
		<div className="cd">
			<ToastContainer />
			<div className={bodyClasses.join(' ')}>
				{nav}
				<div className={contentClasses.join(' ')}>
					<DemoWarning />
					{body}
				</div>
			</div>
		</div>
	);
}
