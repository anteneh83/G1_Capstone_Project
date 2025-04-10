import axios from "axios";
const BASE_URL = "https://67f762a242d6c71cca64ebd2.mockapi.io/api/v1";

export const getBookings = async () => {
  const response = await axios.get(`${BASE_URL}/Bookings`);
  return response.data;
};

export const createBookings = async (booking) => {
  const response = await axios.post(`${BASE_URL}/Bookings`, booking)
  return response.data
};

export const deleteBookings = async (id) => {
    const response = await axios.delete(`${BASE_URL}/Bookings/${id}`)
    return response.data
}
