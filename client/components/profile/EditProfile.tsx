import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {Field, FieldDescription, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {Textarea} from '@/components/ui/textarea';
import {Profile} from '@/types/profile';
import {api} from '@/util/api';
import React, {useState} from 'react';

interface Props {
	profile: Profile;
}

type ProfileForm = {
	bio: string;
	threeMethod: string;
	threeGoal: string;
	mainThreeCube: string;
	favoriteEvent: string;
	twitchLink: string;
	youtubeLink: string;
	twitterLink: string;
	redditLink: string;
};

function getInitialForm(profile: Profile): ProfileForm {
	return {
		bio: profile.bio || '',
		threeMethod: profile.three_method || '',
		threeGoal: profile.three_goal || '',
		mainThreeCube: profile.main_three_cube || '',
		favoriteEvent: profile.favorite_event || '',
		twitchLink: profile.twitch_link || '',
		youtubeLink: profile.youtube_link || '',
		twitterLink: profile.twitter_link || '',
		redditLink: profile.reddit_link || '',
	};
}

export default function EditProfile(props: Props) {
	const fieldId = React.useId();

	const {profile} = props;
	const [form, setForm] = useState<ProfileForm>(() => getInitialForm(profile));
	const [error, setError] = useState('');

	const updateProfileMutation = api.profile.update.useMutation();
	const loading = updateProfileMutation.isPending;

	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const {name, value} = e.target;

		setError('');
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function updateProfile() {
		if (loading) {
			return;
		}

		const {
			bio,
			youtubeLink,
			redditLink,
			twitterLink,
			twitchLink,
			threeMethod,
			threeGoal,
			mainThreeCube,
			favoriteEvent,
		} = form;

		if (twitchLink && !/https:\/\/(www\.)?twitch\.tv.+/.test(twitchLink)) {
			setError('Invalid Twitch link');
			return;
		}

		if (
			youtubeLink &&
			!/https:\/\/(www\.)?youtube\.com\/(user|channel|u|c)\/.+/.test(youtubeLink) &&
			!/https:\/\/(www\.)?youtube\.com\/@.+/.test(youtubeLink)
		) {
			setError('Invalid YouTube link');
			return;
		}

		if (redditLink && !/https:\/\/(www\.)?reddit\.com\/user\/.+/.test(redditLink)) {
			setError('Invalid Reddit Profile link');
			return;
		}

		if (twitterLink && !/https:\/\/(www\.)?twitter\.com\/.+/.test(twitterLink)) {
			setError('Invalid Twitter Profile link');
			return;
		}

		setError('');

		const input = {
			bio,
			three_method: threeMethod,
			three_goal: threeGoal,
			main_three_cube: mainThreeCube,
			favorite_event: favoriteEvent,
			twitch_link: twitchLink,
			youtube_link: youtubeLink,
			reddit_link: redditLink,
			twitter_link: twitterLink,
		};

		try {
			await updateProfileMutation.mutateAsync({
				input,
			});

			window.location.reload();
		} catch (e) {
			setError((e as Error).message);
		}
	}

	return (
		<div>
			<div className="mb-5 grid grid-cols-2 gap-5">
				<div className="col-span-2">
					<Field>
						<FieldLabel htmlFor={`${fieldId}-1`}>{'Bio'}</FieldLabel>
						<Textarea
							maxLength={250}
							value={form.bio}
							onChange={handleChange}
							name="bio"
							id={`${fieldId}-1`}
							aria-describedby={`${fieldId}-1-description`}
						/>
						<FieldDescription id={`${fieldId}-1-description`}>
							<span className={form.bio?.length >= 250 ? 'text-error' : undefined}>
								{(250 - (form.bio?.length ?? 0)).toLocaleString()}
							</span>
						</FieldDescription>
					</Field>
				</div>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-2`}>{'YouTube Channel'}</FieldLabel>
					<Input
						name="youtubeLink"
						value={form.youtubeLink}
						onChange={handleChange}
						id={`${fieldId}-2`}
						aria-describedby={`${fieldId}-2-description`}
					/>
					<FieldDescription id={`${fieldId}-2-description`}>
						{'Ex: https://youtube.com/user/PewDiePie'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-3`}>{'Twitch Channel'}</FieldLabel>
					<Input
						name="twitchLink"
						value={form.twitchLink}
						onChange={handleChange}
						id={`${fieldId}-3`}
						aria-describedby={`${fieldId}-3-description`}
					/>
					<FieldDescription id={`${fieldId}-3-description`}>
						{'Ex: https://www.twitch.tv/xqcow'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-4`}>{'Twitter Profile'}</FieldLabel>
					<Input
						name="twitterLink"
						value={form.twitterLink}
						onChange={handleChange}
						id={`${fieldId}-4`}
						aria-describedby={`${fieldId}-4-description`}
					/>
					<FieldDescription id={`${fieldId}-4-description`}>
						{'Ex: https://www.twitter.com/nasa'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-5`}>{'Reddit Profile'}</FieldLabel>
					<Input
						name="redditLink"
						value={form.redditLink}
						onChange={handleChange}
						id={`${fieldId}-5`}
						aria-describedby={`${fieldId}-5-description`}
					/>
					<FieldDescription id={`${fieldId}-5-description`}>
						{'Ex: https://www.reddit.com/user/nasa'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-6`}>{'3x3 Method'}</FieldLabel>
					<Input
						name="threeMethod"
						value={form.threeMethod}
						onChange={handleChange}
						id={`${fieldId}-6`}
						aria-describedby={`${fieldId}-6-description`}
					/>
					<FieldDescription id={`${fieldId}-6-description`}>
						{'Ex: CFOP, ROUX'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-7`}>{'3x3 Goal'}</FieldLabel>
					<Input
						name="threeGoal"
						value={form.threeGoal}
						onChange={handleChange}
						id={`${fieldId}-7`}
						aria-describedby={`${fieldId}-7-description`}
					/>
					<FieldDescription id={`${fieldId}-7-description`}>
						{'Ex: Sub 10'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-8`}>{'Main 3x3 Cube'}</FieldLabel>
					<Input
						name="mainThreeCube"
						value={form.mainThreeCube}
						onChange={handleChange}
						id={`${fieldId}-8`}
						aria-describedby={`${fieldId}-8-description`}
					/>
					<FieldDescription id={`${fieldId}-8-description`}>
						{'Ex: GAN 11 M Pro 3x3'}
					</FieldDescription>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-9`}>{'Favorite Event'}</FieldLabel>
					<Input
						name="favoriteEvent"
						value={form.favoriteEvent}
						onChange={handleChange}
						id={`${fieldId}-9`}
						aria-describedby={`${fieldId}-9-description`}
					/>
					<FieldDescription id={`${fieldId}-9-description`}>
						{'Ex: Pyraminx'}
					</FieldDescription>
				</Field>
			</div>
			<div className="flex flex-col items-start">
				<Button
					variant="default"
					onClick={updateProfile}
					size="lg"
					disabled={loading}
					aria-busy={loading}
				>
					{'Update Profile'}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
