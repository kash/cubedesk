import {DemoImportProvider} from '@/components/login/DemoImport';
import {setGeneral} from '@/actions/general';
import Banned from '@/components/layout/Banned';
import Header from '@/components/layout/Header';
import {initAnonymousAppData, initAppData, setBrowserSessionId} from '@/components/layout/init';
import LoadingCover from '@/components/layout/LoadingCover';
import {updateThemeColors} from '@/components/layout/themes';
import TopNav from '@/components/layout/TopNav';
import Wrapper from '@/components/layout/wrapper/Wrapper';
import {useDemoSolveWarning} from '@/util/hooks/useDemoSolveWarning';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {initPageTitleBlink} from '@/util/page_title_blink';
import {initSocketIO} from '@/util/socket/socketio';
import React, {ReactNode, useEffect, useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';

interface Props {
	path?: string;
	noPadding?: boolean;
	standalone?: boolean;
	children?: ReactNode;
	hideTopNav?: boolean;
	restricted?: boolean;
}

export default function App(props: Props = {}) {
	return (
		<DemoImportProvider>
			<AppContent {...props} />
		</DemoImportProvider>
	);
}

function AppContent(props: Props) {
	const {path, standalone, children, hideTopNav, restricted} = props;

	const dispatch = useDispatch();
	const appLoaded = useGeneral('app_loaded');
	const me = useMe();
	useDemoSolveWarning(!me && appLoaded);

	function appInitiated() {
		setBrowserSessionId(dispatch);
		initPageTitleBlink();
		updateThemeColors();
		dispatch(setGeneral('app_loaded', true));
	}

	useLayoutEffect(() => {
		// Demo data is local and synchronous, so initialize it before the first paint.
		if (!me && !appLoaded) {
			initAnonymousAppData(appInitiated);
		}
	}, []);

	useEffect(() => {
		if (!me || appLoaded) {
			return;
		}

		initSocketIO();
		initAppData(me, dispatch, appInitiated);
	}, []);

	if (typeof window !== 'undefined') {
		if (!me && restricted) {
			window.location.href =
				'/login?redirect=' + encodeURIComponent(window.location.pathname);
			return;
		}
	}

	if (!me && restricted && !standalone) {
		return null;
	}

	if (me?.banned_forever || me?.banned_until) {
		return <Banned />;
	}

	if (standalone) {
		return (
			<div className="bg-background min-h-screen">
				{hideTopNav ? null : <TopNav />}
				{children}
			</div>
		);
	}

	const wrapperProps = {
		...props,
		children: null,
	};

	return (
		<>
			<Header
				path={path ?? ''}
				title={
					path === '/' && !me
						? "CubeDesk - Rubik's Cube Timer | 1v1 | Trainer"
						: undefined
				}
			/>
			{me ? <LoadingCover fadeOut={appLoaded} /> : null}
			{appLoaded || (!me && path === '/') ? (
				<Wrapper {...wrapperProps}>{children}</Wrapper>
			) : null}
		</>
	);
}
