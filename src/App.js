import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [data, setData] = useState();

	useEffect(() => {
		Axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
		</div>
	);
};

export default App;
