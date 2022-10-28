import React from 'react';
import {connect} from 'react-redux';
import './User.scss';
import Avatar from '../../../common/avatar/Avatar';
import {openModal} from '../../../../actions/general';
import UserView from '../../manage_user/ManageUser';
import Emblem from '../../../common/emblem/Emblem';

class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: props.user,
			deleted: false,
			banned: props.user.banned,
		};
	}

	setBanned = (val) => {
		this.setState({
			banned: val,
		});
	};

	setUser = (user) => {
		this.setState({
			user,
		});
	};

	openUser = (e) => {
		e.preventDefault();

		this.props.dispatch(openModal(<UserView userId={this.state.user.id} />));
	};

	render() {
		const {banned, user} = this.state;
		let className = 'cd-admin__users__user';

		if (banned) {
			className += ' cd-admin__users__user--banned';
		}

		let blurb = null;
		if (this.props.blurb) {
			blurb = <p>{this.props.blurb}</p>;
		}

		let label = null;
		if (this.props.label) {
			label = <Emblem text={this.props.label} />;
		}

		const style = {};
		if (this.props.fullWidth) {
			style.padding = '0';
			style.width = '100%';
		}

		return (
			<button style={style} className={className} onClick={this.openUser}>
				{label}
				<Avatar target="_blank" showEmail profile={this.props.user.profile} user={user} />
				{blurb}
			</button>
		);
	}
}

export default connect((store) => ({
	general: store.general,
}))(User);
