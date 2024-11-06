import { useState, useEffect } from "react";
import { rickAndMortyUrl } from "../constants/apiUrl";
import { FetchData } from "../api/rickAndMortyApi";
import { ApiResponse } from "../types/ApiResponseRickAndMorty";

export const useRickAndMorty = () => {
	const [data, setData] = useState<ApiResponse | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		FetchData(rickAndMortyUrl)
			.then(setData)
			.catch((err) => setError(err));
	}, []);

	return { data, error };
};

