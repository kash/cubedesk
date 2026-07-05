import {getMe} from '@/actions/account';
import {openModal} from '@/actions/general';
import {setSsrValue} from '@/actions/ssr';
import Avatar from '@/components/common/avatar/Avatar';
import AvatarDropdown from '@/components/common/avatar/AvatarDropdown';
import Button from '@/components/common/Button';
import LoadingIcon from '@/components/common/LoadingIcon';
import UploadCover from '@/components/common/UploadCover';
import Header from '@/components/layout/Header';
import About from '@/components/profile/About';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import PbCard from '@/components/profile/PbCard';
import PFP from '@/components/profile/PFP';
import ProfileElo from '@/components/profile/ProfileElo';
import PublishSolves from '@/components/profile/PublishSolves';
import WCA from '@/components/profile/WCA';
import {Image} from '@/types/image';
import {Profile as ProfileSchema} from '@/types/profile';
import {TopAverage, TopSolve} from '@/types/top-solve';
import {PublicUserAccount} from '@/types/user';
import {api} from '@/util/api';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {useSsr} from '@/util/hooks/useSsr';
import {getStorageURL} from '@/util/storage';
import {trpc} from '@/util/trpc';
import {fileToBase64} from '@/util/upload';
import classNames from 'classnames';
import {CircleWavyCheck, Plus} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';

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

async function getProfileData(username: string): Promise<IProfileData> {
	// Raw client (not hooks): this also runs server-side for SSR prefetch
	const profileData = (await trpc.profile.get.query({username})) as unknown as ProfileSchema;

	const topSolves = profileData.top_solves || [];
	const topAverages = profileData.top_averages || [];

	const pbs = {};

	for (const topSolve of topSolves) {
		if (!topSolve?.solve?.cube_type) {
			continue;
		}

		const solve = topSolve.solve;
		const cubeType = solve.cube_type as string;
		if (!pbs[cubeType]) {
			pbs[cubeType] = {};
		}
		pbs[cubeType].single = topSolve;
	}

	for (const topAverage of topAverages) {
		if (!topAverage?.cube_type) {
			continue;
		}

		const cubeType = topAverage.cube_type as string;
		if (pbs[cubeType]) {
			pbs[cubeType].average = topAverage;
		}
	}

	return {
		user: profileData.user as PublicUserAccount,
		profile: profileData,
		pfpImage: profileData.pfp_image || undefined,
		headerImage: profileData.header_image || undefined,
		pbs,
	};
}

export async function prefetchProfileData(store, req) {
	const profileData = await getProfileData(req.params.username);
	return store.dispatch(setSsrValue(profileData.user.username as string, profileData));
}

export default function Profile() {
	const dispatch = useDispatch();
	const match = useRouteMatch() as any;

	const matchUsername = match?.params?.username;

	const me = useMe();
	const mobileMode = useGeneral('mobile_mode');
	const [ssrProfile, setSsrProfile] = useSsr<IProfileData>(matchUsername);
	const [loading, setLoading] = useState(!ssrProfile);
	const [profileData, setProfileData] = useState<IProfileData | null>(ssrProfile);

	const uploadHeaderMutation = api.profile.uploadHeader.useMutation();

	const username = matchUsername;
	const user = profileData?.user;
	const profile = profileData?.profile;
	const headerImage = profileData?.headerImage;
	const pbs = profileData?.pbs ?? {};

	useEffect(() => {
		if (profileData && profileData?.user?.username === matchUsername) {
			return;
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

	async function uploadProfileHeader(variables: {file: File}) {
		if (!profileData) {
			return {storagePath: ''};
		}

		const image = await uploadHeaderMutation.mutateAsync({
			fileName: variables.file.name,
			data: await fileToBase64(variables.file),
		});

		const newProfileData = {...profileData};
		newProfileData.headerImage = (image as unknown as Image) || undefined;
		setProfileData(newProfileData);

		dispatch(getMe() as any);

		return {
			storagePath: image?.storage_path || '',
		};
	}

	function openPublishSolves() {
		dispatch(
			openModal(<PublishSolves />, {
				title: 'Publish your PBs',
				description: 'Please make sure that the solves below are legitimate and yours.',
				onComplete: () => window.location.reload(),
			}),
		);
	}

	let headerUrl = getStorageURL('storage/default_profile_background.jpeg') || '';
	if (headerImage) {
		headerUrl = getStorageURL(headerImage.storage_path || '') || '';
	}

	if (loading) {
		return (
			<div className="text-text flex min-h-[300px] items-center justify-center text-[1.8rem]">
				<LoadingIcon />
			</div>
		);
	}

	// Once loading is done, a fetched profile is required to render anything
	if (!user || !profile) {
		return null;
	}

	const topCubeTypes = Object.keys(pbs);

	const pbCards: React.ReactNode[] = [];
	for (const ct of topCubeTypes) {
		let solves: any[] = [];
		const pb = pbs[ct];

		let topRecord: any = null;
		if (pb?.single) {
			solves = [pb.single.solve];
			topRecord = pb.single;
		} else if (pb?.average) {
			const avg = pb.average;
			solves = [avg.solve_1, avg.solve_2, avg.solve_3, avg.solve_4, avg.solve_5];
			topRecord = pb.average;
		}

		pbCards.push(
			<PbCard key={topRecord.id} solves={solves} topRecord={topRecord} user={user as any} />,
		);
	}

	const myProfile = user.id === me?.id;

	let pfp: React.ReactNode = (
		<div className="relative z-10 flex flex-row items-center">
			<PFP profile={profile} allowChange={myProfile} />
			<div
				className={classNames('relative -top-1 ml-5', {
					'group-hover/profile-header:hidden': myProfile,
				})}
			>
				<h2 className="text-text flex flex-row items-center text-[4rem] font-bold [text-shadow:0_1px_7px_rgba(0,0,0,0.1)]">
					{user.username}
					{user.verified ? (
						<CircleWavyCheck
							className="text-info ml-[15px] table text-[2.5rem]"
							weight="fill"
						/>
					) : null}
				</h2>
				<h3 className="text-text text-[1.2rem] opacity-90 [text-shadow:0_1px_7px_rgba(0,0,0,0.1)]">
					Joined on {new Date(user.created_at).toLocaleDateString()}
				</h3>
			</div>
		</div>
	);

	if (mobileMode) {
		pfp = (
			<div className="relative z-10 flex flex-row items-center">
				<Avatar user={user as any} profile={profile as any} />
			</div>
		);
	}

	let eloBody: React.ReactNode = null;

	if (user?.elo_rating) {
		eloBody = (
			<>
				<hr className="bg-tmo-background/[0.08] mx-auto my-[30px] h-1 w-full border-0" />
				<ProfileElo eloRating={user.elo_rating} />
			</>
		);
	}

	let pbsDiv: React.ReactNode = null;
	if (pbCards.length) {
		pbsDiv = (
			<>
				<hr className="bg-tmo-background/[0.08] mx-auto my-[30px] h-1 w-full border-0" />
				<div className="my-[35px]">
					<h2>Personal Bests</h2>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-5">
						{pbCards}
					</div>
				</div>
			</>
		);
	}

	let publishSolves: React.ReactNode = null;
	if (myProfile) {
		publishSolves = (
			<Button
				primary
				icon={<Plus weight="bold" />}
				text="Publish Your PBs"
				onClick={openPublishSolves}
			/>
		);
	}

	return (
		<div
			className={classNames({
				'bg-background box-border min-h-screen pt-[100px] pb-[150px]': !me,
			})}
		>
			<Header
				path={`/profile/${username}`}
				title={user.username + ' Profile | CubeDesk'}
				description={`Check out ${user.username}'s CubeDesk profile to see their fastest speedcubing times. See their WCA profile, cubing bio, social links, and more`}
			/>
			<div
				className={classNames('flex flex-col items-center pb-[100px]', {
					'mx-auto w-[95%] max-w-[1000px]': !me,
				})}
			>
				<div className="group/profile-header relative mb-[7px] box-border flex h-[300px] w-full max-w-[1500px] flex-row items-center p-[25px]">
					<WCA myProfile={myProfile} user={user} />
					{pfp}
					<div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden rounded-[15px] bg-black">
						{myProfile ? <UploadCover upload={uploadProfileHeader} /> : null}

						<img
							className="h-full w-full object-cover opacity-50"
							src={headerUrl}
							alt="Header photo"
						/>
					</div>
				</div>
				<div className="relative mx-auto w-full max-w-[1200px]">
					<div className="absolute top-0 right-0 z-[1000] flex flex-row justify-end gap-2.5">
						<FriendshipRequest user={user as any} fetchData />
						{publishSolves}
						<AvatarDropdown user={user as any} />
					</div>
					<About profile={profile} />
					{eloBody}
					{pbsDiv}
				</div>
			</div>
		</div>
	);
}
