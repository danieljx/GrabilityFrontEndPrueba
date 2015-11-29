/*
 * Module dependencies
 */

import React from 'react';
import Article from './Article';
import ArticleDetails from './ArticleDetails';

export default class NoticesBody extends React.Component {
  renderBody() {
		if (this.props.dataStatus == "done")				
			return this.props.notices.map((notice) => {
				  return <div>
						 <Article notice={notice} />
						 <ArticleDetails notice={notice} />
					</div>
			})
		else if (this.props.dataStatus == "loading")
			return <div className="cssload-thecube">
					<div className="cssload-cube cssload-c1"></div>
					<div className="cssload-cube cssload-c2"></div>
					<div className="cssload-cube cssload-c4"></div>
					<div className="cssload-cube cssload-c3"></div>
				</div>
  }
  render() {
    return <div className="content">
				<section className="row">
				{ this.renderBody() }
				</section>
			</div>
  }
}