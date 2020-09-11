// Write your Character component here
import React, { useState, useEffect } from "react";
import "../components/Character.css";
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

	return (
		<div className="pokeCard">
			<h1>{capitalize(name)}</h1>
			<DexEntry
				capitalize={capitalize}
				abilityData={dex.abilities}
				baseExp={dex.base_experience}
				height={dex.height}
				types={dex.types}
				weight={dex.weight}
			/>
		</div>
	);
}

export default PokeChar;
