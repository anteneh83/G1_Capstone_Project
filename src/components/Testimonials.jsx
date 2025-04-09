import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

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
  return (
    <section className="relative my-10">
      <div className="text-left p-4">
        <h4 className="text-gray-500 tracking-widest text-sm uppercase">
          TESTIMONIAL
        </h4>
        <h2 className="text-3xl font-bold mt-2">What our client say</h2>
        <p className="text-gray-500 mt-1">
          Create a visual identity for your company and an overall brand
        </p>
      </div>

      <div className="carousel w-full md:flex md:space-x-4 md:carousel-none bg-gray-200 m-4 py-3">
        {testimonials.map((testimony, index) => (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full flex justify-center md:w-1/3"
          >
            <div className="bg-white  shadow-md rounded-lg p-5 pr-8  ">
              <div className="flex flex-col justify-center items-center mb-4">
                <img
                  src={testimony.image}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full mb-3"
                />
                <p>{testimony.name}</p>
                <p>{testimony.company}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center gap-1 text-yellow-400">
                  {Array.from({ length: testimony.stars }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-center">{testimony.text}</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">
              <a href={`#slide${index === 0 ? testimonials.length: index}`}  className="btn btn-circle">
              <FaChevronLeft />
              </a>
              <a href={`#slide${index === testimonials.length - 1 ? 1 : index + 2}`} className="btn btn-circle">
              <FaChevronRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
