/*
 * Module dependencies
 */

import React from 'react';

export default class Article extends React.Component {
  render() {
    return <div className="col-sm-12" id={this.props.notice.id}>
			<article className="details">
				<figure className="picture pull-left">
					<span>
						<img src={this.props.notice.image} />
					</span>
				</figure>
				<div className="body">
					<div className="titler">
						<h2 className="title">{this.props.notice.title}</h2>
					</div>
					<div className="contentDetails">
						<p>{this.props.notice.content}</p>
					</div>
				</div>
			</article>
		</div>
  }
}
