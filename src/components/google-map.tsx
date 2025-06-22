"use client";

import { useEffect, useRef, useState } from "react";
import type { Location } from "@/types/emotion";
import { fetchEmotionMapData } from "@/utils/api";

interface GoogleMapProps {
	onLocationChange: (location: Location | null) => void;
}

declare global {
	interface Window {
		google: any;
		initMap: () => void;
	}
}

export function GoogleMap({ onLocationChange }: GoogleMapProps) {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstanceRef = useRef<any>(null);
	const markersRef = useRef<any[]>([]);
	const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
	const [mapLocked, setMapLocked] = useState(true);
	const [range, setRange] = useState("100");

	const zoomLevels = {
		"20": 20,
		"50": 19,
		"100": 18,
	};

	useEffect(() => {
		const initializeMap = () => {
			if (!mapRef.current || !window.google) return;

			const styledMapType = new window.google.maps.StyledMapType(
				[
					{ elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
					{ elementType: "labels", stylers: [{ visibility: "off" }] },
					{ featureType: "administrative", stylers: [{ visibility: "off" }] },
					{ featureType: "poi", stylers: [{ visibility: "off" }] },
					{
						featureType: "road",
						elementType: "geometry",
						stylers: [{ color: "#cccccc" }],
					},
					{ featureType: "transit", stylers: [{ visibility: "off" }] },
					{
						featureType: "water",
						elementType: "geometry",
						stylers: [{ color: "#e0e0e0" }],
					},
				],
				{ name: "Gray No Labels" },
			);

			mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
				center: { lat: 35.681236, lng: 139.767125 },
				zoom: 18,
				disableDefaultUI: true,
				draggable: false,
				gestureHandling: "none",
				keyboardShortcuts: false,
			});

			mapInstanceRef.current.mapTypes.set("styled_map", styledMapType);
			mapInstanceRef.current.setMapTypeId("styled_map");

			// 現在地取得
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const location = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						};

						setCurrentLocation(location);
						onLocationChange(location);

						mapInstanceRef.current.setCenter(location);
						mapInstanceRef.current.setZoom(
							zoomLevels[range as keyof typeof zoomLevels],
						);

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
								strokeColor: "#ffffff",
							},
						});
					},
					() => alert("現在地を取得できませんでした。"),
				);
			}
		};

		if (window.google) {
			initializeMap();
		} else {
			window.initMap = initializeMap;
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}

		// 定期的にデータを更新
		const interval = setInterval(fetchAndDisplayEmotionMapData, 10000);
		return () => clearInterval(interval);
	}, [range, onLocationChange]);

	const toggleMapControl = () => {
		if (!mapInstanceRef.current) return;

		const newMapLocked = !mapLocked;
		setMapLocked(newMapLocked);

		mapInstanceRef.current.setOptions({
			draggable: !newMapLocked,
			gestureHandling: newMapLocked ? "none" : "greedy",
			zoomControl: !newMapLocked,
		});

		if (newMapLocked && currentLocation) {
			mapInstanceRef.current.setCenter(currentLocation);
		}
	};

	const handleRangeChange = (newRange: string) => {
		setRange(newRange);
		if (mapInstanceRef.current && currentLocation) {
			mapInstanceRef.current.setZoom(
				zoomLevels[newRange as keyof typeof zoomLevels],
			);
		}
	};

	const clearMarkers = () => {
		markersRef.current.forEach((marker) => marker.setMap(null));
		markersRef.current = [];
	};

	const fetchAndDisplayEmotionMapData = async () => {
		try {
			const emotionData = await fetchEmotionMapData();

			if (!emotionData) {
				console.error("感情マップデータの取得に失敗しました。");
				return;
			}

			console.log(typeof (emotionData));
			console.log("感情マップデータ:", emotionData);

			if (emotionData && mapInstanceRef.current) {
				clearMarkers();

				emotionData.forEach((data) => {
					const marker = new window.google.maps.Marker({
						position: { lat: data.lat, lng: data.lng },
						map: mapInstanceRef.current,
						icon: {
							path: window.google.maps.SymbolPath.CIRCLE,
							scale: 10,
							fillColor: data.color,
							fillOpacity: 0.7,
							strokeWeight: 1,
							strokeColor: "#ffffff",
						},
						title: `感情: ${data.color}, 時刻: ${new Date(data.timestamp).toLocaleString()}`,
					});
					markersRef.current.push(marker);
				});
			}

		} catch (e) {
			console.error("感情マップデータのフェッチ中にエラーが発生しました:", e);
		}
	};

	return (
		<div className="relative flex-grow w-full overflow-hidden">
			<div className="absolute top-2.5 left-2.5 bg-white bg-opacity-90 p-2 rounded-lg z-[2] shadow-md">
				表示範囲:
				<select
					value={range}
					onChange={(e) => handleRangeChange(e.target.value)}
					className="rounded-md p-1 border ml-2"
				>
					<option value="20">20m</option>
					<option value="50">50m</option>
					<option value="100">100m</option>
				</select>
			</div>

			<button
				onClick={toggleMapControl}
				className="absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded-lg z-[2] bg-blue-500 text-white border-none cursor-pointer shadow-md hover:bg-blue-600"
			>
				{mapLocked ? "操作モードを有効にする" : "操作モードを終了する"}
			</button>

			<div ref={mapRef} className="h-full w-full" />
		</div>
	);
}
