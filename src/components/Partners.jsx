import partner1 from '../assets/partners/bigui.png'
import partner2 from '../assets/partners/Booking.com.png'
import partner3 from '../assets/partners/Jakmaen.png'
import partner4 from '../assets/partners/Katana.png'
import partner5 from '../assets/partners/travava.png'

function Partners() {
	return (
		<section className="px-20 py-20 space-y-10">
			<h2 className="font-semibold text-center md:max-xl:text-4xl text-3xl sm:text-4xl xl:text-6xl">
				Our Partners
			</h2>
			<p className="max-w-[630px] text-[18px] mx-auto text-center text-[#858585]">
				There are many variation of passage of lorem ipsum available but
				the majority have suffered alteration
			</p>

			<div className="flex flex-wrap justify-around gap-y-6 items-center gap-3 py-8">
				<div className="w-[150px] h-[44px] px-4">
					<img
						loading="lazy"
						decoding="async"
						className="w-full h-full object-fit"
						src={partner4}
						alt="Katana "
					/>
				</div>

				<div className="w-[149px] h-[27px] px-4">
					<img
						loading="lazy"
						decoding="async"
						className="w-full h-full object-fit"
						src={partner5}
						alt="travava "
					/>
				</div>

				<div className="w-[94px] h-[51px] px-4">
					<img
						loading="lazy"
						decoding="async"
						className="w-full h-full object-fit"
						src={partner1}
						alt="Bigui"
					/>
				</div>
				<div className="w-[228px] h-[41px] px-4">
					<img
						loading="lazy"
						decoding="async"
						className="w-full h-full object-fit"
						src={partner2}
						alt="Booking.com "
					/>
				</div>
				<div className="w-[146px] h-[31px] px-4">
					<img
						loading="lazy"
						decoding="async"
						className="w-full h-full object-fit"
						src={partner3}
						alt="Jakmaen "
					/>
				</div>
			</div>
		</section>
	)
}

export default Partners
