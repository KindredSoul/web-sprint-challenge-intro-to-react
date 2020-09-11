import React from "react";

function DexEntry(props) {
	const { abilityData, baseExp, height, types, weight, capitalize } = props;
	console.log(abilityData);
	if (!abilityData) {
		return (
			<div>
				<h1>Opening Pokedex!</h1>
			</div>
		);
	} else {
		return (
			<div>
				<h2 className="abilities">
					Abilities:{" "}
					{abilityData.map((ability) =>
						!abilityData.is_hidden ? (
							<li>{capitalize(ability.ability.name)}</li>
						) : null
					)}
				</h2>
				<h2 className="types">
					Typing:{" "}
					{types.map((type) => (
						<li>{capitalize(type.type.name)}</li>
					))}
				</h2>
				<h2>Base Exp: {baseExp}</h2>
				<h2>Height: {height}</h2>
				<h2>Weight: {weight}</h2>
			</div>
		);
	}
}

export default DexEntry;
