function Indicator({ imageUrl, onClick }) {
	return (
		<img
			src={imageUrl}
			alt="Left Arrow"
			onClick={(e) => onClick(e)}
			className="bg-white cursor-pointer shadow-sm p-4 rounded-xl h-[4rem] w-[4rem]"
		/>
	)
}

export default Indicator
