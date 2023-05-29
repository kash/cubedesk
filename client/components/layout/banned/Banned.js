import React from 'react';
import {connect} from 'react-redux';
import {Warning} from '@phosphor-icons/react';
import './Banned.scss';
import {getDateFromNow} from '../../../util/dates';
import Button from '../../common/button/Button';
import {logOut} from '../../../util/auth/logout';

class Banned extends React.Component {
	render() {
		const {me} = this.props;

		let bannedText;

		if (me.banned_forever) {
			bannedText = (
				<p>
					You account has been <span>permanently</span> banned
				</p>
			);
		} else {
			const until = getDateFromNow(me.banned_until);
			bannedText = (
				<p>
					Ban will be automatically lifted <span>{until}</span>
				</p>
			);
		}

		let reason;
		if (me.bans && me.bans.length) {
			const ban = me.bans[0];
			reason = ban.reason;
		} else {
			reason = <i>No reason provided</i>;
		}

		return (
			<div className="cd-banned">
				<div className="cd-banned__body">
					<Warning weight="bold" />
					<h4>Account banned</h4>
					{bannedText}
					<div className="cd-banned__body__reason">
						<span>Reason</span>
						<p>{reason}</p>
					</div>
					<p>
						If you believe this is a mistake, please email{' '}
						<a href="mailto:kash@cubedesk.io">kash@cubedesk.io</a>
					</p>
					<Button text="Log out" onClick={logOut} />
				</div>
			</div>
		);
	}
}

export default connect((store) => ({
	me: store.account.me,
}))(Banned);
