import React, {Component} from 'react';

class LoginIn extends Component{

	render(){
		return(
			<button onClick={this.props.onClick}>Login</button>
		);
	}
}

export default  LoginIn