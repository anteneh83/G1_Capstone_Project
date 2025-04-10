import axios from 'axios'

const API_URL =
	'https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations'

export const fetchDestinations = async () => {
	const response = await axios.get(API_URL)
	return response.data
}

export const addDestination = async (destination) => {
	const response = await axios.post(API_URL, destination)
	return response.data
}

export const updateDestination = async (destination) => {
	const response = await axios.put(
		`${API_URL}/${destination.id}`,
		destination
	)
	return response.data
}

export const deleteDestination = async (id) => {
	const response = await axios.delete(`${API_URL}/${id}`)
	return response.data
}
