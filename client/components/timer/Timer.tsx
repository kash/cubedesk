import {TimerProps, TimerStore} from '@/components/timer/@types/interfaces';
import DemoWarning from '@/components/layout/wrapper/DemoWarning';
import TimerFooter from '@/components/timer/footer/TimerFooter';
import HeaderControl from '@/components/timer/header-control/HeaderControl';
import {initTimer} from '@/components/timer/helpers/init';
import {smartCubeSelected, smartTimerSelected, timesOnDevice} from '@/components/timer/helpers/util';
import {listenForPbEvents} from '@/components/timer/helpers/pb';
import {stopAllTimers} from '@/components/timer/helpers/timers';
import KeyWatcher from '@/components/timer/key-watcher/KeyWatcher';
import SmartCube from '@/components/timer/smart-cube/SmartCube';
import SmartTimer from '@/components/timer/smart-timer/SmartTimer';
import TimeDisplay from '@/components/timer/time-display/TimeDisplay';
import TimerScramble from '@/components/timer/time-display/timer-scramble/TimerScramble';
import {RootState} from '@/reducers/reducers';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useWindowListener} from '@/util/hooks/useListener';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import {getStorageURL} from '@/util/storage';
import classNames from 'classnames';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export interface ITimerContext extends TimerProps, TimerStore {
	// Where the mobile manual entry numpad is rendered, below the scramble and time
	mobileNumpadSlot?: HTMLDivElement | null;
}

const TimerContext = createContext<ITimerContext | null>(null);

export function useTimerContext(): ITimerContext {
	const ctx = useContext(TimerContext);
	if (!ctx) {
		throw new Error('useTimerContext must be used within TimerContext.Provider');
	}
	return ctx;
}

export default function Timer(props: TimerProps) {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(!props.demoMode);
	const timerStore = useSelector((state: RootState) => state.timer) as TimerStore;
	const mobileMode = useGeneral('mobile_mode');
	const eventType = useSettings('event_type');
	const hideMobileTimerFooter = useSettings('hide_mobile_timer_footer');
	const timerType = useSettings('timer_type');
	const focusMode = useSettings('focus_mode');
	const manualEntry = useSettings('manual_entry');
	let timerLayout = props.timerLayout || useSettings('timer_layout');

	const [heightSmall, setHeightSmall] = useState(false);

	if (timerLayout === 'bottom' && heightSmall && !mobileMode) {
		timerLayout = 'right';
	}

	if (mobileMode) {
		timerLayout = 'bottom';
	}

	const me = useMe();

	// On mobile, manual entry shows a numpad pinned to the bottom in place of the footer
	const mobileManualEntry = mobileMode && manualEntry && !timesOnDevice(timerType);
	const [mobileNumpadSlot, setMobileNumpadSlot] = useState<HTMLDivElement | null>(null);
	const showMobileNav = mobileMode && !!me && !focusMode;

	// All default values from the settings should go here
	const context: ITimerContext = {
		eventType,
		focusMode,
		...timerStore,
		...props,
		timerLayout,
		mobileNumpadSlot: mobileManualEntry ? mobileNumpadSlot : null,
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

	const isSmart = smartCubeSelected(context);
	const isSmartTimer = smartTimerSelected();
	let smartDevicePanel: ReactNode = null;
	if (isSmart) {
		smartDevicePanel = <SmartCube />;
	} else if (isSmartTimer) {
		smartDevicePanel = <SmartTimer />;
	}

	if (loading) {
		return null;
	}

	const sideLayout = timerLayout === 'left' || timerLayout === 'right';
	const timerStarted = !!context.timeStartedAt;
	const mainClass = classNames(
		'relative flex w-full select-none items-center justify-center',
		mobileMode && 'select-none [-webkit-touch-callout:none] [-webkit-user-select:none]',
		sideLayout && '!h-[calc(100vh_-_70px)]',
		{
			// When there's lots of room on mobile, sit a bit above center so the gap under the header isn't so big
			'items-center-safe pb-[22vh]':
				mobileMode && !mobileManualEntry && (context.focusMode || hideMobileTimerFooter),
		},
	);
	const mainCenterClass = classNames('flex w-full flex-col items-center', {
		'-mt-[15vh]': sideLayout,
		'-mt-[10vh]': context.focusMode && !mobileMode,
	});
	const mainTimeClass = classNames({
		'flex w-[95%] max-w-[580px] flex-row items-center justify-between': isSmart || isSmartTimer,
	});

	const timeBar = (
		<div data-timer-main className={mainClass}>
			<div className={mainCenterClass}>
				<TimerScramble />
				<div className={mainTimeClass}>
					<TimeDisplay />
					{smartDevicePanel}
				</div>
			</div>
		</div>
	);

	let body = (
		<>
			{timerLayout === 'left' ? <TimerFooter /> : timeBar}
			{timerLayout === 'left' ? timeBar : <TimerFooter />}
		</>
	);

	if (mobileManualEntry) {
		body = (
			<>
				{timeBar}
				<div ref={setMobileNumpadSlot} />
			</>
		);
	} else if (context.focusMode) {
		body = timeBar;
	}

	let background: ReactNode = null;
	const backgroundPath = me?.timer_background?.storage_path;

	if (backgroundPath) {
		const backgroundUrl = getStorageURL(backgroundPath);
		background = (
			<img
				alt="Timer background"
				src={backgroundUrl ?? undefined}
				className="absolute top-1/2 left-1/2 z-0 h-[calc(100%_+_60px)] w-[calc(100%_+_60px)] -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
			/>
		);
	}

	return (
		<div
			className={classNames(
				'text-text relative mx-auto box-border flex flex-col justify-end pb-[calc(10px_+_env(safe-area-inset-bottom))]',
				showMobileNav
					? 'h-[calc(100vh_-_55px)] supports-[height:100dvh]:h-[calc(100dvh_-_55px)]'
					: 'h-screen supports-[height:100dvh]:h-dvh',
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
								: mobileManualEntry
									? '!grid-cols-[1fr] !grid-rows-[minmax(0,1fr)_auto]'
									: context.focusMode
										? '!grid-cols-[1fr] !grid-rows-[minmax(0,1fr)]'
										: timerLayout === 'left'
											? '!grid-cols-[350px_minmax(0,auto)] grid-rows-[1fr] !px-0 !pb-2.5 !pl-2.5'
											: timerLayout === 'right'
												? 'grid-cols-[minmax(0,auto)_350px] grid-rows-[1fr] !px-2.5 !pb-2.5'
												: hideMobileTimerFooter && mobileMode
													? 'grid-rows-[1fr_50px]'
													: 'grid-rows-[1fr_300px]',
							timerStarted && mobileMode && '!grid-cols-[1fr]',
							{
								// Fill the space below the header instead of a fixed viewport height
								'!h-auto min-h-0 flex-1': mobileMode,
							},
						)}
					>
						{body}
					</div>
				</KeyWatcher>
			</TimerContext.Provider>
			{background}
			{(sideLayout || context.focusMode) && (
				<div className="absolute bottom-[calc(4px_+_env(safe-area-inset-bottom))] left-0 z-20 w-full">
					<DemoWarning />
				</div>
			)}
		</div>
	);
}
