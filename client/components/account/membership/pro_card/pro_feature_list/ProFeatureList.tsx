import React from 'react';
import './ProFeatureList.scss';
import {
	CaretUp,
	CaretDown,
	Confetti,
	Gift,
	Sword,
	DiscordLogo,
	Tree,
	ChartLineUp,
	HeartStraight,
} from '@phosphor-icons/react';
import block from '../../../../../styles/bem';
import ProFeature from '../pro_feature/ProFeature';
import {useToggle} from '../../../../../util/hooks/useToggle';
import Button from '../../../../common/button/Button';
import {resourceUri} from '../../../../../util/storage';

const b = block('pro-feature-list');

export default function ProFeatureList() {
	const [detailed, toggleDetailed] = useToggle(false);
	const hideDetails = !detailed;

	return (
		<div className={b()}>
			<div className={b('header')}>
				<h4>Features</h4>
				<Button
					white
					flat
					icon={detailed ? <CaretUp /> : <CaretDown />}
					text={detailed ? 'Hide details' : 'Show details'}
					onClick={() => toggleDetailed()}
				/>
			</div>

			<div className={b('list', {hideDetails})}>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="rgb(var(--error-color))"
					icon={<HeartStraight weight="fill" />}
					name="Support development"
					description="CubeDesk is developed by me, @kash. I'm a software developer with a full-time job and paying for the servers alone is hard! Your Pro subscription will greatly help the development of CubeDesk ❤️"
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="#7e57c2"
					icon={<ChartLineUp weight="fill" />}
					name="In-depth stats"
					description="In addition to the normal stats, you'll have access to detailed charts and numbers to help you better understand your progress."
					imgSrc={resourceUri('/images/pro/detailed_stats.png')}
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="#78909c"
					icon={<Sword weight="fill" />}
					name="Customize matches"
					description="Create custom 1v1 matches where you can set the cube type and number of players."
					imgSrc={resourceUri('/images/pro/customize_matches.png')}
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="rgb(var(--success-color))"
					icon={<Tree weight="fill" />}
					name="Theme customization"
					description="Pick from a wide range of Pro-exclusive themes or customize your own."
					imgSrc={resourceUri('/images/pro/customize_themes.png')}
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="#7289da"
					icon={<DiscordLogo weight="fill" />}
					name="Pro-exclusive Discord channels"
					description="Chat with other Pros, find players to 1v1 against, network, and learn from other CubeDesk enthusiasts! @kash and other cubing personalities will be spending lots of time there, too."
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="rgb(var(--warning-color))"
					icon={<Gift weight="fill" />}
					name="Monthly giveaways"
					description="All Pros get entered into a monthly giveaway with lots of prizes. From gift cards to bluetooth timers to mystery prizes!"
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="rgb(var(--success-color))"
					icon={<Confetti weight="fill" />}
					name="And more!"
				>
					<div className={b('more')}>
						<ul>
							<li>Pro badge on CubeDesk</li>
							<li>Change nickname on Discord</li>
							<li>Priority email/Discord support</li>
							<li>Early access to new features</li>
							<li>Pro-exclusive timer modules</li>
						</ul>
					</div>
				</ProFeature>
			</div>
		</div>
	);
}
