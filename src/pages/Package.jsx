import taiwanImage from '../assets/taiwan.png'
import thailandImage from '../assets/thailand.png'
import singaporeImage from '../assets/singapore.png'
import parisImage from '../assets/paris.png'
import indonesiImage from '../assets/indonesi.png'
import swissImage from '../assets/swiss.png'
import planeImage from '../assets/package-plane.png'
import storyImage1 from '../assets/package-story-1.png/'

import header from '../assets/package-hero.png'
import { Navbar, Footer, Hero } from '../components'
import PackageCard from '../components/PackageCard'

// Define the packages array outside the component
const packages = [
	{
		imgUrl: parisImage,
		cityName: 'Paris',
		price: '$299.00/2days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
	{
		imgUrl: swissImage,
		cityName: 'Swiss',
		price: '$299.00/2days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
	{
		imgUrl: thailandImage,
		cityName: 'Thailand',
		price: '$299.00/3days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
	{
		imgUrl: taiwanImage,
		cityName: 'Taiwan',
		price: '$299.00/3days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
	{
		imgUrl: indonesiImage,
		cityName: 'Indonesi',
		price: '$299.00/3days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
	{
		imgUrl: singaporeImage,
		cityName: 'Singapore',
		price: '$299.00/3days',
		description: `Lorem ipsum dolor sit amet, 
            consect adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            incididunt ut labore et dolore`,
	},
]

const Package = () => {
	return (
		<>
			<section
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				<Hero
					className="items-center"
					title=" travel package"
					link={`package`}
				/>
			</section>
			<main className="bg-white px-14 py-32">
				<section>
					<div className="flex items-center justify-between">
						<div className="flex gap-4 flex-col py-14">
							<h2 className="font-semibold text-6xl">
								Popular Destination
							</h2>
							<p className="w-[35rem] text-[#878787]">

								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna
							</p>
						</div>

						<div className="bg-black w-fit h-fit text-white rounded-3xl py-2 px-4">
							Discover more
						</div>
					</div>

					<div className="flex flex-wrap gap-6 items-center py-14">
						{packages.map((pkg, index) => (
							<PackageCard key={index} package={pkg} />
						))}
					</div>
				</section>
				<div>
					<img
						src={planeImage}
						alt=""

						className="w-full pt-6 h-[542px]"
					/>
				</div>

				<section>

					<div className="flex items-center justify-between">
						<div className="flex gap-4 flex-col py-14">
							<h2 className="font-semibold text-6xl">
								Tips & Article
							</h2>
							<p className="w-[35rem] text-[#878787]">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna
							</p>
						</div>


						<div className="bg-black w-fit h-fit text-white rounded-3xl py-2 px-4">
							View more
						</div>
					</div>

					<div className="grid gap-14 grid-cols-[522px_1fr] grid-rows-[repeat(2,514px)]">
						<div className="px-10 py-4  shadow-lg flex flex-col justify-between h-full">
							<div>
								<p className="font-normal leading-16 text-2xl ">
									Perfect | Tips
								</p>
								<h3 className="font-medium text-[2.2rem] leading-12">
									9 Popular Travel Destination on Sale in 2022
									-
								</h3>
								<p className="text-[18px] font-light leading-8 text-[#343434]">

									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
								</p>
							</div>

							<div className="bg-black font-semibold text-[1.2rem] w-fit h-fit text-white rounded-[30px] py-2 mb-7 px-5 justify-self-end">
								Read more
							</div>
						</div>
						<div className="px-10 py-4 row-start-2  shadow-lg flex flex-col justify-between h-full">
							<div>
								<p className="font-normal leading-16 text-2xl ">
									Tips | Travel
								</p>
								<h3 className="font-medium text-[2.2rem] leading-12">
									How Are We Going to Travel in 2022 -
								</h3>
								<p className="text-[18px] font-light leading-8 text-[#343434]">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
								</p>
							</div>

							<div className="bg-black font-semibold text-[1.2rem] w-fit h-fit text-white rounded-[30px] py-2 mb-7 px-5 justify-self-end">
								Read more
							</div>
						</div>

						<div className="row-start-1 row-end-3 col-start-2 grid gap-0 grid-rows-[auto_1fr]">
							<img
								className="h-[679px] w-full"
								src={storyImage1}
								alt=""
							/>
							<div className="px-10 py-4  shadow-lg flex flex-col  justify-between">
								<div>
									<p className="font-normal leading-16 text-2xl ">
										Tips | Travel
									</p>
									<h3 className="font-medium text-[2.2rem] leading-12">
										How Are We Going to Travel in 2022 -
									</h3>
									<p className="text-[18px] font-light leading-8 text-[#343434]">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
									</p>
								</div>

								<div className="bg-black font-semibold text-[1.2rem] w-fit h-fit text-white rounded-[30px] py-2 mb-7 px-5 justify-self-end">
									Read more
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Package
