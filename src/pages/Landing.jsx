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
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				<Hero link="home">
					<div className="h-screen space-y-2 pt-40 opacity-100 flex flex-col gap-6 items-left justify-center px-28 ">
						<h1 className="text-white w-[614px] leading-28 text-[90px] font-bold">
							Make in <br />
							your journey
						</h1>
						<p className="text-[#CFCFCF] text-lg opacity-80">
							Explore the world with what you love beautiful
							<br /> natural beauty.
						</p>

						<div className="flex text-lg text-[#9B9B9B] w-[650px] justify-between items-center bg-white px-5 py-3 rounded-full">
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
