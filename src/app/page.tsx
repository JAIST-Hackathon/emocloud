"use client";

import { useState } from "react";
import { GoogleMap } from "@/components/google-map";
import { EmotionInput } from "@/components/emotion-input";
import type { Location } from "@/types/emotion";

export default function Home() {
	const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

	return (
		<div className="flex flex-col h-screen m-0 p-0 overflow-hidden font-sans">
			<GoogleMap onLocationChange={setCurrentLocation} />
			<EmotionInput currentLocation={currentLocation} />
		</div>
	);
}
