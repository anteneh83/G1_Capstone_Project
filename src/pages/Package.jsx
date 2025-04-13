
import taiwanImage from "../assets/taiwan.png";
import thailandImage from "../assets/thailand.png";
import singaporeImage from "../assets/singapore.png";
import parisImage from "../assets/paris1.png";
import indonesiImage from "../assets/indonesi.png";
import swissImage from "../assets/swiss.png";
import planeImage from "../assets/package-plane.png";
import storyImage1 from "../assets/package-story-1.png/";
import header from '../assets/package-hero.png'
import { Navbar, Footer, Hero, Button } from '../components'
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
			<main className="sm:px-8 md:max-[54.6rem]:px-14 px-5 md:px-20 xl:px-20  min-[69.5rem]:px-14 py-32">
				<section>
					<div className="flex items-center text-center md:text-left md:flex-row flex-col justify-between">
						<div className="flex gap-4 flex-col py-14">
							<h2 className="font-semibold md:max-xl:text-4xl text-3xl sm:text-4xl xl:text-6xl">
								Popular Destination
							</h2>
							<p className="max-w-[35rem] md:max-[914px]:max-w-[30rem] whitespace-break-spaces text-[#878787]">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna
							</p>
						</div>

						<Button btnType="medium">Discover more</Button>
					</div>

					<div className="grid grid-cols-[repeat(1,_minmax(20rem,_27.8rem))] md:justify-between justify-center gap-5 md:grid-cols-[repeat(2,_minmax(20rem,_27.8rem))] min-[69.5rem]:grid-cols-[repeat(3,_minmax(20rem,_27.8rem))] py-14">
						{packages.map((pkg, index) => (
							<PackageCard key={index} package={pkg} />
						))}
					</div>
				</section>
				<div>
					<img
						src={planeImage}
						alt=""
						className="w-full pt-6 object-cover md:h-[400px] h-[300px] xl:h-[542px]"
					/>
				</div>

				<section>
					<div className="flex items-center mb-8 md:mb-0 text-center md:text-left md:flex-row flex-col justify-between">
						<div className="flex gap-4 flex-col py-14">
							<h2 className="font-semibold md:max-xl:text-4xl text-3xl xl:text-6xl">
								Tips & Article
							</h2>
							<p className="text-[16px] xl:text-[18px] mb-3 sm:text-[16.8px] font-light md:leading-normal leading-8 text-[#343434]">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna
							</p>
						</div>

						<Button btnType="medium">View more</Button>
					</div>

					<div className="grid xl:max-[83.5rem]:gap-8 xl:gap-14 gap-10 md:grid-cols-2  xl:grid-cols-[minmax(29rem,32.5rem)_minmax(39rem,1fr)] max-[1000px]:gap-x-0 xl:grid-rows-[repeat(2,514px)] md:grid-rows-[900px_400px] sm:grid-rows-[715px_repeat(2,330px)] grid-rows-[650px_repeat(2,340px)] grid-cols-1">
						<div className="px-10 py-4 max-[1000px]:col-span-2 max-[1000px]:col-start-1 row-start-2 xl:row-start-1 shadow-lg flex flex-col justify-between h-full">
							<div className="sm:space-y-0 space-y-2">
								<p className="font-normal sm:leading-13 leading-normal md:leading-16 text-[18px] md:text-lg xl:text-2xl ">
									Perfect | Tips
								</p>
								<h3 className="font-medium md:text-[1.6rem] text-[1.4rem] sm:text-[1.6rem]  lg:text-[1.8rem] xl:text-[2.2rem] md:leading-14 sm:leading-8 leading-normal">
									9 Popular Travel Destintion on Sale in 2022
									-
								</h3>
								<p className="text-[16px] xl:text-[18px] mb-3 sm:text-[16.8px] font-light md:leading-10 sm:leading-8 leading-normal text-[#343434]">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
								</p>
							</div>
							<Button btnType="large" className="mb-8">
								Read more
							</Button>
						</div>

						<div className="px-10 py-4 max-[1000px]:col-span-2 max-[1000px]:col-start-1 rows-start-3 xl:row-start-2 shadow-lg flex flex-col justify-between h-full">
							<div className="sm:space-y-0 space-y-2">
								<p className="font-normal sm:leading-13 leading-normal md:leading-16 text-[18px] md:text-lg xl:text-2xl ">
									Tips | Travel
								</p>
								<h3 className="font-medium md:text-[1.6rem] text-[1.4rem] sm:text-[1.6rem]  lg:text-[1.8rem] xl:text-[2.2rem] md:leading-14 sm:leading-8 leading-normal">
									How Are We Going to Travel in 2022 -
								</h3>
								<p className="text-[16px] xl:text-[18px] mb-3 sm:text-[16.8px] font-light md:leading-10 sm:leading-8 leading-normal text-[#343434]">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna
								</p>
							</div>
							<Button btnType="large" className="mb-8">
								Read more
							</Button>
						</div>

						<div className="row-start-1 max-[580px]:max-h-[580px] md:max-xl:justify-self-center md:col-start-1 md:max-xl:col-end-3 shadow-lg rounded-xl bg-white xl:row-end-3 xl:col-start-2 grid gap-0 grid-rows-[auto_1fr]">
							<img
								className="md:h-[520px] xl:h-[679px] w-full rounded-t-xl object-cover"
								src={storyImage1}
								alt=""
							/>
							<div className="px-10 py-4 flex flex-col  justify-between">
								<div className="space-y-2 sm:space-y-0">
									<p className="font-normal text-[1rem] sm:text-xl sm:leading-10 leading-normal md:leading-16 text-2xl ">
										Tips | Travel
									</p>
									<h3 className="font-medium text-[1.2rem] sm:text-[1.6rem] md:text-[2.2rem] sm:leading-9 leading-normal md:leading-12">
										How Are We Going to Travel in 2022 -
									</h3>
									<p className="md:text-[18px] sm:text-[16px] text-[15px] font-light sm:leading-6 leading-normal md:leading-8 text-[#343434]">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
									</p>
								</div>
								<Button btnType="large" className="mb-8">
									Read more
								</Button>
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
