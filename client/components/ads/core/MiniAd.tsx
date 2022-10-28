import React, {useEffect, useRef} from 'react';
import Button from '../../common/button/Button';
import {ColorName, getColorHexValueFromName} from '../../../../shared/colors';
import {useGeneral} from '../../../util/hooks/useGeneral';
import {gqlMutateTyped} from '../../api';
import {ClickAdViewDocument, CreateAdViewDocument, UpdateAdViewDocument} from '../../../@types/generated/graphql';
import {AdView} from '../../../../server/schemas/AdView.schema';
import {useLocation} from 'react-router-dom';
import {useMe} from '../../../util/hooks/useMe';
import {isPro} from '../../../util/pro';
import RemoveAdButton from './RemoveAdButton';

interface Props {
	icon: string;
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
		<i
			style={{
				color: getColorHexValueFromName(iconColor),
			}}
			className={icon}
		/>
	);
	let linkSpan = null;

	if (linkText) {
		linkSpan = <span className="mr-2 text-sm font-normal">{linkText}</span>;
	}

	return (
		<div className="flex flex-col items-center">
			<div className="rounded-lg mb-1 overflow-hidden bg-tm-background">
				<div className="w-[30rem] border-solid rounded-lg border-4 border-tmo-background/20 transition-colors hover:border-tmo-background/50 max-w-full bg-tmo-background/10 overflow-hidden">
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
							className="w-16 h-16 text-4xl bg-green-500 flex justify-center items-center text-white"
						>
							{iconSpan}
						</div>
						<div className="py-2 px-3 w-full h-full">
							<div className="relative w-full h-full">
								<div className="font-normal text-text/80">{text}</div>
								<div className="absolute opacity-60 transition-opacity group-hover:opacity-100 flex flex-row items-center bottom-0 right-0">
									{linkSpan}
									<i className="ph-arrow-square-out" />
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
