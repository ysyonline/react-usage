import React from 'react';

class SelectName extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: "UTC"};

		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.handleChangeClick = this.handleChangeClick.bind(this);
	}

	handleChangeClick(event){
		this.setState({
			value: event.target.value
		});
	}

	handleSubmitClick(event){
		alert("select name is: "+ this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmitClick}>
				<label>
					Name:
					<select value={this.state.value} onChange={this.handleChangeClick}>
						<option value="abc">abc</option>
						<option value="UTC">UTC</option>
						<option value="efg">efg</option>
					</select>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		);
	}

}

export default SelectName