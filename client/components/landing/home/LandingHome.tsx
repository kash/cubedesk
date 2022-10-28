import React from 'react';
import './LandingHome.scss';
import Feature from '../common/feature/Feature';
import Settings from './settings/Settings';
import {resourceUri} from '../../../util/storage';
import block from '../../../styles/bem';
import LandingHeader from './landing_header/LandingHeader';
import SignUpBanner from '../common/signup_banner/SignUpBanner';
import LandingFooter from '../common/landing_footer/LandingFooter';
import SocialProof from './social_proof/SocialProof';
import FeatureGrid from '../common/feature_grid/FeatureGrid';
import FeatureList from '../common/feature_list/FeatureList';
import SectionDivider from '../common/section_divider/SectionDivider';
import Header from '../../layout/header/Header';

const b = block('landing-home');

export default function LandingHome() {
	return (
		<div className={b()}>
			<Header title="CubeDesk - Rubik's Cube Timer | 1v1 | Trainer" path="/" />
			<LandingHeader />
			<FeatureList>
				<Feature
					imgSrc={resourceUri('/images/landing/timer.png')}
					imgAlt="Rubik's Cube professional timer with module for solves, stats, and solve chart."
					odd
					primaryColor="#FBAB7E"
					secondaryColor="#F7CE68"
					circlesPos="topLeft"
					circleCount={4}
					shadow
					title="Pro Timer"
					description="All the features you need in a timer to cube with no distractions."
					featureList={[
						{text: 'Focus mode'},
						{text: 'StackMat support'},
						{text: 'Manual time entry'},
						{text: 'Inspection mode'},
						{text: 'Change cube type'},
						{text: 'Up to 3 decimal points'},
						{text: 'Hotkeys'},
						{text: 'Lock, copy, and reset scramble'},
					]}
				/>
				<SocialProof />
				<Feature
					imgSrc={resourceUri(`/images/landing/stats.png`)}
					imgAlt="Analytics and stats"
					odd
					shadow
					dotsPos="topRight"
					signUpButton
					primaryColor="#2cb67d"
					secondaryColor="#32a89e"
					switchText
					title="Analytics"
					description="Explore in-depth stats made specifically for cubers."
					featureList={[
						{text: 'View progress over time'},
						{text: 'Break down solve time distribution'},
						{text: 'Cubing career stats'},
						{text: '1v1 stats'},
						{text: 'Event-specific breakdown'},
						{text: 'Lock, copy, and reset scramble'},
					]}
				/>
				<Feature
					imgSrc={resourceUri(`/images/landing/focus.png`)}
					imgAlt="Focus"
					shadow
					circlesPos="topRight"
					circleCount={6}
					primaryColor="#0B083F"
					secondaryColor="#1E1889"
					title="Focus"
					description="Cozy background, focus mode, non-stop cubing."
				/>
				<SectionDivider lines={2} reversed />
				<Feature title="Why Switch" vertical primaryColor="#0B083F" secondaryColor="#1E1889">
					<FeatureGrid
						gridItems={[
							{
								icon: 'ph-paint-brush-broad-bold',
								iconColor: '#8059ff',
								title: 'Modern Design',
								description:
									"Cubing software is long overdue for a makeover, and that's exactly what CubeDesk offers. Modern design, clean interface, and user-friendly.",
								imgAlt: "Modal showing a 10.60 second solve of the Rubik's Cube. The scramble of the cube is displayed along with the scramble visual.",
								imgSrc: resourceUri('/images/landing/why_switch/design.jpg'),
							},
							{
								title: 'Community',
								iconColor: '#00e330',
								icon: 'ph-users-bold',
								description:
									'With thousands of users, CubeDesk is one of the biggest cubing communities where you can make friends, share your PBs and 1v1 others.',
								imgAlt: '"1v1" in the center of the image surrounded by these icons: heart, chat, Discord, Instagram, Reddit, and a Rubik\'s Cube. In the four corners are these words: Leaderboards, Profiles, Friends, and Marketplace.',
								imgSrc: resourceUri('/images/landing/why_switch/community.jpg'),
							},
							{
								title: 'Easy Transfer',
								icon: 'ph-arrow-fat-line-right-bold',
								iconColor: '#ff9900',
								description:
									'Transfer all of your data from csTimer to CubeDesk with just a few click. Export, import, start cube. Simple.',
								imgAlt: 'Three steps to transfer your data from csTimer to CubeDesk. 1. Export csTimer session. 2. Open import module on CubeDesk. 3. Select file and import!',
								imgSrc: resourceUri('/images/landing/why_switch/import.jpg'),
							},
						]}
					/>
				</Feature>
				<SectionDivider lines={2} />
				<Feature
					imgSrc={resourceUri('/images/landing/trainer.png')}
					imgAlt="Advanced trainer"
					primaryColor="#607d8b"
					secondaryColor="#757575"
					shadow
					dotsPos="topLeft"
					signUpButton
					title="Advanced Trainer"
					description="All the algorithms you need to train like the pros."
					featureList={[
						{text: '750+ trainers'},
						{text: 'Create custom trainers'},
						{text: 'Marketplace with hundreds of free algs'},
					]}
				/>
				<Feature
					imgSrc={resourceUri(`/images/landing/themes.jpg`)}
					imgAlt="desc"
					dark
					vertical
					circlesPos="bottomLeft"
					circleCount={7}
					icon="ph-tree-evergreen-fill"
					primaryColor="#9899ed"
					secondaryColor="#5779ad"
					title="Themes"
					description="Get full control over how CubeDesk looks. A Pro membership will give you even more options."
				/>
				<Settings />
				<Feature
					imgSrc={resourceUri(`/images/landing/custom_builder.jpg`)}
					imgAlt="Custom trainer"
					switchText
					dotsPos="topRight"
					odd
					primaryColor="#00796b"
					secondaryColor="#4caf50"
					shadow
					title="Custom Trainer"
					description="Don't see the algorithm you're learning in the curated list? Create your own!"
					featureList={[
						{text: '2x2 and 3x3 supported'},
						{text: '3D cube designer'},
						{text: 'Share or download custom trainers from marketplace'},
					]}
				/>
			</FeatureList>
			<SignUpBanner />
			<LandingFooter />
		</div>
	);
}
