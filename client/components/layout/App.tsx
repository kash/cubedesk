import React, {ReactNode, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Wrapper from '@/components/layout/wrapper/Wrapper';
import LoadingCover from '@/components/layout/LoadingCover';
import Modal from '@/components/common/modal/Modal';
import {initPageTitleBlink} from '@/util/page_title_blink';
import Banned from '@/components/layout/Banned';
import TopNav from '@/components/layout/TopNav';
import Header from '@/components/layout/Header';
import {initAnonymousAppData, initAppData, setBrowserSessionId} from '@/components/layout/init';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {setGeneral} from '@/actions/general';
import {updateThemeColors} from '@/components/layout/themes';
import {updateSettingsBasedOnProStatus} from '@/components/layout/pro-audit';
import {initSocketIO} from '@/util/socket/socketio';

interface Props {
	path?: string;
	noPadding?: boolean;
	standalone?: boolean;
	children?: ReactNode;
	hideTopNav?: boolean;
	restricted?: boolean;
}

export default function App(props: Props = {}) {
	const {path, standalone, children, hideTopNav, restricted} = props;

	const dispatch = useDispatch();
	const modals = useGeneral('modals');
	const appLoaded = useGeneral('app_loaded');
	const me = useMe();

	function appInitiated() {
		setBrowserSessionId(dispatch);
		initPageTitleBlink();
		updateThemeColors();
		updateSettingsBasedOnProStatus(me);
		dispatch(setGeneral('app_loaded', true));
	}

	useEffect(() => {
		if (appLoaded) {
			return;
		}

		if (!me) {
			initAnonymousAppData(appInitiated);
			return;
		}

		initSocketIO();
		initAppData(me, dispatch, appInitiated);
	}, []);

	if (typeof window !== 'undefined') {
		if (!me && restricted) {
			window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
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
			<div className="min-h-screen bg-background">
				{hideTopNav ? null : <TopNav />}
				{children}
			</div>
		);
	}

	let modalOutput: ReactNode = null;
	if (modals && modals.length) {
		const modalList = [];
		for (let i = 0; i < modals.length; i += 1) {
			const modal = modals[i];

			modalList.push(
				<Modal key={modal.createdAt} zIndex={1000000 + i} {...modal.options}>
					{modal.body}
				</Modal>
			);
		}

		modalOutput = <div className="cd-modal--list">{modalList}</div>;
	}

	const wrapperProps = {
		...props,
		children: null,
	};

	return (
		<>
			<Header path={path} />
			<LoadingCover fadeOut={appLoaded} />
			{modalOutput}
			{appLoaded ? <Wrapper {...wrapperProps}>{children}</Wrapper> : null}
		</>
	);
}
