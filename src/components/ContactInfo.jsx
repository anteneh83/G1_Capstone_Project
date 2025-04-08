import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

import { IoCall } from "react-icons/io5";
const ContactInfo = () => {
	return (
		<div className="grid md:grid-cols-2 gap-10 m-10 items-center">
			<div className="shadow-md p-10">
                <form className="flex flex-col items-center max-w-md justify-center gap-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input  w-full input-md p-3 border rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input  w-full input-md p-3 border rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input w-full input-md p-3 border rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-md  w-full p-3 border rounded-md"
                    ></textarea>
                    <button className="btn bg-black text-white rounded-3xl p-3">
                        Send Message
                    </button>
                </form>
            </div>
			<div className="p-10">
				<div>
					<h1 className="text-4xl capitalize font-bold mb-4">get in touch</h1>
					<p className="text-[#6b6b6b]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna
					</p>
					<div className="grid sm:grid-cols-2 lg mt-13 gap-8">
						<div className="flex flex-col gap-3">
              <h2 className="text-xl ">Ayanaw</h2>
							<div className="flex gap-3 items-center ">
								<IoCall />
								<p>+62 6943 6956</p>
							</div>
							<div className="flex gap-3 items-center ">
								<TfiEmail />
								<p>contact@domai.com</p>
							</div>
							<div className="flex gap-3 items-center ">
								<FaLocationDot />
                Jl. Darussalam Hagu selatan
							</div>
						</div>
            <div className="flex flex-col gap-3">
            <h2 className="text-xl ">Ayanaw</h2>
							<div className="flex gap-3 items-center ">
								<IoCall />
								<p>+62 6943 6956</p>
							</div>
							<div className="flex gap-3 items-center ">
								<TfiEmail />
								<p>contact@domai.com</p>
							</div>
							<div className="flex gap-3 items-center ">
								<FaLocationDot />
                Jl. Darussalam Hagu selatan
							</div>
						</div><div className="flex flex-col gap-3">
            <h2 className="text-xl ">Ayanaw</h2>
							<div className="flex gap-3 items-center ">
								<IoCall />
								<p>+62 6943 6956</p>
							</div>
							<div className="flex gap-3 items-center ">
								<TfiEmail className="" />
								<p>contact@domai.com</p>
							</div>
							<div className="flex gap-3 items-center ">
								<FaLocationDot />
                Jl. Darussalam Hagu selatan
							</div>
						</div><div className="flex flex-col gap-3">
            <h2 className="text-xl ">Ayanaw</h2>
							<div className="flex gap-3 items-center ">
								<IoCall />
								<p>+62 6943 6956</p>
							</div>
							<div className="flex gap-3 items-center ">
								<TfiEmail className="" />
								<p>contact@domai.com</p>
							</div>
							<div className="flex gap-3 items-center ">
								<FaLocationDot />
                Jl. Darussalam Hagu selatan
							</div>
						</div>
            
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;