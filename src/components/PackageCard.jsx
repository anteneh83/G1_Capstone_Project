function PackageCard({ package: offeredPackage }) {
	return (
		<div className="space-y-4 max-w-[1/3] mb-6 bg-white shadow-lg rounded-[10px] pb-2">
			<img
				src={offeredPackage.imgUrl}
				className="w-full h-[200px] rounded-t-[10px] bg-stone-500"
				alt=""
			/>
			<div className="px-6 space-y-4 pb-5">
				<div className="flex justify-between">
					<p className="font-semibold text-2xl">
						{offeredPackage.cityName}
					</p>
					<p className="text-2xl">{offeredPackage.price}</p>
				</div>
				<p className="text-[14px] text-[#555555] font-medium">
					{offeredPackage.description}
				</p>
				<div className="flex justify-between">
					<div className="text-[1.4rem]">⭐⭐⭐⭐⭐</div>
					<div className="bg-black font-semibold text-[1.2rem] w-fit h-fit text-white rounded-[30px] py-2 px-4">
						Discover more
					</div>
				</div>
			</div>
		</div>
	)
}

export default PackageCard
