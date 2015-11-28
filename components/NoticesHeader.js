/*
 * Module dependencies
 */

import React from 'react';

export default class NoticesFeader extends React.Component {
  onClick(ev) {
    this.props.upData()
  }
  render() {
    return  <nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="btn btn-default navbar-btn pull-left" onClick={this.onClick.bind(this)}>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand"></a>
					</div>
				</div>
			</nav>
  }
}