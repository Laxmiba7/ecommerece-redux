import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import App from "./App";
import { Checkout } from "./components/Checkout";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element = { <App />}/>
				<Route exact path="/checkout" element = { <Checkout />}/>
			</Routes>
		
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
