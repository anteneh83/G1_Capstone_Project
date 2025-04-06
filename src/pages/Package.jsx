import taiwanImage from '../assets/taiwan.png'
import thailandImage from '../assets/thailand.png'
import singaporeImage from '../assets/singapore.png'
import parisImage from '../assets/paris.png'
import indonesiImage from '../assets/indonesi.png'
import swissImage from '../assets/swiss.png'

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
			</main>
			<Footer />
		</>
	)
}

export default Package
