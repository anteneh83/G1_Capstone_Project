import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAutoStories } from "react-icons/md";

import TravelBlog1 from "../assets/TravelBlog1.png";
import TravelBlog2 from "../assets/TravelBlog2.png";
import FacebookIcon from "../assets/facebook-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import LineIcon from "../assets/Line2-icon.svg";
import RecentPost1 from "../assets/RecentPost1.png";
import RecentPost2 from "../assets/RecentPost2.png";
import RecentPost3 from "../assets/RecentPost3.png";
import ArrowIcon from "../assets/arrow-icon.svg";
import LineCategoryIcon from "../assets/line-icon.svg";
import PhoneIcon from "../assets/phone-white.svg";
import GmailIcon from "../assets/gmail-white.svg";
import { Footer, Hero } from "../components";
import header from "../assets/blogp.png";
const SingleBlog = () => {
	const socialIcons = [
		{ src: FacebookIcon, alt: "Facebook" },
		{ src: TwitterIcon, alt: "Twitter" },
		{ src: LinkedInIcon, alt: "LinkedIn" },
	];

	const posts = [
		{
			image: RecentPost1,
			title: "Travel Stories for Now and the Future",
			date: "14 Dec 2022",
		},
		{
			image: RecentPost2,
			title: "9 Popular Travel Destination on Sale in 2022",
			date: "14 Dec 2022",
		},
		{
			image: RecentPost3,
			title: "How Are We Going to Travel in 2022?",
			date: "14 Dec 2022",
		},
	];

	const categories = ["Travel", "Tips", "Stories", "Destination"];

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
						<div className="flex gap-30 text-white">
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
						{categories.map((name, index) => (
							<div key={index} className="mb-6">
								<div className="flex items-center">
									<img
										src={ArrowIcon}
										alt="Arrow"
										className="w-[19px] mr-6"
									/>
									<span className="text-[18px] font-medium text-[#343434]">
										{name}
									</span>
								</div>
								<img
									src={LineCategoryIcon}
									alt="Line"
									className="w-full border border-[#C4C4C4] mt-4"
								/>
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

			{/* Reply Section */}
			<div
				style={{
					position: "relative",
					width: "100%",
					marginTop: "100px",
					marginBottom: "100px",
					padding: "0 72px",
				}}
			>
				<h2
					style={{ fontSize: "36px", fontWeight: 500, color: "#000" }}
				>
					Leave a Reply
				</h2>
				<p
					style={{
						fontSize: "18px",
						marginTop: "24px",
						fontWeight: 300,
					}}
				>
					Your email address will not be published. Required fields
					are marked *
				</p>

				<label
					style={{
						display: "block",
						fontSize: "18px",
						fontWeight: 500,
						marginTop: "40px",
					}}
				>
					Comment
				</label>
				<div
					style={{
						width: "815px",
						height: "275px",
						marginTop: "12px",
						borderRadius: "10px",
						border: "1px solid #C4C4C4",
					}}
				></div>

				<label
					style={{
						display: "block",
						fontSize: "18px",
						fontWeight: 500,
						marginTop: "24px",
					}}
				>
					Name *
				</label>
				<div
					style={{
						width: "815px",
						height: "54px",
						marginTop: "12px",
						borderRadius: "10px",
						border: "1px solid #C4C4C4",
					}}
				></div>

				<label
					style={{
						display: "block",
						fontSize: "18px",
						fontWeight: 500,
						marginTop: "24px",
					}}
				>
					Email *
				</label>
				<div
					style={{
						width: "815px",
						height: "54px",
						marginTop: "12px",
						borderRadius: "10px",
						border: "1px solid #C4C4C4",
					}}
				></div>

				<label
					style={{
						display: "block",
						fontSize: "18px",
						fontWeight: 500,
						marginTop: "24px",
					}}
				>
					Website
				</label>
				<div
					style={{
						width: "815px",
						height: "54px",
						marginTop: "12px",
						borderRadius: "10px",
						border: "1px solid #C4C4C4",
					}}
				></div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginTop: "24px",
					}}
				>
					<div
						style={{
							width: "22px",
							height: "22px",
							borderRadius: "5px",
							border: "1px solid #7D7D7D",
							marginRight: "10px",
						}}
					></div>
					<span style={{ fontSize: "18px", fontWeight: 500 }}>
						Save my name, email, and website in this browser for the
						next time I comment.
					</span>
				</div>

				<button
					style={{
						width: "181px",
						height: "51px",
						marginTop: "40px",
						fontSize: "24px",
						backgroundColor: "#FFFFFF",
						border: "none",
						cursor: "pointer",
						fontWeight: 500,
					}}
				>
					Post Comment
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default SingleBlog;
