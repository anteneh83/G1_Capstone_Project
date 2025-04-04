import React from "react";
import card1 from '../assets/card1.png'
import card2 from '../assets/Rectangle 18.png'
import card3 from '../assets/card3.png'
import Card from "./Card";
const Explore = () => {
	return (
		<section className="m-10">
			<div>
				<div className="text-center">
					<h1 className="text-6xl font-semibold tracking-wide ">
						Explore new worlds with <br /> exotic natural scenary
					</h1>
					<p className="opacity-50 text-xl my-10">
						Explore the world with what you love beautiful natural
						beauty.
					</p>
				</div>
				<div className="flex align-top justify-around">
                    <Card card={card2}/>
					<Card card={card1} title='Bali, Indonesia.' text='Bali is a beautiful tourist spot and is visited by many travelers.' />
                    <Card card={card3}/>

				</div>
			</div>
		</section>
	);
};

export default Explore;
