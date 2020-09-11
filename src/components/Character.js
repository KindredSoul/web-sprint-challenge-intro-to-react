// Write your Character component here
import React, { useState, useEffect } from "react";
import "../components/Character.css";
import styled from "styled-components";
import Axios from "axios";
import DexEntry from "./DexEntry";

function PokeChar(props) {
	const { name, url } = props.pokeData;
	const [dex, setDex] = useState({});

	useEffect(() => {
		Axios.get(url)
			.then((res) => {
				console.log(res.data);
				setDex(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [url]);

	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const StyledCard = styled.div`
		.pokeCard {
			width: 28%;
			min-width: 28%;
			margin: 2%;
			background: rgba(0, 0, 0, 0.5);
			color: white;
		}
	`;

	return (
		<StyledCard className="pokeCard">
			<h1>{capitalize(name)}</h1>
			<DexEntry
				capitalize={capitalize}
				abilityData={dex.abilities}
				baseExp={dex.base_experience}
				height={dex.height}
				types={dex.types}
				weight={dex.weight}
			/>
		</StyledCard>
	);
}

export default PokeChar;
