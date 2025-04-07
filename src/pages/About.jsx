import icon1 from "../assets/Vector.svg";
import icon2 from "../assets/Vector (1).svg";
import icon3 from "../assets/Vector (2).svg";
import smilingPerson from "../assets/person.png";
import comma from "../assets/Vector (5).svg";
import group1 from "../assets/Group (1).svg";
import group2 from "../assets/Group (2).svg";
import group3 from "../assets/Vector (3).svg";
import group4 from "../assets/Vector (4).svg";

import Bali from "../assets/Bali.png";
import Italy from "../assets/Italy.png";
import Paris from "../assets/Paris.png";
import duabi from "../assets/forest.png";
export const About = () => {
  return (
    <>
      <div className="flex h-[860px] w-auto flex-col items-center justify-center bg-[url(./assets/Banner.png)] bg-center text-white">
        <h1 className="mb-4 text-2xl font-bold">About us</h1>
        <a href="#">Home > About Us</a>
      </div>
      <div className="m-4 md:my-8 md:flex">
        <div className="flex flex-col items-center justify-center p-3">
          <img src={icon1} className="w-[84px]" />
          <h2 className="p-3 text-2xl font-bold">Great team work</h2>
          <p className="text-center text-sm font-light text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            libero possimus quisquam dolorem numquam temporibus eum, assumenda
            distinctio accusamus reiciendis et dicta alias deleniti voluptatum
            amet qui magnam quo cum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <img src={icon2} className="w-[84px]" />
          <h2 className="p-3 text-2xl font-bold">Our Vision</h2>
          <p className="text-center text-sm font-light text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            libero possimus quisquam dolorem numquam temporibus eum, assumenda
            distinctio accusamus reiciendis et dicta alias deleniti voluptatum
            amet qui magnam quo cum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <img src={icon3} className="w-[84px]" />
          <h2 className="p-3 text-2xl font-bold">Our mision</h2>
          <p className="text-center text-sm font-light text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            libero possimus quisquam dolorem numquam temporibus eum, assumenda
            distinctio accusamus reiciendis et dicta alias deleniti voluptatum
            amet qui magnam quo cum.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <img
          src={smilingPerson}
          alt="smiling person"
          className="w-[550px] md:h-[340px]"
        />
        <div className="flex flex-col gap-2 p-4">
          <img src={comma} alt="comma" className="w-[50px] pb-4" />
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            dolorum asperiores assumenda aut quam? Aliquam vel culpa eveniet
            voluptate quos veritatis id, nisi, officiis, ad possimus voluptates.
            Recusandae, dolorem fugit?
          </p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            cumque quo eum asperiores ratione illo amet magni eveniet sint
            neque.
          </p>
          <p className="text-xl font-bold">siti Sarah</p>
          <p className="text-sm text-gray-500">Founder Travosca</p>
        </div>
      </div>
      <div className="my-4 grid h-[342px] grid-cols-2 items-center justify-center bg-[url(./assets/image.png)] bg-center p-3 md:grid-cols-4 md:bg-cover">
        <div className="flex gap-2">
          <img src={group1} alt="" className="w-[40px]" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">
              126<sup className="p-2 text-lg text-gray-300">+</sup>
            </p>
            <p className="font-sm text-gray-300">Satisfied client</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={group4} alt="" className="w-[40px]" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">
              230<sup className="p-2 text-lg text-gray-300">+</sup>
            </p>
            <p className="font-sm text-gray-300">New Traveller</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={group3} alt="" className="w-[40px]" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">
              230<sup className="p-2 text-lg text-gray-300">+</sup>
            </p>
            <p className="font-sm text-gray-300">Destinations</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={group2} alt="" className="w-[40px]" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">
              230<sup className="p-2 text-lg text-gray-300">+</sup>
            </p>
            <p className="font-sm text-gray-300">Awards</p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-center text-gray-400">Gallery</h2>
        <h3 className="p-2 text-center text-2xl font-extrabold">
          Unforgettable moment
        </h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <img src={Bali} alt="" className="relative w-[600px] rounded-lg" />
            <p className="absolute bottom-4 left-4">Bali</p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <img
                src={duabi}
                alt=""
                className="relative h-[200px] w-auto rounded-lg md:col-span-2"
              />
              <p className="absolute bottom-4 left-4">Dubai</p>
            </div>
            <div>
              <img src={Paris} alt="" className="relative w-auto rounded-lg" />
              <p className="absolute bottom-4 left-4">Paris</p>
            </div>
            <div>
              <img src={Italy} alt="" className="relative w-auto rounded-lg" />
              <p className="absolute bottom-4 left-4">Italy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}