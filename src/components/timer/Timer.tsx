import {useGeneral} from '@/lib/util/hooks/useGeneral';
import {useWindowListener} from '@/lib/util/hooks/useListener';
import './Timer.scss';
import {useMe} from '@/lib/util/hooks/useMe';
import {useSettings} from '@/lib/util/hooks/useSettings';
import {isNotPro} from '@/lib/util/pro';
import {getStorageURL} from '@/lib/util/storage';
import block from '@/styles/bem';
import {ArrowRight} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, {createContext, ReactNode, useCallback, useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {TimerProps, TimerStore} from './@types/interfaces';
import TimerFooter from './footer/TimerFooter';
import HeaderControl from './header_control/HeaderControl';
import {initTimer} from './helpers/init';
import {listenForPbEvents} from './helpers/pb';
import {stopAllTimers} from './helpers/timers';
import KeyWatcher from './key_watcher/KeyWatcher';
import SmartCube from './smart_cube/SmartCube';
import TimeDisplay from './time_display/TimeDisplay';
import TimerScramble from './time_display/timer_scramble/TimerScramble';

const b = block('timer');

export interface ITimerContext extends TimerProps, TimerStore {}

export const TimerContext = createContext<ITimerContext>(null);

export default function Timer(props: TimerProps) {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const timerStore = useSelector((state: RootStateOrAny) => state.timer) as TimerStore;
	const mobileMode = useGeneral('mobile_mode');
	const cubeType = useSettings('cube_type');
	const hideMobileTimerFooter = useSettings('hide_mobile_timer_footer');
	const timerType = useSettings('timer_type');
	const focusMode = useSettings('focus_mode');
	let timerLayout = props.timerLayout || useSettings('timer_layout');

	const [heightSmall, setHeightSmall] = useState(false);

	if (timerLayout === 'bottom' && heightSmall && !mobileMode) {
		timerLayout = 'right';
	}

	if (mobileMode) {
		timerLayout = 'bottom';
	}

	const me = useMe();

	// All default values from the settings should go here
	const context: ITimerContext = {
		cubeType,
		focusMode,
		...timerStore,
		...props,
		timerLayout,
	};

	// Event listeners for single and AVG PBs
	listenForPbEvents(context);
	useWindowListener('resize', windowResize);

	// Initiating timer stuff
	useEffect(() => {
		toggleHtmlOverflow('hidden');
		initTimer(dispatch, context);
		windowResize();

		setLoading(false);

		// Go back to the default settings when user leaves page
		return () => {
			stopAllTimers();
			dispatch({
				type: 'RESET_TIMER_PARAMS',
			});
			toggleHtmlOverflow('unset');
		};
	}, [dispatch, context, toggleHtmlOverflow, windowResize]);

	const toggleHtmlOverflow = useCallback((value: string) => {
		const html = document.querySelector('html');

		if (html) {
			html.style.overflow = value;
		}
	}, []);

	const windowResize = useCallback(() => {
		if (window.innerHeight <= 780 && !heightSmall) {
			setHeightSmall(true);
		} else if (window.innerHeight > 780 && heightSmall) {
			setHeightSmall(false);
		}
	}, [heightSmall]);

	let smartCubeVisual: ReactNode = null;
	if (timerType === 'smart' && cubeType === '333') {
		smartCubeVisual = <SmartCube />;
	}

	if (loading) {
		return null;
	}

	let timerFooterAd = null;
	if (isNotPro(me)) {
		timerFooterAd = (
			<div className={b('get-pro')}>
				<Link href="/account/pro">
					Support development and get Pro <ArrowRight weight="fill" />
				</Link>
			</div>
		);
	}

	const timeBar = (
		<div className={b('main', {mobile: mobileMode})}>
			<div className={b('main-center')}>
				<TimerScramble />
				<div
					className={b('main-time', {
						smart: timerType === 'smart' && cubeType === '333',
					})}
				>
					<TimeDisplay />
					{smartCubeVisual}
				</div>
			</div>
			{timerFooterAd}
		</div>
	);

	let body = (
		<>
			{timerLayout === 'left' ? <TimerFooter /> : timeBar}
			{timerLayout === 'left' ? timeBar : <TimerFooter />}
		</>
	);

	if (context.focusMode) {
		body = timeBar;
	}

	let background: ReactNode = null;
	const backgroundPath = me?.timer_background?.storage_path;

	if (backgroundPath) {
		const backgroundUrl = getStorageURL(backgroundPath);
		background = <img alt="Timer background" src={backgroundUrl} className={b('background')} />;
	}

	return (
		<div
			className={b({
				started: !!context.timeStartedAt,
				mobile: mobileMode,
				focused: context.focusMode && !mobileMode,
				focusedWeb: context.focusMode && !mobileMode,
			})}
		>
			<TimerContext.Provider value={context}>
				<KeyWatcher>
					<HeaderControl />
					<div
						className={b('wrapper', {
							[timerLayout || 'bottom']: true,
							mobileFooterHidden: hideMobileTimerFooter && mobileMode,
						})}
					>
						{body}
					</div>
				</KeyWatcher>
			</TimerContext.Provider>
			{background}
		</div>
	);
}
