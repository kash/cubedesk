import React from 'react';
import './WCA.scss';
import LinkButton from '../../common/button/LinkButton';
import Emblem from '../../common/emblem/Emblem';
import {gql} from '@apollo/client';
import {Check} from 'phosphor-react';
import {gqlQuery} from '../../api';

export default class WCA extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			wcaMe: null,
		};
	}

	async componentDidMount() {
		const query = gql`
			query Query {
				wcaMe {
					id
					url
					country_iso2
					wca_id
					created_at
				}
			}
		`;

		const res = await gqlQuery(query);

		this.setState({
			wcaMe: res.data.wcaMe,
		});
	}

	static getWcaIntegration = (user) => {
		for (const int of user?.integrations || []) {
			if (int.service_name === 'wca') {
				return int;
			}
		}

		return null;
	};

	render() {
		const {wcaMe} = this.state;
		const {myProfile, user} = this.props;
		const wcaInt = WCA.getWcaIntegration(user);

		let body;

		if (wcaInt) {
			if (wcaMe) {
				body = (
					<a target="_blank" href={wcaMe.url || null}>
						<Emblem text="WCA Profile Linked" icon={<Check weight="bold" />} green />
					</a>
				);
			}
		} else if (myProfile) {
			let url = 'https://www.cubedesk.io/oauth/wca';
			if (window.location.hostname.indexOf('localhost') > -1) {
				url = 'https://localhost:3000/oauth/wca';
			}

			const link = `https://www.worldcubeassociation.org/oauth/authorize?client_id=p_XZ2OvzijIXX-y8SZmQFa0w5m-B6u4U7PkrRWhojrs&redirect_uri=${url}&response_type=code&scope=public`;

			body = <LinkButton text="Link WCA Account" to={link} blue />;
		}

		return <div className="cd-profile__wca">{body}</div>;
	}
}
