import {useTranslation} from 'react-i18next';
import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {Field, FieldDescription, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {Textarea} from '@/components/ui/textarea';
import {Profile} from '@/types/profile';
import {api} from '@/util/api';
import {normalizeYouTubeChannelLink} from '@/util/youtube';
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
		youtubeLink: normalizeYouTubeChannelLink(profile.youtube_link || ''),
		twitterLink: profile.twitter_link || '',
		redditLink: profile.reddit_link || '',
	};
}

export default function EditProfile(props: Props) {
	const {t, i18n} = useTranslation();
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
		const normalizedYouTubeLink = normalizeYouTubeChannelLink(youtubeLink);

		if (twitchLink && !/https:\/\/(www\.)?twitch\.tv.+/.test(twitchLink)) {
			setError(t('profile.invalidTwitchLink'));
			return;
		}

		if (
			normalizedYouTubeLink &&
			!/^https:\/\/(www\.)?youtube\.com\/(user|channel|u|c)\/[^\s/?#]+(?:[/?#]\S*)?$/i.test(
				normalizedYouTubeLink,
			) &&
			!/^https:\/\/(www\.)?youtube\.com\/@[^\s/?#]+(?:[/?#]\S*)?$/i.test(
				normalizedYouTubeLink,
			)
		) {
			setError(t('profile.invalidYoutubeLink'));
			return;
		}

		if (redditLink && !/https:\/\/(www\.)?reddit\.com\/user\/.+/.test(redditLink)) {
			setError(t('profile.invalidRedditLink'));
			return;
		}

		if (twitterLink && !/https:\/\/(www\.)?twitter\.com\/.+/.test(twitterLink)) {
			setError(t('profile.invalidTwitterLink'));
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
			youtube_link: normalizedYouTubeLink,
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
						<FieldLabel htmlFor={`${fieldId}-1`}>{t('profile.edit.bio')}</FieldLabel>
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
								{(250 - (form.bio?.length ?? 0)).toLocaleString(i18n.language)}
							</span>
						</FieldDescription>
					</Field>
				</div>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-2`}>{t('profile.edit.youtube')}</FieldLabel>
					<Input
						name="youtubeLink"
						value={form.youtubeLink}
						onChange={handleChange}
						id={`${fieldId}-2`}
						aria-describedby={`${fieldId}-2-description`}
					/>
					<FieldDescription id={`${fieldId}-2-description`}>
						{t('profile.edit.youtubeExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-3`}>{t('profile.edit.twitch')}</FieldLabel>
					<Input
						name="twitchLink"
						value={form.twitchLink}
						onChange={handleChange}
						id={`${fieldId}-3`}
						aria-describedby={`${fieldId}-3-description`}
					/>
					<FieldDescription id={`${fieldId}-3-description`}>
						{t('profile.edit.twitchExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-4`}>{t('profile.edit.twitter')}</FieldLabel>
					<Input
						name="twitterLink"
						value={form.twitterLink}
						onChange={handleChange}
						id={`${fieldId}-4`}
						aria-describedby={`${fieldId}-4-description`}
					/>
					<FieldDescription id={`${fieldId}-4-description`}>
						{t('profile.edit.twitterExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-5`}>{t('profile.edit.reddit')}</FieldLabel>
					<Input
						name="redditLink"
						value={form.redditLink}
						onChange={handleChange}
						id={`${fieldId}-5`}
						aria-describedby={`${fieldId}-5-description`}
					/>
					<FieldDescription id={`${fieldId}-5-description`}>
						{t('profile.edit.redditExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-6`}>{t('profile.edit.method')}</FieldLabel>
					<Input
						name="threeMethod"
						value={form.threeMethod}
						onChange={handleChange}
						id={`${fieldId}-6`}
						aria-describedby={`${fieldId}-6-description`}
					/>
					<FieldDescription id={`${fieldId}-6-description`}>
						{t('profile.edit.methodExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-7`}>{t('profile.edit.goal')}</FieldLabel>
					<Input
						name="threeGoal"
						value={form.threeGoal}
						onChange={handleChange}
						id={`${fieldId}-7`}
						aria-describedby={`${fieldId}-7-description`}
					/>
					<FieldDescription id={`${fieldId}-7-description`}>
						{t('profile.edit.goalExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-8`}>{t('profile.edit.mainCube')}</FieldLabel>
					<Input
						name="mainThreeCube"
						value={form.mainThreeCube}
						onChange={handleChange}
						id={`${fieldId}-8`}
						aria-describedby={`${fieldId}-8-description`}
					/>
					<FieldDescription id={`${fieldId}-8-description`}>
						{t('profile.edit.mainCubeExample')}
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-9`}>
						{t('profile.edit.favoriteEvent')}
					</FieldLabel>
					<Input
						name="favoriteEvent"
						value={form.favoriteEvent}
						onChange={handleChange}
						id={`${fieldId}-9`}
						aria-describedby={`${fieldId}-9-description`}
					/>
					<FieldDescription id={`${fieldId}-9-description`}>
						{t('profile.edit.favoriteEventExample')}
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
					{t('profile.edit.update')}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
