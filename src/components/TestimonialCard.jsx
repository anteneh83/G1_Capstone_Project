import StarRating from './StarRating'

function TestimonialCard({ testimonial }) {
	return (
		<div className="group bg-white h-auto shadow-xl my-8 rounded-2xl p-6 transition-all duration-500 w-[93%] hover:border-indigo-600 slide-active:border-indigo-600">
			<div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
				<StarRating rating={testimonial.stars} />
			</div>
			<p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
				{testimonial.text}
			</p>
			<div className="flex items-center gap-5">
				<img
					className="rounded-full object-cover"
					src={testimonial.image}
					alt={testimonial.name}
				/>
				<div className="grid gap-1">
					<h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
						{testimonial.name}
					</h5>
					<span className="text-sm leading-6 text-gray-500">
						{testimonial.company}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
