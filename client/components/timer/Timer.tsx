import React, {createContext, ReactNode, useEffect, useState} from 'react';
import classNames from 'classnames';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {ArrowRight} from 'phosphor-react';
import HeaderControl from '@/components/timer/header-control/HeaderControl';
import TimerFooter from '@/components/timer/footer/TimerFooter';
import TimeDisplay from '@/components/timer/time-display/TimeDisplay';
import TimerScramble from '@/components/timer/time-display/timer-scramble/TimerScramble';
import KeyWatcher from '@/components/timer/key-watcher/KeyWatcher';
import {TimerProps, TimerStore} from '@/components/timer/@types/interfaces';
import {getStorageURL} from '@/util/storage';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {initTimer} from '@/components/timer/helpers/init';
import {stopAllTimers} from '@/components/timer/helpers/timers';
import {useSettings} from '@/util/hooks/useSettings';
import {listenForPbEvents} from '@/components/timer/helpers/pb';
import {useWindowListener} from '@/util/hooks/useListener';
import SmartCube from '@/components/timer/smart-cube/SmartCube';
import {Link} from 'react-router-dom';
import {isNotPro} from '@/util/pro';

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

	const sideLayout = timerLayout === 'left' || timerLayout === 'right';
	const timerStarted = !!context.timeStartedAt;
	const mainClass = classNames(
		'relative flex w-full select-none items-center justify-center',
		mobileMode &&
			'select-none border-b-[3px] border-dashed border-tmo/30 [-webkit-touch-callout:none] [-webkit-user-select:none]',
		sideLayout && '!h-[calc(100vh_-_70px)]'
	);
	const mainCenterClass = classNames('flex w-full flex-col items-center', {
		'-mt-[15vh]': sideLayout,
		'-mt-[10vh]': context.focusMode && !mobileMode,
	});
	const mainTimeClass = classNames({
		'flex w-[95%] max-w-[580px] flex-row items-center justify-between': timerType === 'smart' && cubeType === '333',
	});

	let timerFooterAd: ReactNode = null;
	if (isNotPro(me)) {
		timerFooterAd = (
			<div className="absolute bottom-0 left-1/2 mx-auto mb-1.5 mt-[25px] table -translate-x-1/2">
				<Link
					to="/account/pro"
					className="flex flex-row items-center gap-[5px] border-b-[3px] border-primary/60 pb-0.5 text-base text-tmo"
				>
					Support development and get Pro <ArrowRight weight="fill" />
				</Link>
			</div>
		);
	}

	const timeBar = (
		<div className={mainClass}>
			<div className={mainCenterClass}>
				<TimerScramble />
				<div className={mainTimeClass}>
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
		background = (
			<img
				alt="Timer background"
				src={backgroundUrl}
				className="absolute left-1/2 top-1/2 z-0 h-[calc(100%_+_60px)] w-[calc(100%_+_60px)] -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
			/>
		);
	}

	return (
		<div
			className={classNames(
				'relative mx-auto box-border flex h-screen h-dvh flex-col justify-end pb-[calc(10px_+_env(safe-area-inset-bottom))] text-text',
				mobileMode && 'h-[calc(100vh_-_55px)] h-[calc(100dvh_-_55px)]'
			)}
		>
			<TimerContext.Provider value={context}>
				<KeyWatcher>
					<HeaderControl />
					<div
						className={classNames(
							'z-10 box-border grid h-[calc(100vh_-_55px)] w-full gap-[15px]',
							context.focusMode && !mobileMode
								? '!grid-cols-[1fr] !grid-rows-none'
								: timerStarted && mobileMode
									? '!grid-cols-[1fr]'
									: timerLayout === 'left'
										? '!grid-cols-[350px_minmax(0,auto)] grid-rows-[1fr] !px-0 !pb-2.5 !pl-2.5'
										: timerLayout === 'right'
											? 'grid-cols-[minmax(0,auto)_350px] grid-rows-[1fr] !px-2.5 !pb-2.5'
											: 'grid-rows-[1fr_300px]',
							hideMobileTimerFooter && mobileMode && 'grid-rows-[1fr_50px]'
						)}
					>
						{body}
					</div>
				</KeyWatcher>
			</TimerContext.Provider>
			{background}
		</div>
	);
}
