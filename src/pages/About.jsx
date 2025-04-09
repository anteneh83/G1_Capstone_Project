import React from "react";
import { Footer, Hero, Navbar } from "../components";
import header from "../assets/AboutHero.jpg";
const About = () => {
  return (
    <>
      <section
        className="bg-cover bg-center  h-screen"
        style={{ backgroundImage: `url(${header})` }}
      >
        {" "}
        <p>Hello about us</p>
        <Hero className={`items-center`} title="about us" link={`about`} />
      </section>
      <div className="flex mt-20 ml-5 mb-20 justify-around flex-wrap gap-y-10 ">
        <div className="flex flex-col justify-center items-center ml-1 text-center max-w-xs">
          <img
            className="w-16 mb-4 "
            src="src/assets/great.png"
            alt="Great team work"
          />
          <h1 className="text-2xl font-bold mt-3 mb-2">Great team work</h1>
          <p className="text-sm w-80 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet
            animi corporis inventore porro eveniet quod nobis illum iure
            facilis. Reiciendis voluptatum cumque distinctio nemo beatae dolore
            non, dicta nulla.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center max-w-xs">
          <img className="w-16 mb-4" src="src/assets/vision.png" alt="" />
          <h1 className="text-2xl font-bold mt-3 mb-2">Our Vision</h1>
          <p className="text-sm w-80  text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet
            animi corporis inventore porro eveniet quod nobis illum iure
            facilis. Reiciendis voluptatum cumque distinctio nemo beatae dolore
            non, dicta nulla.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center max-w-xs">
          <img className="w-16 mb-4" src="src/assets/mission.png" alt="" />
          <h1 className="text-2xl font-bold mt-3 mb-2">Our Mission</h1>
          <p className="text-sm w-80  text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet
            animi corporis inventore porro eveniet quod nobis illum iure
            facilis. Reiciendis voluptatum cumque distinctio nemo beatae dolore
            non, dicta nulla.
          </p>
        </div>
      </div>
{/* 
			  <div className="ml-5 mr-5 mb-20 flex flex-wrap  justify-center">
				<div>
          <img className="w-100 mb-10 mr-20 " src="src/assets/Aboutperson.png" alt="" />
				</div>


				<div  className="grid grid-cols-2  mb-4 ml-3" >
					
    <div className="ml-10">

					<img className="w-15" src="src/assets/icon.png" alt="" />
					<p className="text-sm w-2/3 mt-5 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex autem aspernatur. Deleniti,
					 libero, natus voluptatem mollitia alias rerum obcaecati, doloremque quia fugiat velit provident ipsum 
					 porro veritatis. Dignissimosperiam.</p>

          <p className="text-sm  w-2/3 mb-5 ">
            Mauris tempor tellus ante, ut fermentum erat gravida vel.Class
            aptent taciti sociosqu ad litora torquent per conubia nostra,per
            inceptos himenaeos. Aenean nec justo dui.Ut et consequat dui ,a
            malesuada ipsum. Pellentesque nec turpis viverra,blandit mi a,
            accumsan justo.
          </p>
          <h1 className="font-bold text-xl mb-0 ">Siti Sarah</h1>
          <p className="text-gray-400 text-sm pt-0 mt-0">Founder Travosca</p>
    </div>
        </div>
      </div> */}
           <div className="ml-5 mr-5 mb-20 flex flex-wrap justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

               <div className="flex justify-center">
               <img className="w-100" src="src/assets/Aboutperson.png" alt="person" />
               </div>
                  
                  <div className="px-4">
                  <img className="w-10 mb-4" src="src/assets/icon.png" alt="quote icon" />

                      <p className="text-sm mt-5 mb-5">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis ex autem aspernatur. Deleniti,
                       libero, natus voluptatem mollitia alias rerum obcaecati, doloremque quia 
                       fugiat velit provident ipsum  porro veritatis. Dignissimosperiam.
                       </p>

                    <p className="text-sm mb-5">
                     Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent taciti 
                     sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                     Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum.
                      Pellentesque nec turpis viverra, blandit mi a, accumsan justo.
                      </p>

                    <h1 className="font-bold text-xl mb-0">Siti Sarah</h1>
                    <p className="text-gray-400 text-sm mt-0">Founder Travosca</p>
                  </div>

                </div>
           </div>



      <div className="mb-20 bg-[url('/src/assets/About2.png')] bg-cover bg-center h-100 flex justify-center items-center">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-15 ">

            <img
              className="w-30  mb-4"
              src="/src/assets/Abouticon1.png"
              alt="Satisfied Clients"
            />

            <img
              className="w-30  mb-4"
              src="/src/assets/Abouticon2.png"
              alt="New Travellers"
            />

            <img
              className="w-30   mb-4"
              src="/src/assets/Abouticon3.png"
              alt="Destinations"
            />

            <img
              className="w-30  mb-4"
              src="/src/assets/Abouticon4.png"
              alt="Awards"
            />
          
        </div>
      </div>

	  <div className="mb-20 ">
		<p className="text-gray-400 text-center ">Gallary</p>
		<h1 className="font-bold text-xl text-center">Unforgettable moment</h1>
		<div className="container mx-auto px-4 py-12">
  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3  gap-4  ">
    {/* Large Left Image (Bali) - spans 2 rows */}
    <div className=" md:row-span-2 relative group overflow-hidden rounded-xl">
      <img 
        src="src/assets/AboutWomen.png" 
        alt="Bali Destination" 
        className=" h-full  transition-transform duration-500 group-hover:scale-105"
      />
      
	  
    </div>

            {/* Top Right (Dubai) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl ">
              <img
                src="src/assets/AboutDubai.png"
                alt="Dubai Destination"
                className="col-span-2 h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

    {/* Bottom Right (Paris + Italy) */}
    <div className=" grid grid-cols-2 gap-6">
      {/* Paris */}
      <div className="relative group overflow-hidden rounded-xl ">
        <img 
          src="src/assets/AboutParis.png" 
          alt="Paris Destination" 
          className=" h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
      </div>

      {/* Italy */}
      <div className="relative group overflow-hidden rounded-xl ">
        <img 
          src="src/assets/AboutItaly.png" 
          alt="Italy Destination" 
          className=" h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
      </div>
    </div>
  </div>
</div>
			</div>
		
			<main>
				<Footer/>
			</main>
		</>
	);
};

export default About;
