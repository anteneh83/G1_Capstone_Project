import Button from './Button'
import StarRating from './StarRating'

function PackageCard({ package: offeredPackage }) {
	return (
		<div className="space-y-4  max-w-[27.8rem] min-w-[13rem] mb-6 bg-white shadow-lg rounded-[10px] pb-2">
			<img
				src={offeredPackage.imgUrl}
				className="w-full h-[319px] object-cover rounded-t-[10px] bg-stone-500"
				alt=""
			/>
			<div className="px-6 space-y-4 pb-5">
				<div className="flex justify-between">
					<p className="font-semibold text-2xl">
						{offeredPackage.cityName}
					</p>
					<p className="text-2xl">{offeredPackage.price}</p>
				</div>
				<p className="text-[15px] text-[#555555] font-medium">
					{offeredPackage.description}
				</p>
				<div className="flex justify-between gap-2 items-center">
					<div className="xl:text-[1.1rem] xlm:text-[1.3rem]">
						{<StarRating />}
					</div>
					<Button btnType="medium">Booking Now</Button>
				</div>
			</div>
		</div>
	)
}

export default PackageCard
