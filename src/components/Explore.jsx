import React, { useState } from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/Rectangle 18.png'
import card3 from '../assets/card3.png'
import Card from './Card'
import Indicator from './Indicator'
const cardInfo = [
	{
		id: '11',
		image: card2,
		title: 'Paris, France',
		description:
			"Paris is known as the 'City of Love' and is famous for the Eiffel Tower.",
	},
	{
		id: '12',
		image: card1,
		title: 'Bali, Indonesia.',
		description:
			'Bali is a beautiful tourist spot and is visited by many travelers. ',
	},
	{
		id: '13',
		image: card3,
		title: 'New York, USA',
		description:
			'The city that never sleeps! Explore Times Square, Central Park, and the Statue of Liberty.',
	},
]

const Explore = () => {
	const [activeCard, setActiveCard] = useState(12) // Use number instead of string

	const handleCardChange = (e, opp = '') => {
		e.preventDefault()

		if (!opp) {
			const cardId = e.currentTarget.dataset.cardId
			if (cardId) {
				setActiveCard(parseInt(cardId, 10)) // Ensure number type
			}
		} else {
			const currentCardId = activeCard
			if (opp === 'add') {
				currentCardId < 13 && setActiveCard(currentCardId + 1)
			} else if (opp === 'minus') {
				currentCardId > 11 && setActiveCard(currentCardId - 1)
			}
		}
	}

	return (
		<section className="lg:px-20 md:px-10 px-5 py-20">
			<div className="text-center">
				<h2 className="font-semibold md:max-xl:text-4xl text-3xl sm:text-4xl xl:text-6xl">
					Explore new worlds with <br /> exotic natural scenary
				</h2>
				<div className="flex w-full justify-between pb-16 h-fit items-start pt-8">
					<Indicator
						imageUrl={'/icons/left_indicator.svg'}
						onClick={(e) => handleCardChange(e, 'minus')}
					/>

					<p className="opacity-50 text-xl px-3">
						Explore the world with what you love beautiful natural
						beauty.
					</p>
					<Indicator
						imageUrl={'/icons/right_indicator.svg'}
						onClick={(e) => handleCardChange(e, 'add')}
					/>
				</div>
			</div>
			<div className="flex flex-wrap align-top gap-5 justify-center md:justify-between">
				{cardInfo.map((card) => (
					<Card
						card={card}
						key={card.id}
						active={parseInt(card.id, 10) === activeCard}
						onClick={handleCardChange}
					/>
				))}
			</div>
		</section>
	)
}

export default Explore
