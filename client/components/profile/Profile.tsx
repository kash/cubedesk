import {getMe} from '@/actions/account';
import {setSsrValue} from '@/actions/ssr';
import AvatarDropdown from '@/components/common/avatar/AvatarDropdown';
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
import WcaProfileCard from '@/components/profile/WcaProfileCard';
import {useWcaProfile} from '@/components/profile/useWcaProfile';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {Image} from '@/types/image';
import {Profile as ProfileSchema} from '@/types/profile';
import {TopAverage, TopSolve} from '@/types/top-solve';
import {PublicUserAccount} from '@/types/user';
import {api} from '@/util/api';
import {useMe} from '@/util/hooks/useMe';
import {useSsr} from '@/util/hooks/useSsr';
import {getStorageURL} from '@/util/storage';
import {trpc} from '@/util/trpc';
import {fileToBase64} from '@/util/upload';
import classNames from 'classnames';
import {CalendarBlank, CircleWavyCheck, Plus, Trophy} from 'phosphor-react';
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
		pbs[cubeType] ??= {};
		pbs[cubeType].average = topAverage;
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
	const [publishSolvesDialog, setPublishSolvesDialog] = React.useState<{
		props: React.ComponentProps<typeof PublishSolves>;
		title: React.ReactNode;
		description: React.ReactNode;
		onComplete: React.ComponentProps<typeof PublishSolves>['onComplete'];
	} | null>(null);

	const dispatch = useDispatch();
	const match = useRouteMatch() as any;

	const matchUsername = match?.params?.username;

	const me = useMe();
	const [ssrProfile, setSsrProfile] = useSsr<IProfileData>(matchUsername);
	const [loading, setLoading] = useState(!ssrProfile);
	const [profileData, setProfileData] = useState<IProfileData | null>(ssrProfile);

	const uploadHeaderMutation = api.profile.uploadHeader.useMutation();

	const username = matchUsername;
	const user = profileData?.user;
	const profile = profileData?.profile;
	const headerImage = profileData?.headerImage;
	const pbs = profileData?.pbs ?? {};
	const wcaProfile = useWcaProfile(
		!loading && user?.username?.toLowerCase() === String(matchUsername).toLowerCase()
			? user
			: undefined,
	);

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
		setPublishSolvesDialog({
			props: {},
			title: 'Publish your PBs',
			description:
				'Share your fastest solves with the community. Review your records before publishing.',
			onComplete: () => window.location.reload(),
		});
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

	const myProfile = user.id === me?.id;
	const pbCards: React.ReactNode[] = [];
	for (const [cubeType, pb] of Object.entries(pbs)) {
		if (pb.single?.solve) {
			pbCards.push(
				<PbCard
					key={`${cubeType}-single`}
					solves={[pb.single.solve]}
					topRecord={pb.single}
					user={user}
				/>,
			);
		}
		if (pb.average) {
			const avg = pb.average;
			const solves = [avg.solve_1, avg.solve_2, avg.solve_3, avg.solve_4, avg.solve_5];
			if (solves.every(Boolean)) {
				pbCards.push(
					<PbCard
						key={`${cubeType}-average`}
						solves={solves}
						topRecord={avg}
						user={user}
					/>,
				);
			}
		}
	}

	return (
		<>
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
				<div className="mx-auto w-full max-w-[1200px] px-3 pb-16 sm:px-6">
					<section className="border-tmo-module/10 bg-module overflow-hidden rounded-2xl border">
						<div className="bg-tmo-module/5 relative isolate h-32 sm:h-44">
							<img
								className="h-full w-full object-cover"
								src={headerUrl}
								alt="Profile cover"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
							{myProfile ? <UploadCover upload={uploadProfileHeader} /> : null}
						</div>
						<div className="relative px-5 pb-5 sm:px-7 sm:pb-6">
							<div className="relative -mt-10 mb-4 flex items-end justify-between gap-3">
								<PFP profile={profile} allowChange={myProfile} />
								<div className="flex flex-wrap items-center justify-end gap-2 pt-12">
									<FriendshipRequest user={user} fetchData />
									<WCA
										myProfile={myProfile}
										user={user}
										profileUrl={wcaProfile.data?.url}
									/>
									<AvatarDropdown
										user={{...user, profile}}
										menuProps={{
											triggerProps: {
												variant: 'outline',
												size: 'icon',
												'aria-label': 'Profile options',
											},
										}}
									/>
								</div>
							</div>
							<h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight break-all sm:text-3xl">
								{user.username}
								{user.verified ? (
									<CircleWavyCheck
										className="text-info size-6 shrink-0"
										weight="fill"
										aria-label="Verified"
									/>
								) : null}
							</h1>
							<p className="text-text/50 mt-2 mb-0 flex items-center gap-1.5 text-xs">
								<CalendarBlank size={14} />
								Joined{' '}
								{new Date(user.created_at).toLocaleDateString(undefined, {
									month: 'long',
									year: 'numeric',
								})}
							</p>
						</div>
					</section>
					<div className="mt-7 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
						<About profile={profile} />
						<div className="min-w-0 space-y-8">
							<WcaProfileCard {...wcaProfile} />
							<section aria-labelledby="personal-bests-heading">
								<div className="mb-4 flex flex-wrap items-center justify-between gap-3">
									<div>
										<h2
											id="personal-bests-heading"
											className="flex items-center gap-2 text-lg font-semibold tracking-tight"
										>
											<Trophy size={20} className="text-text/50" />
											Personal bests
										</h2>
										<p className="text-text/50 mt-1 mb-0 text-xs">
											A collection of the fastest solves.
										</p>
									</div>
									{myProfile ? (
										<Button onClick={openPublishSolves} size="sm">
											<Plus weight="bold" />
											Publish PBs
										</Button>
									) : null}
								</div>
								{pbCards.length ? (
									<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
										{pbCards}
									</div>
								) : (
									<div className="border-tmo-module/15 flex flex-col items-center rounded-xl border border-dashed px-6 py-12 text-center">
										<Trophy size={28} className="text-text/30 mb-3" />
										<p className="mb-0 text-sm font-medium">
											No records published yet
										</p>
										<p className="text-text/50 mt-1 mb-0 max-w-64 text-xs leading-relaxed">
											{myProfile
												? 'Your best solves deserve a spot here. Publish your PBs to get started.'
												: 'Published personal bests will appear here.'}
										</p>
									</div>
								)}
							</section>
							{user.elo_rating ? <ProfileElo eloRating={user.elo_rating} /> : null}
						</div>
					</div>
				</div>
			</div>
			<Dialog
				open={publishSolvesDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setPublishSolvesDialog(null);
					}
				}}
			>
				{publishSolvesDialog && (
					<DialogContent width={540} className="rounded-2xl p-5 sm:p-7">
						<DialogHeader
							className="[&_p]:text-text/60 mb-5 space-y-2 [&_[data-slot=dialog-title]]:text-xl [&_p]:text-sm [&_p]:leading-relaxed"
							topBody={
								<div className="bg-tmo-module/5 text-text mb-4 flex size-10 items-center justify-center rounded-xl">
									<Trophy size={22} />
								</div>
							}
							title={publishSolvesDialog.title}
							description={publishSolvesDialog.description}
						/>
						<PublishSolves
							{...publishSolvesDialog.props}
							onComplete={(...args) => {
								setPublishSolvesDialog((current) =>
									current === publishSolvesDialog ? null : current,
								);
								publishSolvesDialog.onComplete?.(...args);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
