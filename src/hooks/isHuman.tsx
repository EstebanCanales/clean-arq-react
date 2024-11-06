import { FaPerson } from "react-icons/fa6";
import { TbFileUnknown } from "react-icons/tb";
import { PiAlien } from "react-icons/pi";

export const isHumam = (species: string) => {
	return species === "Human" ? (
		<FaPerson />
	) : species === "Alien" ? (
		<PiAlien />
	) : (
		<TbFileUnknown />
	);
};
