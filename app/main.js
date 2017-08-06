/*
var greet = require("./components/Greeter/Greeter.js");

document.getElementById("root").appendChild(greet());*/

import React from 'react';
import {render} from 'react-dom';

import Greeter from './components/Greeter/Greeter.js';
import './css/main.css'

import LoginControl from './components/LoginControl/LoginControl.js';
import FormControl from './components/FormTest/FormControl.js';


render(
	<div>
		<Greeter />
		<LoginControl/>
		<FormControl />
	</div>
	,
	document.getElementById("root")
);