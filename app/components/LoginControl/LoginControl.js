import React, {Component} from 'react';
import LoginIn from './LoginIn.js';
import LoginOut from './LoginOut.js';

class LoginControl extends Component{
	constructor(props){
		super(props);
		this.state = {"isLoginIn": false};

		this.handleLoginInClick = this.handleLoginInClick.bind(this);
		this.handleLoginOutClick = this.handleLoginOutClick.bind(this);
	}

	handleLoginInClick(){
		this.setState({
			"isLoginIn": true
		});
	}

	handleLoginOutClick(){
		this.setState({
			"isLoginIn": false
		});
	}

	render(){
		let isLoginIn = this.state.isLoginIn;

		if(isLoginIn){
			return(
				<div>
					<p>Hi,user</p>
					<LoginOut onClick={this.handleLoginOutClick}/>
				</div>
			);
		}
		else{
			return(
				<div>
					<p>Hi,Guest</p>
					<LoginIn onClick={this.handleLoginInClick}/>
				</div>
			);
		}
	}
}

export default LoginControl