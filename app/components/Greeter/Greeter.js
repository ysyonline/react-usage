/*var config = require("../../json/greeter.json");

module.exports = function(){
	var div = document.createElement("div");
	div.textContent = config.greeterText;
	return div;
};*/

import React, {Component} from 'react';
import config from '../../json/greeter.json';
import styles from '../../css/Greeter.css';

class Greeter extends Component{
	render(){
		return(
			<div className={styles.root}>{config.greeterText}</div>
		);
	}
}

export default  Greeter