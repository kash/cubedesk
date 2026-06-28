import React, {useState} from 'react';
import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import Input from '@/components/common/inputs/input/Input';
import TextArea from '@/components/common/inputs/textarea/TextArea';
import Button from '@/components/common/button/Button';
import {Profile} from '../../../server/schemas/Profile.schema';

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

const UPDATE_PROFILE_MUTATION = gql`
	mutation Mutate($input: ProfileInput) {
		updateProfile(input: $input) {
			bio
			id
			three_method
		}
	}
`;

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
	const {profile} = props;
	const [form, setForm] = useState<ProfileForm>(() => getInitialForm(profile));
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

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

		setLoading(true);
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
			await gqlMutate(UPDATE_PROFILE_MUTATION, {
				input,
			});

			window.location.reload();
		} catch (e) {
			setError((e as Error).message);
			setLoading(false);
		}
	}

	return (
		<div>
			<div className="mb-5 grid grid-cols-2 gap-5">
				<div className="col-span-2">
					<TextArea
						maxLength={250}
						fullWidth
						legend="Bio"
						value={form.bio}
						onChange={handleChange}
						name="bio"
					/>
				</div>
				<Input
					legend="YouTube Channel"
					info="Ex: https://youtube.com/user/PewDiePie"
					name="youtubeLink"
					value={form.youtubeLink}
					onChange={handleChange}
				/>
				<Input
					legend="Twitch Channel"
					info="Ex: https://www.twitch.tv/xqcow"
					name="twitchLink"
					value={form.twitchLink}
					onChange={handleChange}
				/>
				<Input
					legend="Twitter Profile"
					info="Ex: https://www.twitter.com/nasa"
					name="twitterLink"
					value={form.twitterLink}
					onChange={handleChange}
				/>
				<Input
					legend="Reddit Profile"
					info="Ex: https://www.reddit.com/user/nasa"
					name="redditLink"
					value={form.redditLink}
					onChange={handleChange}
				/>
				<Input
					legend="3x3 Method"
					info="Ex: CFOP, ROUX"
					name="threeMethod"
					value={form.threeMethod}
					onChange={handleChange}
				/>
				<Input
					legend="3x3 Goal"
					info="Ex: Sub 10"
					name="threeGoal"
					value={form.threeGoal}
					onChange={handleChange}
				/>
				<Input
					legend="Main 3x3 Cube"
					info="Ex: GAN 11 M Pro 3x3"
					name="mainThreeCube"
					value={form.mainThreeCube}
					onChange={handleChange}
				/>
				<Input
					legend="Favorite Event"
					info="Ex: Pyraminx"
					name="favoriteEvent"
					value={form.favoriteEvent}
					onChange={handleChange}
				/>
			</div>
			<Button
				text="Update Profile"
				primary
				glow
				large
				loading={loading}
				error={error}
				onClick={updateProfile}
			/>
		</div>
	);
}
