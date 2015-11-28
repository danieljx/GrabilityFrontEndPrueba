/*
 * Module dependencies
 */

import React from 'react';
import Article from './Article';
import ArticleDetails from './ArticleDetails';

export default class NoticesBody extends React.Component {
  returnRender() {
	  
  }
  render() {
    return <div className="content">
				<section className="row">
				{
					this.props.notices.map((notice) => {
						  return <div>
								 <Article notice={notice} />
								 <ArticleDetails notice={notice} />
							</div>
					})
				}
				</section>
			</div>
  }
}