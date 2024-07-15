const ThreeDots = () => {
	return (
		<div>
			<button className="text-white-1 hover:text-gray-300 focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 12h.01M12 12h.01M18 12h.01"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ThreeDots;
