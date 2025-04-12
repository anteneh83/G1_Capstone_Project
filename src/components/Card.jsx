import React from 'react'

const Card = ({ card, onClick, active = false }) => {
	const className = active ? 'rounded-t-lg' : 'rounded-lg'

	return (
		<div
			data-card-id={card.id}
			onClick={(e) => onClick(e)}
			className={` w-[444px] h-fit cursor-pointer rounded-lg bg-base-100 shadow-lg`}
		>
			<figure>
				<img
					src={card.image}
					className={`object-cover  w-full h-[316px] ${className}`}
					alt="Shoes"
				/>

				{active && (
					<figcaption className="py-7.5 px-5 space-y-2 relative">
						<div className="absolute text-center justify-center bg-white text-8xl p-4 flex align-center h-fit right-8 -top-8 rounded-full shadow-md">
							<p className="h-[49px] w-[47px]">“</p>
						</div>
						<h2 className="font-bold text-2xl">{card.title}</h2>
						<p className="text-[#555555] font-medium">
							{card.description}
						</p>
					</figcaption>
				)}
			</figure>
		</div>
	)
}

export default Card
