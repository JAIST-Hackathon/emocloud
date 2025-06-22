import type { EmotionData } from "@/types/emotion";

/**
 * 感情データを送信する関数
 */
export async function postEmotionData(
	color: string,
	latitude: number,
	longitude: number,
	timestamp: string,
): Promise<{ success: boolean; message: string }> {
	try {
		console.log("--- 感情データ送信中 ---");
		console.log("色:", color);
		console.log("緯度:", latitude);
		console.log("経度:", longitude);
		console.log("タイムスタンプ:", timestamp);
		console.log("---------------------------");

		// 実際のAPI呼び出しの代わりにダミー処理
		await new Promise((resolve) => setTimeout(resolve, 500));

		return {
			success: true,
			message: "感情データが送信されました！",
		};
	} catch (error) {
		console.error("データ送信エラー:", error);
		return {
			success: false,
			message: "データ送信中にエラーが発生しました。",
		};
	}
}

/**
 * 感情マップデータを取得する関数
 */
export async function fetchEmotionMapData(): Promise<EmotionData[]> {
	console.log("感情マップデータをフェッチ中...");

	// ダミーデータを返す
	const dummyData: EmotionData[] = [
		{
			color: "#FF0000",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
		{
			color: "#00FF00",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
		{
			color: "#0000FF",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
		{
			color: "#FFFF00",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
		{
			color: "#FF00FF",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
		{
			color: "#00FFFF",
			latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
			longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
			timestamp: new Date().toISOString(),
		},
	];

	return new Promise((resolve) => setTimeout(() => resolve(dummyData), 1000));
}
