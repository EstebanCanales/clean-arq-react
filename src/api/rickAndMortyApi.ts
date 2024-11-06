import axios from "axios";
import { ApiResponse } from "../types/ApiResponseRickAndMorty.ts";

export const FetchData = async (url: string): Promise<ApiResponse> => {
	try {
		const res = await axios.get(url);
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
