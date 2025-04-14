import React from 'react'

import {
	Footer,
	Header,
	Hero,
	Explore,
	Choose,
	Testimonials,
	Button,
} from '../components'
import header from '../assets/header.png'
import { Link, useNavigate } from 'react-router-dom'
const Landing = () => {
	const navigate = useNavigate()
	return (
		<>
			<section
				className="bg-cover lg:h-[700px] lg:min-[1100px]:h-[748px] bg-center py-10"
				style={{ backgroundImage: `url(${header})` }}
			>
				<Hero link="home">
					<div className=" space-y-2 md:pt-30 pt-20 lg:min-[1100px]:pt-40 opacity-100 flex flex-col gap-6 items-left justify-center px-5 md:px-16 md:max-[1100px]:px-28">
						<h1 className="text-white w-fit leading-12 text-[40px] md:leading-16 md:text-[55px] lg:leading-20 lg:min-[1100px]:leading-28 lg:text-[65px]  lg:min-[1100px]:text-[90px] font-bold">
							Make in <br />
							your journey
						</h1>
						<p className="text-[#CFCFCF] w-fit text-lg opacity-80">
							Explore the world with what you love beautiful
							<br /> natural beauty.
						</p>

						<div className="flex flex-col sm:justify-between w-[28rem] md:w-[30rem] lg:w-[37rem] sm:flex-row sm:items-center bg-none sm:bg-white sm:rounded-full sm:shadow-md px-2 py-2 gap-2 text-white sm:gap-4">
							<select className="w-fit  lg:text-lg text-base sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
								<option>Location</option>
							</select>
							<select className="w-fit lg:text-lg text-base sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
								<option>Date</option>
							</select>
							<select className="w-fit lg:text-lg text-base sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
								<option>People</option>
							</select>
							<Button
								onClick={(e) => {
									e.preventDefault()
									navigate('destinations')
								}}
								btnType="medium"
							>
								Explore
							</Button>
						</div>

						<p className="text-[#CFCFCF] text-lg">
							<span className="text-white font-semibold">
								Popular Place :
							</span>{' '}
							Bali, Istanbul, Rome, Paris.
						</p>
					</div>
				</Hero>
			</section>
			<Explore />
			<Choose />
			<Testimonials />
			<Footer />
		</>
	)
}

export default Landing
