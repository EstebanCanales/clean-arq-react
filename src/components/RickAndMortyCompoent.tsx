import { useRickAndMorty } from "../hooks/useRickAndMorty";
import React from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";
import RickAndMortyCard from "./RickAndMortyCard";

export const RickAndMortyComponent: React.FC = () => {
	const { data, error } = useRickAndMorty();

	if (error) return <Error ErrorMessage={error} />;
	if (!data) return <Loader LoaderMessage={"Fetching Data"} />;

	return (
		<div>
			<h1>Rick and Morty Data</h1>
			{data.results.map((item, index) => (
				<RickAndMortyCard
					key={index}
					species={item.species}
					characterName={item.name}
					status={item.status}
				/>
			))}
		</div>
	);
};
