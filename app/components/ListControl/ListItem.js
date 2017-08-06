import React from 'react'

class ListItem extends Reat.Component{
	constructor(props){
		super(props);
	}

	render() {
		let item = this.props.item;
		return(
			<li>{item.name}</li>
		);
	}

}

export default ListItem;
