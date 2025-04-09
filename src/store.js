import { configureStore } from '@reduxjs/toolkit'
import destinationsReducer from './features/destinations/destinationSlice'

export const store = configureStore({
	reducer: {
		destinations: destinationsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export default store
