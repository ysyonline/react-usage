import React from 'react';
import ListItem from './ListItem.js';

class ListControl extends React.Component{

	render(){
		let list = this.props.datas;

		const listItems = list.map(item => {
			return <ListItem item={item} />
		});

		return(
			<ul>{listItems}</ul>
		);
	}
}

export default ListControl
