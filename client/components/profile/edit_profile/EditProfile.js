import React from 'react';
import './EditProfile.scss';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import Input from '../../common/inputs/input/Input';
import TextArea from '../../common/inputs/textarea/TextArea';
import Button from '../../common/button/Button';

export default class EditProfile extends React.Component {
	constructor(props) {
		super(props);

		const profile = this.props.profile;

		this.state = {
			error: '',
			loading: false,
			bio: profile.bio,
			threeMethod: profile.three_method,
			threeGoal: profile.three_goal,
			mainThreeCube: profile.main_three_cube,
			favoriteEvent: profile.favorite_event,
			twitchLink: profile.twitch_link,
			youtubeLink: profile.youtube_link,
			twitterLink: profile.twitter_link,
			redditLink: profile.reddit_link,
		};
	}

	handleChange = (e) => {
		this.setState({
			error: '',
			[e.target.name]: e.target.value,
		});
	};

	updateProfile = async () => {
		const {
			loading,
			bio,
			youtubeLink,
			redditLink,
			twitterLink,
			twitchLink,
			threeMethod,
			threeGoal,
			mainThreeCube,
			favoriteEvent,
		} = this.state;

		if (loading) {
			return;
		}

		if (twitchLink && !/https:\/\/(www\.)?twitch\.tv.+/.test(twitchLink)) {
			this.setState({
				error: 'Invalid Twitch link',
			});
			return;
		}

		if (youtubeLink && !/https:\/\/(www\.)?youtube\.com\/(user|channel|u|c)\/.+/.test(youtubeLink)) {
			this.setState({
				error: 'Invalid YouTube link',
			});
			return;
		}

		if (redditLink && !/https:\/\/(www\.)?reddit\.com\/user\/.+/.test(redditLink)) {
			this.setState({
				error: 'Invalid Reddit Profile link',
			});
			return;
		}

		if (twitterLink && !/https:\/\/(www\.)?twitter\.com\/.+/.test(twitterLink)) {
			this.setState({
				error: 'Invalid Twitter Profile link',
			});
			return;
		}

		this.setState({
			loading: true,
		});

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

		const query = gql`
			mutation Mutate($input: ProfileInput) {
				updateProfile(input: $input) {
					bio
					id
					three_method
				}
			}
		`;

		try {
			await gqlMutate(query, {
				input,
			});

			window.location.reload();
		} catch (e) {
			this.setState({
				error: e.message,
			});
		}
	};

	render() {
		const {
			bio,
			loading,
			threeMethod,
			youtubeLink,
			twitchLink,
			twitterLink,
			redditLink,
			favoriteEvent,
			mainThreeCube,
			threeGoal,
			error,
		} = this.state;

		return (
			<div className="cd-profile__edit">
				<div className="cd-profile__edit__grid">
					<div className="cd-profile__edit__bio">
						<TextArea
							maxLength={250}
							fullWidth
							legend="Bio"
							value={bio}
							onChange={this.handleChange}
							name="bio"
						/>
					</div>
					<Input
						legend="YouTube Channel"
						info="Ex: https://youtube.com/user/PewDiePie"
						name="youtubeLink"
						value={youtubeLink}
						onChange={this.handleChange}
					/>
					<Input
						legend="Twitch Channel"
						info="Ex: https://www.twitch.tv/xqcow"
						name="twitchLink"
						value={twitchLink}
						onChange={this.handleChange}
					/>
					<Input
						legend="Twitter Profile"
						info="Ex: https://www.twitter.com/nasa"
						name="twitterLink"
						value={twitterLink}
						onChange={this.handleChange}
					/>
					<Input
						legend="Reddit Profile"
						info="Ex: https://www.reddit.com/user/nasa"
						name="redditLink"
						value={redditLink}
						onChange={this.handleChange}
					/>
					<Input
						legend="3x3 Method"
						info="Ex: CFOP, ROUX"
						name="threeMethod"
						value={threeMethod}
						onChange={this.handleChange}
					/>
					<Input
						legend="3x3 Goal"
						info="Ex: Sub 10"
						name="threeGoal"
						value={threeGoal}
						onChange={this.handleChange}
					/>
					<Input
						legend="Main 3x3 Cube"
						info="Ex: GAN 11 M Pro 3x3"
						name="mainThreeCube"
						value={mainThreeCube}
						onChange={this.handleChange}
					/>
					<Input
						legend="Favorite Event"
						info="Ex: Pyraminx"
						name="favoriteEvent"
						value={favoriteEvent}
						onChange={this.handleChange}
					/>
				</div>
				<Button
					text="Update Profile"
					primary
					glow
					large
					loading={loading}
					error={error}
					onClick={this.updateProfile}
				/>
			</div>
		);
	}
}
