import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import PokeChar from "./components/Character";
import styled from "styled-components";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
			.then((res) => {
				console.log(res.data.results);
				setData(res.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const StyledDiv = styled.div`
		.container {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
		}
	`;

	return (
		<StyledDiv className="App">
			<h1 className="Header">Characters</h1>
			<div className="container">
				{data.map((pokeData) => (
					<PokeChar key={pokeData.name} pokeData={pokeData} />
				))}
			</div>
		</StyledDiv>
	);
};

export default App;
