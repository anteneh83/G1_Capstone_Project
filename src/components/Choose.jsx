import { FaArrowRightLong } from 'react-icons/fa6'
import bestService from '../assets/best-service.svg'

const Choose = () => {
	return (
		<section className="bg-[url('../src/assets/choose.png')] bg-cover bg-center py-16">
			{/* Header Section */}
			<div className="text-center mb-12 px-4">
				<h2 className="text-5xl font-extrabold text-white mb-4">
					Why choose Us?
				</h2>
				<p className="text-white text-lg">
					Our services have been trusted by world travelers.
				</p>
			</div>

			{/* Cards Section */}
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Best Service Card */}
					<div className="card bg-white shadow-md rounded-lg w-full max-w-xs mx-auto">
						<div className="card-body items-center text-center p-6">
							<img
								src={bestService}
								alt="Best Service"
								className="w-14 mb-4"
							/>
							<h3 className="card-title text-xl font-bold mb-3">
								Best Service
							</h3>
							<p className="text-gray-500 mb-5 text-sm">
								Our service is reliable and convenient, our
								service is quality.
							</p>
							<p className=" flex items-center gap-2 font-bold text-md text-black cursor-pointer">
								Learn more <FaArrowRightLong className="ml-2" />
							</p>
						</div>
					</div>

					{/* Price Guarantee Card */}
					<div className="card bg-white shadow-xl rounded-lg w-full max-w-xs mx-auto">
						<div className="card-body items-center text-center p-6">
							<img
								src={bestService}
								alt="Price Guarantee"
								className="w-14 mb-4"
							/>
							<h3 className="card-title text-xl font-bold mb-3">
								Price Guarantee
							</h3>
							<p className="text-gray-500 mb-6">
								Our service is reliable and convenient, our
								service is quality.
							</p>
							<p className=" flex items-center gap-2 font-bold text-md text-black cursor-pointer ">
								Learn more <FaArrowRightLong className="ml-2" />
							</p>
						</div>
					</div>

					{/* Handpicked Hotels Card */}
					<div className="card bg-white shadow-xl rounded-lg w-full max-w-xs mx-auto">
						<div className="card-body items-center text-center p-6">
							<img
								src={bestService}
								alt="Handpicked Hotels"
								className="w-16 mb-4"
							/>
							<h3 className="card-title text-xl font-bold mb-3">
								Handpicked Hotels
							</h3>
							<p className="text-gray-500 mb-6">
								Our service is reliable and convenient, our
								service is quality.
							</p>
							<p className="flex items-center gap-2 font-bold text-md text-black cursor-pointer">
								Learn more <FaArrowRightLong className="ml-2" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Choose
