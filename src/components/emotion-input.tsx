"use client";

import { useState, useRef } from "react";
import type { EmotionType, EmotionCounts, Location } from "@/types/emotion";
import { generateColorCode } from "@/utils/color";
import { postEmotionData } from "@/utils/api";
import { MessageBox } from "./message-box";

interface EmotionInputProps {
	currentLocation: Location | null;
}

export function EmotionInput({ currentLocation }: EmotionInputProps) {
	const [emotionTapCounts, setEmotionTapCounts] = useState<EmotionCounts>({
		happy: 0,
		angry: 0,
		sad: 0,
		joy: 0,
	});

	const [emotionLongPressDurations, setEmotionLongPressDurations] =
		useState<EmotionCounts>({
			happy: 0,
			angry: 0,
			sad: 0,
			joy: 0,
		});

	const [lastInteractedEmotion, setLastInteractedEmotion] =
		useState<EmotionType | null>(null);
	const [message, setMessage] = useState<string>("");
	const pressTimerRef = useRef<NodeJS.Timeout | null>(null);
	const pressStartTimeRef = useRef<number>(0);
	const isLongPressRef = useRef<boolean>(false);

	const emotions = [
		{ type: "happy" as EmotionType, emoji: "😊" },
		{ type: "angry" as EmotionType, emoji: "😠" },
		{ type: "sad" as EmotionType, emoji: "😢" },
		{ type: "joy" as EmotionType, emoji: "😄" },
	];

	const handlePressStart = (
		emotion: EmotionType,
		buttonElement: HTMLButtonElement,
	) => {
		setLastInteractedEmotion(emotion);
		pressStartTimeRef.current = new Date().getTime();
		isLongPressRef.current = false;

		if (pressTimerRef.current) {
			clearTimeout(pressTimerRef.current);
		}

		pressTimerRef.current = setTimeout(() => {
			isLongPressRef.current = true;
			const duration = new Date().getTime() - pressStartTimeRef.current;
			setEmotionLongPressDurations((prev) => ({
				...prev,
				[emotion]: duration,
			}));
			console.log(`${emotion} 長押し時間: ${duration}ms`);

			const currentColor = generateColorCode(
				emotion,
				emotionTapCounts[emotion],
				duration,
			);
			buttonElement.style.backgroundColor = currentColor;
		}, 500);

		const currentColorOnPress = generateColorCode(
			emotion,
			emotionTapCounts[emotion],
			0,
		);
		buttonElement.style.backgroundColor = currentColorOnPress;
	};

	const handlePressEnd = (
		emotion: EmotionType,
		buttonElement: HTMLButtonElement,
	) => {
		if (pressTimerRef.current) {
			clearTimeout(pressTimerRef.current);
			pressTimerRef.current = null;
		}

		if (!isLongPressRef.current) {
			setEmotionTapCounts((prev) => ({
				...prev,
				[emotion]: prev[emotion] + 1,
			}));
			console.log(`${emotion} タップ回数: ${emotionTapCounts[emotion] + 1}`);
		}

		isLongPressRef.current = false;
		buttonElement.style.backgroundColor = "#e0e0e0";
	};

	const handleSubmit = async () => {
		if (!lastInteractedEmotion) {
			setMessage("まず感情アイコンをタップまたは長押ししてください。");
			return;
		}

		if (!currentLocation) {
			setMessage(
				"現在地が取得できませんでした。位置情報の許可を確認してください。",
			);
			return;
		}

		const colorCode = generateColorCode(
			lastInteractedEmotion,
			emotionTapCounts[lastInteractedEmotion],
			emotionLongPressDurations[lastInteractedEmotion],
		);

		const timestamp = new Date().toISOString();
		const roundedLatitude = Number.parseFloat(currentLocation.lat.toFixed(6));
		const roundedLongitude = Number.parseFloat(currentLocation.lng.toFixed(6));

		const result = await postEmotionData(
			colorCode,
			roundedLatitude,
			roundedLongitude,
			timestamp,
		);

		if (result.success) {
			setMessage(result.message);
			// リセット
			setEmotionTapCounts({ happy: 0, angry: 0, sad: 0, joy: 0 });
			setEmotionLongPressDurations({ happy: 0, angry: 0, sad: 0, joy: 0 });
			setLastInteractedEmotion(null);
		} else {
			setMessage(result.message);
		}
	};

	return (
		<>
			<div className="fixed bottom-0 left-0 w-full bg-white bg-opacity-95 p-4 shadow-lg z-10 flex flex-col items-center gap-3">
				<div className="flex justify-center gap-4 w-full max-w-lg">
					{emotions.map(({ type, emoji }) => (
						<button
							key={type}
							className="flex flex-col items-center justify-center w-15 h-15 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 flex-shrink-0 select-none hover:bg-gray-400"
							onMouseDown={(e) => handlePressStart(type, e.currentTarget)}
							onMouseUp={(e) => handlePressEnd(type, e.currentTarget)}
							onMouseLeave={(e) => {
								if (pressTimerRef.current) {
									clearTimeout(pressTimerRef.current);
									pressTimerRef.current = null;
								}
								e.currentTarget.style.backgroundColor = "#e0e0e0";
								isLongPressRef.current = false;
							}}
							onTouchStart={(e) => {
								e.preventDefault();
								handlePressStart(type, e.currentTarget);
							}}
							onTouchEnd={(e) => {
								e.preventDefault();
								handlePressEnd(type, e.currentTarget);
							}}
						>
							<span className="text-4xl leading-none select-none transition-transform duration-100">
								{emoji}
							</span>
						</button>
					))}
				</div>

				<button
					onClick={handleSubmit}
					className="px-8 py-3 bg-green-500 text-white border-none rounded-full cursor-pointer text-lg font-semibold shadow-lg transition-all duration-200 w-full max-w-md hover:bg-green-600 hover:-translate-y-0.5 active:translate-y-0"
				>
					感情を確定して送信
				</button>
			</div>

			{message && (
				<MessageBox message={message} onClose={() => setMessage("")} />
			)}
		</>
	);
}
