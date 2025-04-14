import React from 'react'
import { Footer, Hero, Navbar } from '../components'
import header from '../assets/AboutHero.jpg'
import greatTeam from '../assets/great.png'
import vision from '../assets/vision.png'
import mission from '../assets/mission.png'
import aboutPerson from '../assets/Aboutperson.png'
import quoteIcon from '../assets/icon.png'
import aboutIcon1 from '../assets/Abouticon1.png'
import aboutIcon2 from '../assets/Abouticon2.png'
import aboutIcon3 from '../assets/Abouticon3.png'
import aboutIcon4 from '../assets/Abouticon4.png'
import aboutWomen from '../assets/AboutWomen.png'
import aboutDubai from '../assets/AboutDubai.png'
import aboutParis from '../assets/AboutParis.png'
import aboutItaly from '../assets/AboutItaly.png'
import aboutBg from '../assets/About2.png'

const About = () => {
	return (
		<>
			<section
				className="bg-cover bg-center h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				<p>Hello about us</p>
				<Hero
					className={`items-center`}
					title="about us"
					link={`about`}
				/>
			</section>

			<div className="flex mt-20 ml-5 mb-20 justify-around flex-wrap gap-y-10">
				<div className="flex flex-col justify-center items-center ml-1 text-center max-w-xs">
					<img
						className="w-16 mb-4"
						src={greatTeam}
						alt="Great team work"
					/>
					<h1 className="text-2xl font-bold mt-3 mb-2">
						Great team work
					</h1>
					<p className="text-sm w-80 text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa amet animi corporis inventore porro eveniet quod
						nobis illum iure facilis. Reiciendis voluptatum cumque
						distinctio nemo beatae dolore non, dicta nulla.
					</p>
				</div>

				<div className="flex flex-col justify-center items-center text-center max-w-xs">
					<img className="w-16 mb-4" src={vision} alt="Our Vision" />
					<h1 className="text-2xl font-bold mt-3 mb-2">Our Vision</h1>
					<p className="text-sm w-80 text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa amet animi corporis inventore porro eveniet quod
						nobis illum iure facilis. Reiciendis voluptatum cumque
						distinctio nemo beatae dolore non, dicta nulla.
					</p>
				</div>

				<div className="flex flex-col justify-center items-center text-center max-w-xs">
					<img
						className="w-16 mb-4"
						src={mission}
						alt="Our Mission"
					/>
					<h1 className="text-2xl font-bold mt-3 mb-2">
						Our Mission
					</h1>
					<p className="text-sm w-80 text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa amet animi corporis inventore porro eveniet quod
						nobis illum iure facilis. Reiciendis voluptatum cumque
						distinctio nemo beatae dolore non, dicta nulla.
					</p>
				</div>
			</div>

			<div className="ml-5 mr-5 mb-20 flex flex-wrap justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="flex justify-center">
						<img className="w-100" src={aboutPerson} alt="person" />
					</div>

					<div className="px-4">
						<img
							className="w-10 mb-4"
							src={quoteIcon}
							alt="quote icon"
						/>

						<p className="text-sm mt-5 mb-5">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Perspiciatis ex autem aspernatur. Deleniti,
							libero, natus voluptatem mollitia alias rerum
							obcaecati, doloremque quia fugiat velit provident
							ipsum porro veritatis. Dignissimosperiam.
						</p>

						<p className="text-sm mb-5">
							Mauris tempor tellus ante, ut fermentum erat gravida
							vel. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Aenean
							nec justo dui. Ut et consequat dui, a malesuada
							ipsum. Pellentesque nec turpis viverra, blandit mi
							a, accumsan justo.
						</p>

						<h1 className="font-bold text-xl mb-0">Siti Sarah</h1>
						<p className="text-gray-400 text-sm mt-0">
							Founder Travosca
						</p>
					</div>
				</div>
			</div>

			<div
				className="mb-20 bg-cover bg-center h-100 flex justify-center items-center"
				style={{ backgroundImage: `url(${aboutBg})` }}
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-25">
					<img
						className="w-45 mb-4"
						src={aboutIcon1}
						alt="Satisfied Clients"
					/>

					<img
						className="w-45 mb-4"
						src={aboutIcon2}
						alt="New Travellers"
					/>

					<img
						className="w-45 mb-4"
						src={aboutIcon3}
						alt="Destinations"
					/>

					<img className="w-45 mb-4" src={aboutIcon4} alt="Awards" />
				</div>
			</div>

			<div className="mb-20">
				<p className="text-gray-400 text-center">Gallary</p>
				<h1 className="font-bold text-xl text-center">
					Unforgettable moment
				</h1>
				<div className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{/* Large Left Image */}
						<div className="md:row-span-2 relative group overflow-hidden rounded-xl">
							<img
								src={aboutWomen}
								alt="Women"
								className="h-full transition-transform duration-500 group-hover:scale-105"
							/>
						</div>

						{/* Top Right */}
						<div className="md:col-span-2 relative group overflow-hidden rounded-xl">
							<img
								src={aboutDubai}
								alt="Dubai"
								className="h-full transition-transform duration-500 group-hover:scale-105"
							/>
						</div>

						{/* Bottom Right */}
						<div className="grid grid-cols-2 gap-6">
							<div className="relative group overflow-hidden rounded-xl">
								<img
									src={aboutParis}
									alt="Paris"
									className="h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<div className="relative group overflow-hidden rounded-xl">
								<img
									src={aboutItaly}
									alt="Italy"
									className="h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<main>
				<Footer />
			</main>
		</>
	)
}

export default About
