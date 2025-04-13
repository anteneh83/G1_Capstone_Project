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
import Partners from '../components/Partners'
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
						<h1 className="text-white w-fit leading-16 text-[55px] lg:leading-20 lg:min-[1100px]:leading-28 lg:text-[65px]  lg:min-[1100px]:text-[90px] font-bold">
							Make in <br />
							your journey
						</h1>
						<p className="text-[#CFCFCF] w-fit text-lg opacity-80">
							Explore the world with what you love beautiful
							<br /> natural beauty.
						</p>

						<div className="flex text-lg gap-2  max-[665px]:text-[16px] max-[665px]:justify-around text-[#9B9B9B] max-w-[650px] min-[665px]:justify-between items-center bg-white px-5 py-3 rounded-full">
							<p>Location ^</p>
							<p>Date ^</p>
							<p>People ^</p>

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
			<Partners />
			<Testimonials />
			<Footer />
		</>
	)
}

export default Landing
