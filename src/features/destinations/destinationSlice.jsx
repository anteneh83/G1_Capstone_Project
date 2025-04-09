import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	addDestination,
	deleteDestination,
	fetchDestinations,
	updateDestination,
} from './destinationAPI'

const initialState = {
	destinations: [],
	status: 'idle',
	error: null,
}

// Async thunks
export const fetchDestinationsAsync = createAsyncThunk(
	'destinations/fetchDestinations',
	async () => {
		const response = await fetchDestinations()
		return response
	}
)

export const addDestinationAsync = createAsyncThunk(
	'destinations/addDestination',
	async (destination) => {
		const response = await addDestination(destination)
		return response
	}
)

export const updateDestinationAsync = createAsyncThunk(
	'destinations/updateDestination',
	async (destination) => {
		const response = await updateDestination(destination)
		return response
	}
)

export const deleteDestinationAsync = createAsyncThunk(
	'destinations/deleteDestination',
	async (id) => {
		await deleteDestination(id)
		return id
	}
)

const destinationsSlice = createSlice({
	name: 'destinations',
	initialState,
	reducers: {
		// here synchronous reducers
	},
	extraReducers: (builder) => {
		builder
			// Fetch destinations
			.addCase(fetchDestinationsAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchDestinationsAsync.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.destinations = action.payload
			})
			.addCase(fetchDestinationsAsync.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})

			// Add destination
			.addCase(addDestinationAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(addDestinationAsync.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.destinations.push(action.payload)
			})
			.addCase(addDestinationAsync.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})

			// Update destination
			.addCase(updateDestinationAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(updateDestinationAsync.fulfilled, (state, action) => {
				state.status = 'succeeded'
				const index = state.destinations.findIndex(
					(dest) => dest.id === action.payload.id
				)
				if (index !== -1) {
					state.destinations[index] = action.payload
				}
			})
			.addCase(updateDestinationAsync.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})

			// Delete destination
			.addCase(deleteDestinationAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(deleteDestinationAsync.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.destinations = state.destinations.filter(
					(dest) => dest.id !== action.payload
				)
			})
			.addCase(deleteDestinationAsync.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default destinationsSlice.reducer
