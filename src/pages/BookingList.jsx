import { useState, useEffect } from "react";
import { getBookings, deleteBookings, createBookings } from "../api/bookingApi";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    status: "pending",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getBookings();
      setBookings(data);
      setIsLoading(false);
    };
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await deleteBookings(id);
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBookings(formData);
    const updatedBookings = await getBookings()
    setBookings(updatedBookings)

    setFormData({ destination: "", date: "", status: "Pending" });
    document.getElementById("my_modal_3").close();
    alert("Booking created successfully!");
  };

  return (
    <section className="my-10 max-w-[1200px] mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>
      <button
        className="btn m-4 bg-green-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add New Booking
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          <p className="p-4 animate-pulse ">Fetching bookings...</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="bg-white shadow-md rounded-lg p-5">
              <h3 className="text-xl font-semibold">{booking.destination}</h3>
              <p className="text-gray-600">Date: {booking.date}</p>
              <p className="text-gray-600">Status: {booking.status}</p>
              <button
                onClick={() => handleDelete(booking.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <section className="my-10 max-w-[1200px] mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Create a Booking</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-800">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full max-w-md mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full max-w-md mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => document.getElementById("my_modal_3").close()}
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                  Book Now
                </button>
              </div>
            </form>
          </section>
        </div>
      </dialog>
    </section>
  );
}
