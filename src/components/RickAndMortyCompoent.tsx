import { useRickAndMorty } from "../hooks/useRickAndMorty";
import React from "react";
import { isHumam } from "../hooks/isHuman";
import { isAlive } from "../hooks/isLive";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const RickAndMortyComponent: React.FC = () => {
	const { data, error } = useRickAndMorty();

	if (error) return <Error ErrorMessage={error} />;
	if (!data) return <Loader LoaderMessage={"Fetching Data"} />;

	return (
		<div>
			<h1>Rick and Morty Data</h1>
			{data.results.map((item, index) => (
				<ul key={index} style={{ listStyleType: "none", padding: 0 }}>
					<li style={{ display: "flex", alignItems: "center" }}>
						<div
							style={{
								width: "10px",
								height: "10px",
								borderRadius: "50%",
								backgroundColor: isAlive(item.status),
								marginRight: "8px",
							}}
						></div>
						<span>{item.name}</span>
					</li>
					<li>{item.status}</li>
					<li>
						{isHumam(item.species)}
						{item.species}
					</li>
				</ul>
			))}
		</div>
	);
};
