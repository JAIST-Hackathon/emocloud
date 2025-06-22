import type { EmotionData } from "@/types/emotion";

/**
 * 感情データをAWS API Gatewayに送信する関数
 */
export async function postEmotionData(
	color: string,
	latitude: number,
	longitude: number,
	timestamp: string,
): Promise<{ success: boolean; data?: any; message: string }> {
	// 環境変数として設定
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	//URLが設定されているかをチェック
	if (!apiUrl) {
		const errorMessage = "APIのURLが設定されていません。.env.localファイルを確認してください。";
		console.error(errorMessage); // 開発者向けにコンソールにエラー出力
		// URLがなければ、エラーメッセージを返して処理を中断
		return {
			success: false,
			message: errorMessage,
		};
	}
	// APIに送信するデータの組み立て
	const payload = {
		color,
		latitude,
		longitude,
		timestamp,
	};

	try {
		console.log("--- 感情データ送信中 ---");
		console.log("送信先API:", apiUrl);
		console.log("送信データ:", payload);
		console.log("---------------------------");

		// リクエストを送信
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		// サーバーからの応答がチェック
		if (!response.ok) {
			// エラーの場合は、その内容を読み取って例外を発生
			const errorBody = await response.text();
			throw new Error(
				`APIエラー: ステータス ${response.status}. 応答: ${errorBody}`
			);
		}

		// 成功レスポンスのボディをJSONとしてパース
		const responseData = await response.json();
		console.log("APIからの成功応答:", responseData);

		return {
			success: true,
			message: "感情データが正常に送信されました！",
			//data: responseData, // サーバーからの応答データも一緒に返す
		};

	} catch (error) {
		console.error("データ送信エラー:", error);
		// エラーが起きた場合は、失敗を示すオブジェクトを返します
		const errorMessage = error instanceof Error ? error.message : String(error);
		return {
			success: false,
			message: `データ送信中にエラーが発生しました: ${errorMessage}`,
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

	const apiUrl = process.env.NEXT_PUBLIC_GET_API_URL;

	try {
		const response = await fetch(`${apiUrl}?timestamp=${encodedTimestamp}`);
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
