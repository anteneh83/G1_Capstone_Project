import header from "../assets/package-hero.png";
import { Navbar,Footer,Hero } from "../components";
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
			<main>
				<Footer />
			</main>
		</>
	);
};

export default Package;
