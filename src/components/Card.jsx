import React from "react";

const Card = ({ card, title, text }) => {
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img src={card} alt="Shoes" />
			</figure>
			
				<div className={ title? `card-body` : 'none' }>
					<h2 className="card-title">{title}</h2>
					<p className="text-[#555555]">{text}</p>
				</div>
			
		</div>
	);
};

export default Card;
