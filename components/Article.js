/*
 * Module dependencies
 */

import React from 'react';
import $ from 'jquery';
import velocity from 'velocity-animate';

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state 	= { show: false };
	}
	componentDidMount() {
		this.showAnimate();
	}
	onClick(ev) {
		this.showDetails(this.props.notice)
	}
	showDetails(notice) {
		var details = $('#' + this.props.notice.id);
		if(!this.state.show) {
			velocity(details,{
				translateY: [15, 500],
				opacity: [1, 0]
			}, {
				duration: 800,
				display: 'block',
				easing: [70,8]
			});
			this.setState({ show: true });
		} else {
			velocity(details,{
				translateY: [500, 15],
				opacity: [1, 0]
			}, {
				duration: 800,
				display: 'none',
				easing: [70,8]
			});
			this.setState({ show: false });
		}
	}
	showAnimate() {
		var node = this._div.getDOMNode();
		velocity(node,{
			left: "100px"
		}, {
			duration: 800,
			display: 'block',
			drag: true,
			stagger: 100,
			easing: [70,8]
		}, 625, [500, 20]);
		velocity(node,{
			left: "0"
		}, {
			duration: 800,
			display: 'block',
			drag: true,
			stagger: 100,
			easing: [70,8]
		}, 50, [20, 500]);
	}
	render() {
		return <div className="col-sm-12" ref={(c) => this._div = c}>
				<article className="post">
					<figure className="picture pull-left">
						<span>
							<img src={this.props.notice.image} className="img-circle" onClick={this.onClick.bind(this)} />
						</span>
					</figure>
					<a className="title">{this.props.notice.title}  onClick={this.onClick.bind(this)}</a>
				</article>
			</div>
	}
}