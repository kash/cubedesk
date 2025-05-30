import React, { useState } from 'react';
import './EditProfile.scss';
import Input from '@/components/common/inputs/input/Input';
import TextArea from '@/components/common/inputs/textarea/TextArea';
import { Button } from '@/components/ui/button';
import { Profile } from '@/generated/zod';

interface EditProfileProps {
	profile: Profile;
}

export default function EditProfile(props: EditProfileProps) {
	const { profile } = props;

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [bio, setBio] = useState(profile.bio || '');
	const [threeMethod, setThreeMethod] = useState(profile.three_method || '');
	const [threeGoal, setThreeGoal] = useState(profile.three_goal || '');
	const [mainThreeCube, setMainThreeCube] = useState(profile.main_three_cube || '');
	const [favoriteEvent, setFavoriteEvent] = useState(profile.favorite_event || '');
	const [twitchLink, setTwitchLink] = useState(profile.twitch_link || '');
	const [youtubeLink, setYoutubeLink] = useState(profile.youtube_link || '');
	const [twitterLink, setTwitterLink] = useState(profile.twitter_link || '');
	const [redditLink, setRedditLink] = useState(profile.reddit_link || '');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setError('');
		const { name, value } = e.target;

		switch (name) {
			case 'bio':
				setBio(value);
				break;
			case 'threeMethod':
				setThreeMethod(value);
				break;
			case 'threeGoal':
				setThreeGoal(value);
				break;
			case 'mainThreeCube':
				setMainThreeCube(value);
				break;
			case 'favoriteEvent':
				setFavoriteEvent(value);
				break;
			case 'twitchLink':
				setTwitchLink(value);
				break;
			case 'youtubeLink':
				setYoutubeLink(value);
				break;
			case 'twitterLink':
				setTwitterLink(value);
				break;
			case 'redditLink':
				setRedditLink(value);
				break;
		}
	};

	const updateProfile = async () => {
		if (loading) {
			return;
		}

		if (twitchLink && !/https:\/\/(www\.)?twitch\.tv.+/.test(twitchLink)) {
			setError('Invalid Twitch link');
			return;
		}

		if (youtubeLink && !/https:\/\/(www\.)?youtube\.com\/(user|channel|u|c)\/.+/.test(youtubeLink)
				&& !/https:\/\/(www\.)?youtube\.com\/@.+/.test(youtubeLink)) {
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

		// TODO: Migrate to tRPC - need profile.update mutation
		// try {
		// 	await updateProfileMutation.mutateAsync({ input });
		// 	window.location.reload();
		// } catch (e: unknown) {
		// 	setError(e.message);
		// }

		setLoading(false);
		setError('Profile update not yet migrated to tRPC');
	};

	return (
		<div className="cd-profile__edit">
			<div className="cd-profile__edit__grid">
				<div className="cd-profile__edit__bio">
					<TextArea
						maxLength={250}
						fullWidth
						legend="Bio"
						value={bio}
						onChange={handleChange}
						name="bio"
					/>
				</div>
				<Input
					legend="YouTube Channel"
					info="Ex: https://youtube.com/user/PewDiePie"
					name="youtubeLink"
					value={youtubeLink}
					onChange={handleChange}
				/>
				<Input
					legend="Twitch Channel"
					info="Ex: https://www.twitch.tv/xqcow"
					name="twitchLink"
					value={twitchLink}
					onChange={handleChange}
				/>
				<Input
					legend="Twitter Profile"
					info="Ex: https://www.twitter.com/nasa"
					name="twitterLink"
					value={twitterLink}
					onChange={handleChange}
				/>
				<Input
					legend="Reddit Profile"
					info="Ex: https://www.reddit.com/user/nasa"
					name="redditLink"
					value={redditLink}
					onChange={handleChange}
				/>
				<Input
					legend="3x3 Method"
					info="Ex: CFOP, ROUX"
					name="threeMethod"
					value={threeMethod}
					onChange={handleChange}
				/>
				<Input
					legend="3x3 Goal"
					info="Ex: Sub 10"
					name="threeGoal"
					value={threeGoal}
					onChange={handleChange}
				/>
				<Input
					legend="Main 3x3 Cube"
					info="Ex: GAN 11 M Pro 3x3"
					name="mainThreeCube"
					value={mainThreeCube}
					onChange={handleChange}
				/>
				<Input
					legend="Favorite Event"
					info="Ex: Pyraminx"
					name="favoriteEvent"
					value={favoriteEvent}
					onChange={handleChange}
				/>
			</div>
			<Button
				variant="default"
				size="lg"
				onClick={updateProfile}
			>
				Update Profile
			</Button>
			{error && <p className="error-message">{error}</p>}
		</div>
	);
}
