/*
var greet = require("./components/Greeter/Greeter.js");

document.getElementById("root").appendChild(greet());*/

import React from 'react';
import {render} from 'react-dom';

import listdatas from 'list';
import './css/main.css';

import Greeter from './components/Greeter/Greeter.js';
import LoginControl from './components/LoginControl/LoginControl.js';
import FormControl from './components/FormTest/FormControl.js';
import ListControl from './components/ListControl/ListControl.js';

render(
	<div>
		<Greeter />
		<LoginControl/>
		<FormControl />
		<ListControl datas={} />
	</div>
	,
	document.getElementById("root")
);