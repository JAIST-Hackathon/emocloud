/**
 * HSL (色相、彩度、明度) を HEX (16進数) 形式の色コードに変換する関数
 */
export function hslToHex(h: number, s: number, l: number): string {
	h /= 360;
	s /= 100;
	l /= 100;
	let r, g, b;

	if (s === 0) {
		r = g = b = l; // 無彩色 (灰色)
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	const toHex = (x: number) => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	};

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * 感情、タップ回数、長押し時間に基づいてHEX形式の色コードを生成する関数
 */
export function generateColorCode(
	emotion: string,
	tapCount: number,
	longPressDuration: number,
): string {
	let hue: number;

	// 感情の種類に応じて色相 (Hue) を設定
	switch (emotion) {
		case "happy":
			hue = 60;
			break; // 笑顔: 黄色系
		case "angry":
			hue = 0;
			break; // 怒り: 赤色系
		case "sad":
			hue = 240;
			break; // 悲しみ: 青色系
		case "joy":
			hue = 120;
			break; // 喜び: 緑色系
		default:
			hue = 0; // 未知の感情の場合は赤
	}

	// タップ回数と長押し時間に基づいて彩度と明度を調整
	const saturation = Math.min(100, 50 + tapCount * 5); // 彩度: 最小50, 最大100
	const lightness = Math.min(90, 50 + longPressDuration / 100); // 明度: 最小50, 最大90

	return hslToHex(hue, saturation, lightness);
}
