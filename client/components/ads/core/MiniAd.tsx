import React, {useEffect, useRef} from 'react';
import {ColorName, getColorHexValueFromName} from '../../../../shared/colors';
import {useGeneral} from '../../../util/hooks/useGeneral';
import {gqlMutateTyped} from '../../api';
import {AdView, ClickAdViewDocument, CreateAdViewDocument} from '../../../@types/generated/graphql';
import {ArrowSquareOut} from '@phosphor-icons/react';
import {useLocation} from 'react-router-dom';
import {useMe} from '../../../util/hooks/useMe';
import {isPro} from '../../../util/pro';
import RemoveAdButton from './RemoveAdButton';

interface Props {
	icon: JSX.Element;
	text: string;
	link: string;
	adKey: string;
	backgroundColor?: ColorName;
	iconColor?: ColorName;
	linkText?: string;
}

export default function MiniAd(props: Props) {
	const {icon, backgroundColor, adKey, iconColor, text, link, linkText} = props;

	const me = useMe();
	const adView = useRef<AdView>(null);
	const location = useLocation();
	const browserSessionId = useGeneral('browser_session_id');

	useEffect(() => {
		createAdView();
	}, []);

	if (isPro(me)) {
		return null;
	}

	async function createAdView() {
		const res = await gqlMutateTyped(CreateAdViewDocument, {
			input: {
				ad_key: adKey,
				browser_session_id: browserSessionId,
				pathname: location.pathname,
			},
		});

		adView.current = res.data.createAdView;
	}

	function clickAdView() {
		if (!adView.current) {
			return;
		}

		gqlMutateTyped(ClickAdViewDocument, {
			adViewId: adView.current.id,
		});
	}

	const iconSpan = (
		<span
			style={{
				color: getColorHexValueFromName(iconColor),
			}}
		>
			{icon}
		</span>
	);
	let linkSpan = null;

	if (linkText) {
		linkSpan = <span className="mr-2 text-sm font-normal">{linkText}</span>;
	}

	return (
		<div className="flex flex-col items-center">
			<div className="mb-1 overflow-hidden rounded-lg bg-tm-background">
				<div className="w-[30rem] max-w-full overflow-hidden rounded-lg border-4 border-solid border-tmo-background/20 bg-tmo-background/10 transition-colors hover:border-tmo-background/50">
					<a
						target="_blank"
						className="group relative grid grid-cols-[4rem_1fr] flex-row items-center"
						onClick={clickAdView}
						href={link}
					>
						<div
							style={{
								backgroundColor: getColorHexValueFromName(backgroundColor),
							}}
							className="flex h-16 w-16 items-center justify-center bg-green-500 text-4xl text-white"
						>
							{iconSpan}
						</div>
						<div className="h-full w-full py-2 px-3">
							<div className="relative h-full w-full">
								<div className="font-normal text-text/80">{text}</div>
								<div className="absolute bottom-0 right-0 flex flex-row items-center opacity-60 transition-opacity group-hover:opacity-100">
									{linkSpan}
									<ArrowSquareOut />
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
			<RemoveAdButton />
		</div>
	);
}
