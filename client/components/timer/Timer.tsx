import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import './Timer.scss';
import {ArrowRight} from 'phosphor-react';
import HeaderControl from './header_control/HeaderControl';
import TimerFooter from './footer/TimerFooter';
import TimeDisplay from './time_display/TimeDisplay';
import TimerScramble from './time_display/timer_scramble/TimerScramble';
import KeyWatcher from './key_watcher/KeyWatcher';
import {TimerProps, TimerStore} from './@types/interfaces';
import {getStorageURL} from '../../util/storage';
import block from '../../styles/bem';
import {useGeneral} from '../../util/hooks/useGeneral';
import {useMe} from '../../util/hooks/useMe';
import {initTimer} from './helpers/init';
import {stopAllTimers} from './helpers/timers';
import {useSettings} from '../../util/hooks/useSettings';
import {listenForPbEvents} from './helpers/pb';
import {useWindowListener} from '../../util/hooks/useListener';
import SmartCube from './smart_cube/SmartCube';
import {Link} from 'react-router-dom';
import {isNotPro} from '../../util/pro';

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
	}, []);

	function toggleHtmlOverflow(value: string) {
		const html = document.querySelector('html');

		if (html) {
			html.style.overflow = value;
		}
	}

	function windowResize() {
		if (window.innerHeight <= 780 && !heightSmall) {
			setHeightSmall(true);
		} else if (window.innerHeight > 780 && heightSmall) {
			setHeightSmall(false);
		}
	}

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
				<Link to="/account/pro">
					Get CubeDesk Pro for $5/mo <ArrowRight weight="fill" />
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
