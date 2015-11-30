/*
 * Module dependencies
 */

import React from 'react';
import NoticesHeader from './NoticesHeader';
import NoticesBody from './NoticesBody';
import uid from 'uid';
import $ from 'jquery';
import velocity from 'velocity-animate';

export default class NoticesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state 	= { notices: [], dataStatus: null, show: false };
		this.user 	= uid(10);
		this.upData = this.upData.bind(this);
	}
	componentDidMount() {
		this.showAnimate();		
		this.upData();
	}
	upData() {
		this.setState({ notices: [], dataStatus: "loading", show: false });
		$.getJSON('/notices').done((data) => {
			this.setState({ notices: data, dataStatus: "done" });
		}).fail(() => {
			this.setState({ notices: [], dataStatus: "fail" });
		});
	}
	showAnimate() {
		if(!this.state.show) {
			velocity($('#container'),{
				translateY: [15, 500],
				opacity: [1, 0]
			}, {
				duration: 800,
				display: 'block',
				easing: [70,8]
			});
			this.setState({ show: true });
		}
	}
	render() {
		return <div>
			<NoticesHeader upData={this.upData} />
			<NoticesBody notices={this.state.notices} dataStatus={this.state.dataStatus} />
		</div>
	}
}