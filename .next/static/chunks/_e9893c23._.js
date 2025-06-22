(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchEmotionMapData": (()=>fetchEmotionMapData),
    "postEmotionData": (()=>postEmotionData)
});
async function postEmotionData(color, latitude, longitude, timestamp) {
    try {
        console.log("--- 感情データ送信中 ---");
        console.log("色:", color);
        console.log("緯度:", latitude);
        console.log("経度:", longitude);
        console.log("タイムスタンプ:", timestamp);
        console.log("---------------------------");
        // 実際のAPI呼び出しの代わりにダミー処理
        await new Promise((resolve)=>setTimeout(resolve, 500));
        return {
            success: true,
            message: "感情データが送信されました！"
        };
    } catch (error) {
        console.error("データ送信エラー:", error);
        return {
            success: false,
            message: "データ送信中にエラーが発生しました。"
        };
    }
}
async function fetchEmotionMapData() {
    console.log("感情マップデータをフェッチ中...");
    // ダミーデータを返す
    const dummyData = [
        {
            color: "#FF0000",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        },
        {
            color: "#00FF00",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        },
        {
            color: "#0000FF",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        },
        {
            color: "#FFFF00",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        },
        {
            color: "#FF00FF",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        },
        {
            color: "#00FFFF",
            latitude: 35.681236 + (Math.random() - 0.5) * 0.01,
            longitude: 139.767125 + (Math.random() - 0.5) * 0.01,
            timestamp: new Date().toISOString()
        }
    ];
    return new Promise((resolve)=>setTimeout(()=>resolve(dummyData), 1000));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/google-map.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GoogleMap": (()=>GoogleMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GoogleMap({ onLocationChange }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [currentLocation, setCurrentLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mapLocked, setMapLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const zoomLevels = {
        "20": 20,
        "50": 19,
        "100": 18
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            const initializeMap = {
                "GoogleMap.useEffect.initializeMap": ()=>{
                    if (!mapRef.current || !window.google) return;
                    const styledMapType = new window.google.maps.StyledMapType([
                        {
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#f5f5f5"
                                }
                            ]
                        },
                        {
                            elementType: "labels",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "administrative",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "poi",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#cccccc"
                                }
                            ]
                        },
                        {
                            featureType: "transit",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#e0e0e0"
                                }
                            ]
                        }
                    ], {
                        name: "Gray No Labels"
                    });
                    mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
                        center: {
                            lat: 35.681236,
                            lng: 139.767125
                        },
                        zoom: 18,
                        disableDefaultUI: true,
                        draggable: false,
                        gestureHandling: "none",
                        keyboardShortcuts: false
                    });
                    mapInstanceRef.current.mapTypes.set("styled_map", styledMapType);
                    mapInstanceRef.current.setMapTypeId("styled_map");
                    // 現在地取得
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition({
                            "GoogleMap.useEffect.initializeMap": (position)=>{
                                const location = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                };
                                setCurrentLocation(location);
                                onLocationChange(location);
                                mapInstanceRef.current.setCenter(location);
                                mapInstanceRef.current.setZoom(zoomLevels[range]);
                                new window.google.maps.Marker({
                                    position: location,
                                    map: mapInstanceRef.current,
                                    title: "あなたの現在地",
                                    icon: {
                                        path: window.google.maps.SymbolPath.CIRCLE,
                                        scale: 7,
                                        fillColor: "#007AFF",
                                        fillOpacity: 1,
                                        strokeWeight: 2,
                                        strokeColor: "#ffffff"
                                    }
                                });
                            }
                        }["GoogleMap.useEffect.initializeMap"], {
                            "GoogleMap.useEffect.initializeMap": ()=>alert("現在地を取得できませんでした。")
                        }["GoogleMap.useEffect.initializeMap"]);
                    }
                }
            }["GoogleMap.useEffect.initializeMap"];
            if (window.google) {
                initializeMap();
            } else {
                window.initMap = initializeMap;
                const script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=${"TURBOPACK compile-time value", "AIzaSyC0gZqkL68rgvnjUU7fNmVfRyydR-lDBaA"}&callback=initMap`;
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
            // 定期的にデータを更新
            const interval = setInterval(fetchAndDisplayEmotionMapData, 10000);
            return ({
                "GoogleMap.useEffect": ()=>clearInterval(interval)
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        range,
        onLocationChange
    ]);
    const toggleMapControl = ()=>{
        if (!mapInstanceRef.current) return;
        const newMapLocked = !mapLocked;
        setMapLocked(newMapLocked);
        mapInstanceRef.current.setOptions({
            draggable: !newMapLocked,
            gestureHandling: newMapLocked ? "none" : "greedy",
            zoomControl: !newMapLocked
        });
        if (newMapLocked && currentLocation) {
            mapInstanceRef.current.setCenter(currentLocation);
        }
    };
    const handleRangeChange = (newRange)=>{
        setRange(newRange);
        if (mapInstanceRef.current && currentLocation) {
            mapInstanceRef.current.setZoom(zoomLevels[newRange]);
        }
    };
    const clearMarkers = ()=>{
        markersRef.current.forEach((marker)=>marker.setMap(null));
        markersRef.current = [];
    };
    const fetchAndDisplayEmotionMapData = async ()=>{
        const emotionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchEmotionMapData"])();
        if (emotionData && mapInstanceRef.current) {
            clearMarkers();
            emotionData.forEach((data)=>{
                const marker = new window.google.maps.Marker({
                    position: {
                        lat: data.latitude,
                        lng: data.longitude
                    },
                    map: mapInstanceRef.current,
                    icon: {
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: data.color,
                        fillOpacity: 0.7,
                        strokeWeight: 1,
                        strokeColor: "#ffffff"
                    },
                    title: `感情: ${data.color}, 時刻: ${new Date(data.timestamp).toLocaleString()}`
                });
                markersRef.current.push(marker);
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-grow w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2.5 left-2.5 bg-white bg-opacity-90 p-2 rounded-lg z-[2] shadow-md",
                children: [
                    "表示範囲:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: range,
                        onChange: (e)=>handleRangeChange(e.target.value),
                        className: "rounded-md p-1 border ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "20",
                                children: "20m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-map.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "50",
                                children: "50m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-map.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "100",
                                children: "100m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-map.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/google-map.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/google-map.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMapControl,
                className: "absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded-lg z-[2] bg-blue-500 text-white border-none cursor-pointer shadow-md hover:bg-blue-600",
                children: mapLocked ? "操作モードを有効にする" : "操作モードを終了する"
            }, void 0, false, {
                fileName: "[project]/src/components/google-map.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "h-full w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/google-map.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/google-map.tsx",
        lineNumber: 173,
        columnNumber: 9
    }, this);
}
_s(GoogleMap, "CYC/dxwwPOJTbFKCQlwCpv7ZlHU=");
_c = GoogleMap;
var _c;
__turbopack_context__.k.register(_c, "GoogleMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/color.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * HSL (色相、彩度、明度) を HEX (16進数) 形式の色コードに変換する関数
 */ __turbopack_context__.s({
    "generateColorCode": (()=>generateColorCode),
    "hslToHex": (()=>hslToHex)
});
function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l // 無彩色 (灰色)
        ;
    } else {
        const hue2rgb = (p, q, t)=>{
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
    const toHex = (x)=>{
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function generateColorCode(emotion, tapCount, longPressDuration) {
    let hue;
    // 感情の種類に応じて色相 (Hue) を設定
    switch(emotion){
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
            hue = 0 // 未知の感情の場合は赤
            ;
    }
    // タップ回数と長押し時間に基づいて彩度と明度を調整
    const saturation = Math.min(100, 50 + tapCount * 5) // 彩度: 最小50, 最大100
    ;
    const lightness = Math.min(90, 50 + longPressDuration / 100) // 明度: 最小50, 最大90
    ;
    return hslToHex(hue, saturation, lightness);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/message-box.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MessageBox": (()=>MessageBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MessageBox({ message, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-lg shadow-lg text-center max-w-[80%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/message-box.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "px-5 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600",
                    children: "OK"
                }, void 0, false, {
                    fileName: "[project]/src/components/message-box.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/message-box.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/message-box.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = MessageBox;
var _c;
__turbopack_context__.k.register(_c, "MessageBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/emotion-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmotionInput": (()=>EmotionInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$message$2d$box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/message-box.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function EmotionInput({ currentLocation }) {
    _s();
    const [emotionTapCounts, setEmotionTapCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        happy: 0,
        angry: 0,
        sad: 0,
        joy: 0
    });
    const [emotionLongPressDurations, setEmotionLongPressDurations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        happy: 0,
        angry: 0,
        sad: 0,
        joy: 0
    });
    const [lastInteractedEmotion, setLastInteractedEmotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const pressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pressStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const emotions = [
        {
            type: "happy",
            emoji: "😊"
        },
        {
            type: "angry",
            emoji: "😠"
        },
        {
            type: "sad",
            emoji: "😢"
        },
        {
            type: "joy",
            emoji: "😄"
        }
    ];
    const handlePressStart = (emotion, buttonElement)=>{
        setLastInteractedEmotion(emotion);
        pressStartTimeRef.current = new Date().getTime();
        isLongPressRef.current = false;
        if (pressTimerRef.current) {
            clearTimeout(pressTimerRef.current);
        }
        pressTimerRef.current = setTimeout(()=>{
            isLongPressRef.current = true;
            const duration = new Date().getTime() - pressStartTimeRef.current;
            setEmotionLongPressDurations((prev)=>({
                    ...prev,
                    [emotion]: duration
                }));
            console.log(`${emotion} 長押し時間: ${duration}ms`);
            const currentColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorCode"])(emotion, emotionTapCounts[emotion], duration);
            buttonElement.style.backgroundColor = currentColor;
        }, 500);
        const currentColorOnPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorCode"])(emotion, emotionTapCounts[emotion], 0);
        buttonElement.style.backgroundColor = currentColorOnPress;
    };
    const handlePressEnd = (emotion, buttonElement)=>{
        if (pressTimerRef.current) {
            clearTimeout(pressTimerRef.current);
            pressTimerRef.current = null;
        }
        if (!isLongPressRef.current) {
            setEmotionTapCounts((prev)=>({
                    ...prev,
                    [emotion]: prev[emotion] + 1
                }));
            console.log(`${emotion} タップ回数: ${emotionTapCounts[emotion] + 1}`);
        }
        isLongPressRef.current = false;
        buttonElement.style.backgroundColor = "#e0e0e0";
    };
    const handleSubmit = async ()=>{
        if (!lastInteractedEmotion) {
            setMessage("まず感情アイコンをタップまたは長押ししてください。");
            return;
        }
        if (!currentLocation) {
            setMessage("現在地が取得できませんでした。位置情報の許可を確認してください。");
            return;
        }
        const colorCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorCode"])(lastInteractedEmotion, emotionTapCounts[lastInteractedEmotion], emotionLongPressDurations[lastInteractedEmotion]);
        const timestamp = new Date().toISOString();
        const roundedLatitude = Number.parseFloat(currentLocation.lat.toFixed(6));
        const roundedLongitude = Number.parseFloat(currentLocation.lng.toFixed(6));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postEmotionData"])(colorCode, roundedLatitude, roundedLongitude, timestamp);
        if (result.success) {
            setMessage(result.message);
            // リセット
            setEmotionTapCounts({
                happy: 0,
                angry: 0,
                sad: 0,
                joy: 0
            });
            setEmotionLongPressDurations({
                happy: 0,
                angry: 0,
                sad: 0,
                joy: 0
            });
            setLastInteractedEmotion(null);
        } else {
            setMessage(result.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full bg-white bg-opacity-95 p-4 shadow-lg z-10 flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4 w-full max-w-lg",
                        children: emotions.map(({ type, emoji })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex flex-col items-center justify-center w-15 h-15 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 flex-shrink-0 select-none hover:bg-gray-400",
                                onMouseDown: (e)=>handlePressStart(type, e.currentTarget),
                                onMouseUp: (e)=>handlePressEnd(type, e.currentTarget),
                                onMouseLeave: (e)=>{
                                    if (pressTimerRef.current) {
                                        clearTimeout(pressTimerRef.current);
                                        pressTimerRef.current = null;
                                    }
                                    e.currentTarget.style.backgroundColor = "#e0e0e0";
                                    isLongPressRef.current = false;
                                },
                                onTouchStart: (e)=>{
                                    e.preventDefault();
                                    handlePressStart(type, e.currentTarget);
                                },
                                onTouchEnd: (e)=>{
                                    e.preventDefault();
                                    handlePressEnd(type, e.currentTarget);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl leading-none select-none transition-transform duration-100",
                                    children: emoji
                                }, void 0, false, {
                                    fileName: "[project]/src/components/emotion-input.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, type, false, {
                                fileName: "[project]/src/components/emotion-input.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/emotion-input.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        className: "px-8 py-3 bg-green-500 text-white border-none rounded-full cursor-pointer text-lg font-semibold shadow-lg transition-all duration-200 w-full max-w-md hover:bg-green-600 hover:-translate-y-0.5 active:translate-y-0",
                        children: "感情を確定して送信"
                    }, void 0, false, {
                        fileName: "[project]/src/components/emotion-input.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/emotion-input.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$message$2d$box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageBox"], {
                message: message,
                onClose: ()=>setMessage("")
            }, void 0, false, {
                fileName: "[project]/src/components/emotion-input.tsx",
                lineNumber: 159,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true);
}
_s(EmotionInput, "29e6ixSOmfe5A69qqmfxWkBAubU=");
_c = EmotionInput;
var _c;
__turbopack_context__.k.register(_c, "EmotionInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/google-map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$emotion$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/emotion-input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [currentLocation, setCurrentLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen m-0 p-0 overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
                onLocationChange: setCurrentLocation
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$emotion$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmotionInput"], {
                currentLocation: currentLocation
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Home, "F/wyx78IR8eDSB8dVIgY/sOlHvI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_e9893c23._.js.map