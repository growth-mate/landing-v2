import * as React from "react";

export type Orientation = "landscape" | "portrait";

export function useOrientation(): Orientation {
	const [orientation, setOrientation] = React.useState<Orientation>("landscape");

	React.useEffect(() => {
		const update = () => {
			setOrientation(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
		};

		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	return orientation;
}
