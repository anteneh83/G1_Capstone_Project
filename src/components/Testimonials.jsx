import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css'
import TestimonialCard from './TestimonialCard'
import Indicator from './Indicator'

const testimonials = [
	{
		name: 'Jane D',
		company: 'CEO',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696229969.png',
		text: 'Pagedone is simply the best tool of investment in the market right now.',
	},
	{
		name: 'Harsh P.',
		company: 'Product Designer',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696229994.png',
		text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
	},
	{
		name: 'Alex K.',
		company: 'Design Lead',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696230027.png',
		text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
	},
	// Duplicates for looping effect (could be removed if not needed)
	{
		name: 'Jane D',
		company: 'CEO',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696229969.png',
		text: 'Pagedone is simply the best tool of investment in the market right now.',
	},
	{
		name: 'Harsh P.',
		company: 'Product Designer',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696229994.png',
		text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
	},
	{
		name: 'Alex K.',
		company: 'Design Lead',
		stars: 5,
		image: 'https://pagedone.io/asset/uploads/1696230027.png',
		text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
	},
]

const NavigationButton = ({ direction }) => {
	const isPrev = direction === 'prev'
	const imageUrl = isPrev
		? '/icons/left_indicator.svg'
		: '/icons/right_indicator.svg'

	return (
		<button
			className={`swiper-button-${direction} bg-white group flex justify-center items-center  w-12 h-12 transition-all duration-500 rounded-full`}
		>
			<Indicator imageUrl={imageUrl} />
		</button>
	)
}

export default function Testimonials() {
	useEffect(() => {
		const swiper = new Swiper('.mySwiper', {
			slidesPerView: 3,
			spaceBetween: 28,
			centeredSlides: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
					centeredSlides: false,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 28,
					centeredSlides: true,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
			},
		})

		return () => {
			swiper.destroy()
		}
	}, [])

	return (
		<section className="py-24">
			<div className="mx-auto max-w-[1300px] px-4 sm:px-6">
				<div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
					<h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
						Testimonials
					</h2>
					<div className="flex items-center gap-8">
						<NavigationButton direction="prev" />
						<NavigationButton direction="next" />
					</div>
				</div>
				<div className="swiper mySwiper">
					<div className="swiper-wrapper px-4">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="swiper-slide ">
								<TestimonialCard testimonial={testimonial} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
