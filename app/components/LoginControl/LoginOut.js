import React, {Component} from 'react';

class LoginIn extends Component{
	render(){
		return(
			<button onClick={this.props.onClick}>OFF</button>
		);
	}
}

export default  LoginIn