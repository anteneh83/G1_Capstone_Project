import { CiUser } from 'react-icons/ci'
import { CiCalendarDate } from 'react-icons/ci'
import { MdOutlineAutoStories } from 'react-icons/md'

import TravelBlog1 from '../assets/TravelBlog1.png'
import TravelBlog2 from '../assets/TravelBlog2.png'
import FacebookIcon from '../assets/facebook-icon.svg'
import TwitterIcon from '../assets/twitter-icon.svg'
import LinkedInIcon from '../assets/linkedin-icon.svg'
import LineIcon from '../assets/Line2-icon.svg'
import RecentPost1 from '../assets/RecentPost1.png'
import RecentPost2 from '../assets/RecentPost2.png'
import RecentPost3 from '../assets/RecentPost3.png'
import ArrowIcon from '../assets/arrow-icon.svg'
import LineCategoryIcon from '../assets/line-icon.svg'
import PhoneIcon from '../assets/phone-white.svg'
import GmailIcon from '../assets/gmail-white.svg'
import { Footer, Hero } from '../components'
import header from '../assets/blogp.png'
const SingleBlog = () => {
	const socialIcons = [
		{ src: FacebookIcon, alt: 'Facebook' },
		{ src: TwitterIcon, alt: 'Twitter' },
		{ src: LinkedInIcon, alt: 'LinkedIn' },
	]

	const posts = [
		{
			image: RecentPost1,
			title: 'Travel Stories for Now and the Future',
			date: '14 Dec 2022',
		},
		{
			image: RecentPost2,
			title: '9 Popular Travel Destination on Sale in 2022',
			date: '14 Dec 2022',
		},
		{
			image: RecentPost3,
			title: 'How Are We Going to Travel in 2022?',
			date: '14 Dec 2022',
		},
	]

	const categories = [
		{
			title: 'Travel',
			description:
				'Discover expert guides, planning tips, and essential information for seamless trip organization and unforgettable adventures around the globe.',
		},
		{
			title: 'Tips',
			description:
				'Practical advice for travelers including packing hacks, budget management, cultural etiquette, and safety precautions for various destinations.',
		},
		{
			title: 'Stories',
			description:
				'First-hand experiences and captivating narratives from fellow travelers, featuring unique encounters and life-changing journeys.',
		},
		{
			title: 'Destination',
			description:
				'In-depth guides to popular and hidden locations worldwide, highlighting attractions, local cuisine, and seasonal considerations.',
		},
	]

	return (
		<div>
			<header
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				<Hero
					className="items-center"
					title="single blog"
					link={`singleblog`}
				>
					<div className="h-screen opacity-100 flex flex-col gap-6 items-center justify-center pl-20">
						<h1 className="text-white font-bold tracking-wider text-5xl capitalize max-w-xl leading-15 text-center">
							travel stories for now and the future
						</h1>
						<div className="flex gap-10 md:gap-30 text-white">
							<div className="flex gap-2 items-center">
								<CiUser />
								<p className="align-top">Hashmar</p>
							</div>
							<div className="flex gap-2 items-center">
								<CiCalendarDate />

								<p>January 18, 2021</p>
							</div>
							<div className="flex gap-2 items-center">
								<MdOutlineAutoStories />
								<p>Stories, Tips</p>
							</div>
						</div>
					</div>
				</Hero>
			</header>
			<div className="flex flex-col lg:flex-row max-w-[1512px] mx-auto px-4 lg:px-20 pt-20 gap-12">
				<div className="flex-1">
					<img
						src={TravelBlog1}
						alt="Travel Blog 1"
						className="w-full rounded-xl"
					/>
					<p className="mt-6 text-[#343434] text-[18px] leading-[33px] font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<h2 className="text-[36px] font-medium text-black mt-6">
						Rice Terraces, Tegallalang
					</h2>
					<p className="mt-6 text-[#343434] text-[18px] leading-[33px] font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<img
						src={TravelBlog2}
						alt="Travel Blog 2"
						className="w-full rounded-xl mt-6"
					/>
					<p className="mt-6 text-[#343434] text-[18px] leading-[33px] font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="flex flex-wrap items-center mt-10 gap-4">
						<span className="text-[#343434] font-light text-[18px]">
							Tags :
						</span>
						<span className="text-[#343434] font-medium text-[18px]">
							Destination, Travel
						</span>
						<div className="flex-1"></div>
						<span className="text-black font-light text-[18px]">
							Share This :
						</span>
						<div className="flex gap-4">
							{socialIcons.map((icon, idx) => (
								<img
									key={idx}
									src={icon.src}
									alt={icon.alt}
									className="w-6 h-6"
								/>
							))}
						</div>
					</div>
					<img
						src={LineIcon}
						alt="Divider"
						className="w-full border border-[#C4C4C4] mt-10"
					/>
				</div>

				<div className="flex flex-col gap-10 w-full lg:w-[502px]">
					<div className="bg-white rounded-xl p-6 shadow-md">
						<h2 className="text-[36px] font-medium text-black mb-6">
							Recent Post
						</h2>
						{posts.map((post, index) => (
							<div key={index} className={`flex mb-6 last:mb-0`}>
								<img
									src={post.image}
									alt={`Recent Post ${index + 1}`}
									className="w-[149px] h-[99px]"
								/>
								<div className="ml-6">
									<h3 className="text-[18px] font-medium text-black mb-2">
										{post.title}
									</h3>
									<p className="text-[18px] font-light text-[#343434]">
										{post.date}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="bg-white rounded-xl p-6 shadow-md">
						<h2 className="text-[36px] font-medium text-black mb-10">
							Categories
						</h2>
						{categories.map((category, index) => (
							<div key={index} className="mb-6">
								<div className="collapse bg-base-100 ">
									<input type="radio" name="my-accordion-1" />
									<div className="collapse-title font-semibold flex gap-2">
										<img
											src={ArrowIcon}
											alt="Arrow"
											className="w-[19px] mr-6"
										/>
										<p className="text-base md:text-lg">
											{category.title}
										</p>
									</div>
									<div className="collapse-content text-sm">
										{category.description}
									</div>
								</div>
								<hr class="border-t-2 border-[#C4C4C4] my-4 w-full" />
							</div>
						))}
					</div>

					<div className="bg-black rounded-xl p-10">
						<h2 className="text-white text-center text-[27px] font-semibold">
							Have Any Question?
						</h2>
						<p className="text-white text-center mt-6 text-[18px]">
							Do not hesitate to give us a call. We are an expert
							team and we are happy to talk to you.
						</p>
						<div className="mt-8 space-y-5">
							<div className="flex items-center justify-center gap-4">
								<img
									src={PhoneIcon}
									alt="Phone"
									className="w-[19px]"
								/>
								<span className="text-white text-[18px]">
									+62 6943 6956
								</span>
							</div>
							<div className="flex items-center justify-center gap-4">
								<img
									src={GmailIcon}
									alt="Email"
									className="w-[22px]"
								/>
								<span className="text-white text-[18px]">
									contact@domain.com
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="relative w-full my-24 px-4 sm:px-8 md:px-16">
				<h2 className="text-3xl md:text-4xl font-medium text-black">
					Leave a Reply
				</h2>
				<p className="text-lg mt-6 font-light text-gray-600">
					Your email address will not be published. Required fields
					are marked <span className="text-red-500">*</span>
				</p>

				<form className="mt-8">
					<label
						htmlFor="comment"
						className="block text-lg font-medium text-gray-800 mt-10"
					>
						Comment
					</label>
					<textarea
						id="comment"
						name="comment"
						className="w-full max-w-[815px] h-[275px] mt-3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					></textarea>

					<label
						htmlFor="name"
						className="block text-lg font-medium text-gray-800 mt-6"
					>
						Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full max-w-[815px] h-14 mt-3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>

					<label
						htmlFor="email"
						className="block text-lg font-medium text-gray-800 mt-6"
					>
						Email <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full max-w-[815px] h-14 mt-3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>

					<label
						htmlFor="website"
						className="block text-lg font-medium text-gray-800 mt-6"
					>
						Website
					</label>
					<input
						type="url"
						id="website"
						name="website"
						className="w-full max-w-[815px] h-14 mt-3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					<div className="flex items-center mt-6">
						<input
							type="checkbox"
							id="save-info"
							name="save-info"
							className="w-5 h-5 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500 mr-3"
						/>
						<label
							htmlFor="save-info"
							className="text-lg font-medium text-gray-800"
						>
							Save my name, email, and website in this browser for
							the next time I comment.
						</label>
					</div>

					<button
						type="button"
						className="mt-10 w-full max-w-[181px] h-[51px] bg-white text-2xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Post Comment
					</button>
				</form>
			</section>
			<Footer />
		</div>
	)
}

export default SingleBlog
