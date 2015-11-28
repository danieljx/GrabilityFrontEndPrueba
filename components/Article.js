/*
 * Module dependencies
 */

import React from 'react';

export default class Article extends React.Component {
  onClick(ev) {
    this.showDetails(this.props.notice)
  }
  showDetails(notice) {
	console.log(notice);
  }
  render() {
    return <div className="col-sm-12">
			<article className="post">
				<figure className="picture pull-left">
					<span>
						<img src={this.props.notice.image} className="img-circle" onClick={this.onClick.bind(this)} />
					</span>
				</figure>
				<a className="title">{this.props.notice.title}</a>
			</article>
		</div>
  }
}