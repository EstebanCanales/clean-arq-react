import { isHumam } from "../hooks/isHuman";
import { isAlive } from "../hooks/isLive";
import { RickAndMortyCardProps } from "../types/RickAndMortyCardProps";

export default function RickAndMortyCard({
	characterName,
	status,
	species,
}: RickAndMortyCardProps) {
	return (
		<ul style={{ listStyleType: "none", padding: 0 }}>
			<li style={{ display: "flex", alignItems: "center" }}>
				<span>{characterName}</span>
			</li>
			<li
				style={{
					display: "flex",
				}}
			>
				<div
					style={{
						width: "10px",
						height: "10px",
						borderRadius: "50%",
						marginRight: "2px",
						marginTop: "6px",
						backgroundColor: isAlive(status),
					}}
				/>
				<span>{status}</span>
			</li>
			<li>
				{isHumam(species)}
				{species}
			</li>
		</ul>
	);
}
