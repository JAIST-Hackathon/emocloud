export interface EmotionData {
	color: string;
	lat: number;
	lng: number;
	timestamp: string;
}

export interface Location {
	lat: number;
	lng: number;
}

export type EmotionType = "happy" | "angry" | "sad" | "joy";

export interface EmotionCounts {
	happy: number;
	angry: number;
	sad: number;
	joy: number;
}
