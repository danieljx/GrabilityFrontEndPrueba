/*
 * Module dependencies
 */

import React from 'react';
import NoticesHeader from './NoticesHeader';
import NoticesBody from './NoticesBody';
import uid from 'uid';
import $ from 'jquery';

export default class NoticesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state 	= { notices: [], noticeActive: null };
		this.user 	= uid(10);
		this.upData = this.upData.bind(this);
	}
	componentWillMount() {
		this.upData();
	}
	upData() {
		$.get('/notices', (data) => {
			this.setState({ notices: data });
		});
	}
	render() {
		return <div className="pokeapp">
			<NoticesHeader upData={this.upData} />
			<NoticesBody notices={this.state.notices} />
		</div>
	}
}