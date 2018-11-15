import React, { Component } from 'react'
import './assets/style/style.scss';

export default class Container extends Component {
  render() {
		return (
			<div 
				className={
					`container 
					 ${this.props.centered ? 'container--centered' : ''} 
					 ${this.props.className} 
					 ${this.props.dark ? 'container--dark' : ''}`
				}
			>
				{this.props.title && <h2 className="container__title">{this.props.title}</h2>}
				{this.props.children}
			</div>
		)
  }
}
