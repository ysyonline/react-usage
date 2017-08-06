/*
var greet = require("./components/Greeter/Greeter.js");

document.getElementById("root").appendChild(greet());*/

import React from 'react';
import {render} from 'react-dom';

import Greeter from './components/Greeter/Greeter.js';
import './css/main.css'

render(
	<Greeter />,
	document.getElementById("root")
);