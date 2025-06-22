"use client";

interface MessageBoxProps {
	message: string;
	onClose: () => void;
}

export function MessageBox({ message, onClose }: MessageBoxProps) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
			<div className="bg-white p-5 rounded-lg shadow-lg text-center max-w-[80%]">
				<p className="mb-4">{message}</p>
				<button
					onClick={onClose}
					className="px-5 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600"
				>
					OK
				</button>
			</div>
		</div>
	);
}
