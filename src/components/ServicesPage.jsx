import React from 'react'
import TeamImage from '../assets/TeamImage.png'
import Footer from '../components/Footer' // Make sure this import is correct

const ServicesPage = () => {
	return (
		<>
			<section className="pt-28 pb-16 px-6 md:px-20 max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Our Services</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						At Rebel Rover, our goal is to offer exceptional travel
						experiences tailored to your needs. Our team ensures
						convenience, reliability, and personalized support every
						step of the way.
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-10 items-center">
					<div className="md:w-1/2">
						<img
							loading="lazy"
							decoding="async"
							src={TeamImage}
							alt="Our Team"
							className="rounded-xl shadow-lg w-full h-auto object-cover"
						/>
					</div>
					<div className="md:w-1/2 space-y-4">
						<h2 className="text-2xl font-semibold">
							Why Our Service Stands Out
						</h2>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>
								24/7 customer support for all your travel needs
							</li>
							<li>
								Experienced tour guides and destination experts
							</li>
							<li>Flexible booking and cancellation policies</li>
							<li>Trusted by travelers worldwide</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer /> {/* Footer gets added here at the end */}
		</>
	)
}

export default ServicesPage
