import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import Button from './Button'
import logo from '../assets/logo 5.png'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import header from '../assets/footer.png'
import Hero from './Hero'
const Footer = () => {
	return (
		<footer>
			<div
				className="bg-center bg-cover"
				style={{ backgroundImage: `url(${header})` }}
			>
				<div
					className={`flex flex-col space-y-6 items-center text-center py-10 px-4 justify-center`}
				>
					<h1 className="text-white text-5xl font-bold capitalize">
						Subscribe to get special price
					</h1>
					<p className="text-white opacity-80">
						Don't wanna miss something? subscribe right now and get
						special <br /> promotion and monthly newsletter
					</p>
					<div className="md:w-[80vh] text-center mb-20 mt-5  py-1.5 px-3 max-[337px]:gap-3 min-[337px]:bg-white rounded-full flex items-center max-[337px]:flex-col justify-between">
						<input
							className="px-2 flex-1 max-[337px]:py-2 max-[337px]:px-2 max-[337px]:rounded-full max-[337px]:bg-white outline-none"
							type="text"
							placeholder="Type your email here"
						/>
						<Button>Subscribe</Button>
					</div>
				</div>
			</div>

			<div className="py-8 flex flex-col align-element  justify-around flex-wrap items-center space-y-4 md:flex-row space-x-0 md:space-x-8 md:items-start">
				{/* LOGO */}
				<div className="hidden md:flex md:flex-col space-y-2 max-w-sm items-center md:items-start">
					<img
						loading="lazy"
						decoding="async"
						src={logo}
						alt="logo"
						className="w-40 h-auto"
					/>
					<p className="text-gray-500">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Voluptatibus eum exercitationem inventore amet
						omnis unde iusto similique officiis aut beatae!
					</p>
				</div>
				{/* CONTACT INFO */}
				<div className="flex flex-col space-y-2">
					<h4 className="font-bold text-lg mb-2">
						Contact Information
					</h4>
					<p className="">
						<HiLocationMarker className="inline" />
						<span className="text-gray-500 px-2 py-1">
							732 Despard St, Atlanta
						</span>
					</p>
					<p className="">
						<MdEmail className="inline" />
						<span className="text-gray-500 px-2 py-1">
							+97 888 8888
						</span>
					</p>
					<p className="">
						<FaPhoneAlt className="inline" />
						<span className="text-gray-500 px-3 py-1">
							info@traveller.com
						</span>
					</p>
				</div>
				{/* QUICK LINK */}
				<div className="flex flex-col space-y-2 items-center md:items-start">
					<h4 className="font-bold text-lg mb-2">Quick Link</h4>
					<Link to="/" className="text-gray-500">
						Home
					</Link>
					<Link to="about" className="text-gray-500">
						About Us
					</Link>
					<Link to="/" className="text-gray-500">
						Tours
					</Link>
					<Link to="contact" className="text-gray-500">
						Contact
					</Link>
				</div>
				{/* FOLLOW US */}
				<div className="flex flex-col space-y-2 items-center md:items-start">
					<h4 className="font-bold text-lg mb-2">Follow US</h4>
					<SocialLinks />
				</div>
			</div>
			<div className="bg-black text-white py-8 text-center">
				<p>
					Copyright © All rights reserved (Website Developed & Managed
					by creativechroma)
				</p>
			</div>
		</footer>
	)
}
export default Footer
