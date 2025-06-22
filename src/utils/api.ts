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

	const now = new Date();
	// 日本標準時（UTC+9）に変換
	// const jstOffset = 9 * 60; // 9時間を分で表現
	// const jstTime = new Date(now.getTime() + (jstOffset * 60 * 1000));
	const jstTime = new Date(now.getTime());
	console.log("現在のJST時刻:", jstTime.toISOString());

	jstTime.setSeconds(0, 0); // 秒とミリ秒を0に設定
	jstTime.setMinutes(jstTime.getMinutes() - 1)

	// ISO形式の文字列を取得し、末尾のZを+09:00に置き換え
	const year = jstTime.getFullYear();
	const month = String(jstTime.getMonth() + 1).padStart(2, '0');
	const day = String(jstTime.getDate()).padStart(2, '0');
	const hours = String(jstTime.getHours()).padStart(2, '0');
	const minutes = String(jstTime.getMinutes()).padStart(2, '0');

	const jstTime_str = `${year}${month}${day}T${hours}${minutes}+0900`;
	const encodedTimestamp = encodeURIComponent(jstTime_str);

	console.log("取得するタイムスタンプ:", encodedTimestamp);

	try {
		const response = await fetch(`https://xazunmdid7.execute-api.ap-southeast-2.amazonaws.com/prod/data?timestamp=${encodedTimestamp}`);
		if (!response.ok) {
			throw new Error(`HTTPエラー: ${response.status}`);
		}
		const res = await response.json();
		const data = res.points as EmotionData[];
		console.log("感情マップデータを取得しました:", data);
		return data;
	} catch (error) {
		throw new Error("感情マップデータの取得に失敗しました。", { cause: error });
	}


	// ダミーデータを返す
	// const dummyData: EmotionData[] = [
	// 	{
	// 		color: "#FF0000",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// 	{
	// 		color: "#00FF00",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// 	{
	// 		color: "#0000FF",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// 	{
	// 		color: "#FFFF00",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// 	{
	// 		color: "#FF00FF",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// 	{
	// 		color: "#00FFFF",
	// 		latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
	// 		longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
	// 		timestamp: new Date().toISOString(),
	// 	},
	// ];

	// return new Promise((resolve) => setTimeout(() => resolve(response), 1000));
}
