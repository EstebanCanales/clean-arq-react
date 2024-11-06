import { FaPerson } from "react-icons/fa6";
import { PiAlien } from "react-icons/pi";
import { TbFileUnknown } from "react-icons/tb";

export const isHumam = (species: String) => {
	return species === "Human" ? (
		<FaPerson />
	) : species === "Alien" ? (
		<PiAlien />
	) : (
		<TbFileUnknown />
	);
};
