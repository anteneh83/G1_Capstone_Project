import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sara Jay",
    company: "Trevelier",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive.",
  },
  {
    name: "Cristian Daniel",
    company: "Trevelier",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive.",
  },
  {
    name: "Kausar Hasan",
    company: "Trevelier",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive.",
  },
  {
    name: "Anonymous",
    company: "",
    stars: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Before we use our own product, we need to create an overall product. We then need to dive.",
  },
  {
    name: "John Doe",
    company: "Trevelier",
    stars: 4,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Before we proceed, we need to ensure everything is aligned with our core vision.",
  },
  {
    name: "Jane Smith",
    company: "TechCorp",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Our goal is to deliver top-notch solutions, focusing on client satisfaction and innovation.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 testimonials at a time
  const testimonialsToShow = testimonials.slice(currentIndex, currentIndex + 3);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          {/* Left-aligned Text */}
          <div className="text-left">
            <h4 className="text-gray-500 tracking-widest text-sm uppercase">
              TESTIMONIAL
            </h4>
            <h2 className="text-3xl font-bold mt-2">What our client say</h2>
            <p className="text-gray-500 mt-1">
              Create a visual identity for your company and an overall brand
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsToShow.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-6 border border-gray-200 rounded-lg mx-auto"
            >
              {/* Profile Image - Top Center */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-14">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center w-full">
                    <h3 className="font-medium text-gray-900">
                      {testimonial.name || "Anonymous"}
                    </h3>
                    {testimonial.company && (
                      <p className="text-gray-500 text-sm">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < testimonial.stars
                            ? "text-yellow-400 text-lg"
                            : "text-gray-300 text-lg"
                        }
                      >
                        ★
                      </span>
                    ))}
                </div>

                <p className="text-gray-600 text-center">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
