import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import './Profile.scss';
import {CircleWavyCheck, Plus} from 'phosphor-react';
import {gql} from '@apollo/client';
import {gqlMutate, gqlQuery} from '../api';
import {PROFILE_FRAGMENT} from '../../util/graphql/fragments';
import PbCard from './pb_card/PbCard';
import PFP from './pfp/PFP';
import UploadCover from '../common/upload_cover/UploadCover';
import About from './about/About';
import {setSsrValue} from '../../actions/ssr';
import Header from '../layout/header/Header';
import WCA from './wca/WCA';
import FriendshipRequest from './friendship_request/FriendshipRequest';
import Avatar from '../common/avatar/Avatar';
import {getStorageURL} from '../../util/storage';
import {Image, Profile as ProfileSchema, PublicUserAccount, TopAverage, TopSolve} from '../../@types/generated/graphql';
import {useRouteMatch} from 'react-router-dom';
import {useSsr} from '../../util/hooks/useSsr';
import block from '../../styles/bem';
import {useMe} from '../../util/hooks/useMe';
import {useGeneral} from '../../util/hooks/useGeneral';
import {getMe} from '../../actions/account';
import ProfileElo from './elo/ProfileElo';
import AvatarDropdown from '../common/avatar/avatar_dropdown/AvatarDropdown';
import {openModal} from '../../actions/general';
import PublishSolves from './publish_solves/PublishSolves';
import Button from '../common/button/Button';
import LoadingIcon from '../common/LoadingIcon';

const b = block('profile');

interface IProfileData {
	user: PublicUserAccount;
	profile: ProfileSchema;
	pfpImage?: Image;
	headerImage?: Image;
	pbs: {
		[key: string]: {
			single?: TopSolve;
			average?: TopAverage;
		};
	};
}

export async function getProfileData(username: string): Promise<IProfileData> {
	const query = gql`
		${PROFILE_FRAGMENT}
		query Query($username: String) {
			profile(username: $username) {
				...ProfileFragment
			}
		}
	`;

	const result = await gqlQuery<{profile: ProfileSchema}>(query, {
		username,
	});

	const topSolves = result.data.profile.top_solves;
	const topAverages = result.data.profile.top_averages;

	const pbs = {};

	for (const topSolve of topSolves) {
		const solve = topSolve.solve;
		const cubeType = solve.cube_type;
		if (!pbs[cubeType]) {
			pbs[cubeType] = {};
		}
		pbs[cubeType].single = topSolve;
	}

	for (const topAverage of topAverages) {
		if (pbs[topAverage.cube_type]) {
			pbs[topAverage.cube_type].average = topAverage;
		}
	}

	return {
		user: result.data.profile.user,
		profile: result.data.profile,
		pfpImage: result.data.profile.pfp_image,
		headerImage: result.data.profile.header_image,
		pbs,
	};
}

export async function prefetchProfileData(store, req) {
	const profileData = await getProfileData(req.params.username);
	return store.dispatch(setSsrValue(profileData.user.username, profileData));
}

export default function Profile() {
	const dispatch = useDispatch();
	const match = useRouteMatch() as any;

	const matchUsername = match?.params?.username;

	const me = useMe();
	const mobileMode = useGeneral('mobile_mode');
	const [ssrProfile, setSsrProfile] = useSsr<IProfileData>(matchUsername);
	const [loading, setLoading] = useState(!ssrProfile);
	const [profileData, setProfileData] = useState<IProfileData>(ssrProfile);

	const username = matchUsername;
	const user = profileData?.user;
	const profile = profileData?.profile;
	const headerImage = profileData?.headerImage;
	const pbs = profileData?.pbs;

	useEffect(() => {
		if (profileData && profileData?.user?.username === matchUsername) {
			return null;
		}

		if (!loading) {
			setLoading(true);
		}

		getProfileData(matchUsername).then((data) => {
			setProfileData(data);
			setSsrProfile(data);
			setLoading(false);
		});
	}, [matchUsername]);

	async function uploadProfileHeader(variables) {
		const query = gql`
			mutation Mutate($file: Upload) {
				uploadProfileHeader(file: $file) {
					id
					storage_path
				}
			}
		`;

		const res = await gqlMutate<{uploadProfileHeader: Image}>(query, variables);
		const storagePath = res.data.uploadProfileHeader.storage_path;

		const newProfileData = {...profileData};
		newProfileData.headerImage = res.data.uploadProfileHeader;
		setProfileData(newProfileData);

		dispatch(getMe());

		return {
			storagePath,
		};
	}

	function openPublishSolves() {
		dispatch(
			openModal(<PublishSolves />, {
				title: 'Publish your PBs',
				description: 'Please make sure that the solves below are legitimate and yours.',
				onComplete: () => window.location.reload(),
			})
		);
	}

	let headerUrl = getStorageURL('storage/default_profile_background.jpeg');
	if (headerImage) {
		headerUrl = getStorageURL(headerImage.storage_path);
	}

	if (loading) {
		return (
			<div className={b({loading})}>
				<LoadingIcon />
			</div>
		);
	}

	const topCubeTypes = Object.keys(pbs);

	const pbCards = [];
	for (const ct of topCubeTypes) {
		let solves = [];
		const pb = pbs[ct];

		let topRecord = null;
		if (pb?.single) {
			solves = [pb.single.solve];
			topRecord = pb.single;
		} else if (pb.average) {
			const avg = pb.average;
			solves = [avg.solve_1, avg.solve_2, avg.solve_3, avg.solve_4, avg.solve_5];
			topRecord = pb.average;
		}

		pbCards.push(<PbCard key={pb.single.id} solves={solves} topRecord={topRecord} user={user} />);
	}

	const myProfile = user.id === me?.id;

	let pfp = (
		<div className={b('pfp')}>
			<PFP profile={profile} allowChange={myProfile} />;
			<div className={b('name')}>
				<h2>
					{user.username}
					{user.verified ? <CircleWavyCheck weight="fill" /> : null}
				</h2>
				<h3>Joined on {new Date(user.created_at).toLocaleDateString()}</h3>
			</div>
		</div>
	);

	if (mobileMode) {
		pfp = (
			<div className={b('pfp', {mobile: mobileMode})}>
				<Avatar user={user} profile={profile} />
			</div>
		);
	}

	let eloBody = null;

	if (user?.elo_rating) {
		eloBody = (
			<>
				<hr />
				<ProfileElo eloRating={user.elo_rating} />
			</>
		);
	}

	let pbsDiv = null;
	if (pbCards.length) {
		pbsDiv = (
			<>
				<hr />
				<div>
					<h2>Personal Bests</h2>
					<div className={b('pbs')}>{pbCards}</div>
				</div>
			</>
		);
	}

	let publishSolves = null;
	if (myProfile) {
		publishSolves = (
			<Button primary icon={<Plus weight="bold" />} text="Publish Your PBs" onClick={openPublishSolves} />
		);
	}

	return (
		<div className={b('wrapper', {standalone: !me, mobile: mobileMode})}>
			<Header
				path={`/profile/${username}`}
				title={user.username + ' Profile | CubeDesk'}
				description={`Check out ${user.username}'s CubeDesk profile to see their fastest speedcubing times. See their WCA profile, cubing bio, social links, and more`}
			/>
			<div className={b({me: myProfile})}>
				<div className={b('header')}>
					<WCA myProfile={myProfile} user={user} />
					{pfp}
					<div className={b('background')}>
						{myProfile ? <UploadCover upload={uploadProfileHeader} /> : null}

						<img src={headerUrl} alt="Header photo" />
					</div>
				</div>
				<div className={b('content')}>
					<div className={b('header-actions')}>
						<FriendshipRequest user={user} fetchData />
						{publishSolves}
						<AvatarDropdown user={user} />
					</div>
					<About profile={profile} />
					{eloBody}
					{pbsDiv}
				</div>
			</div>
		</div>
	);
}
