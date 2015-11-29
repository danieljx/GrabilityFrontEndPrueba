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
		this.state 	= { notices: [], dataStatus: null };
		this.user 	= uid(10);
		this.upData = this.upData.bind(this);
	}
	componentDidMount() {
		this.upData();
	}
	upData() {
		this.setState({ notices: [], dataStatus: "loading" });
		$.getJSON('/notices').done((data) => {
			this.setState({ notices: data, dataStatus: "done" });
		}).fail(() => {
			this.setState({ notices: [], dataStatus: "fail" });
		});
	}
	render() {
		return <div>
			<NoticesHeader upData={this.upData} />
			<NoticesBody notices={this.state.notices} dataStatus={this.state.dataStatus} />
		</div>
	}
}