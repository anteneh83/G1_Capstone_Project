import axios from 'axios'
import { useState, useEffect } from 'react'

export default function DestinationList() {
	const [destinations, setDestinations] = useState([])
	const [loading, setIsLoading] = useState(true)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const fetchDestinations = async () => {
			const response = await axios.get(
				'https://67f762a242d6c71cca64ebd2.mockapi.io/api/v1/destinations'
			)

			setDestinations(response.data)
			setIsLoading(false)
		}
		fetchDestinations()
	}, [])

	const filteredDestinations = destinations.filter((dest) =>
		dest.location.toLowerCase().includes(filter.toLowerCase())
	)
	return (
		<section className="mb-10 max-w-[1200px] mx-auto relative p-4 top-25">
			<h2 className="text-3xl font-bold mb-6">Explore Destinations</h2>
			<input
				type="text"
				placeholder="Filter by location..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				className="w-full max-w-md p-3 mb-6 border border-gray-300 rounded-lg "
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative ">
				{loading ? (
					<p className="p-4 animate-pulse ">
						Fetching destinations...
					</p>
				) : (
					filteredDestinations.map((dest) => (
						<div
							key={dest.id}
							className="bg-white shadow-md rounded-lg p-5"
						>
							<h3 className="text-xl font-semibold">
								{dest.name}
							</h3>
							<p className="text-gray-600">
								Location: {dest.location}
							</p>
							<p className="text-gray-600">
								Price: ${dest.price}
							</p>
							<p className="text-gray-600">
								Available: {dest.availability ? 'Yes' : 'No'}
							</p>
						</div>
					))
				)}
			</div>
		</section>
	)
}
