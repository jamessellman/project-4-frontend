// import React from "react";
// import { baseUrl } from "../config";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { useState } from "react";

function Home() {
  const slides = [
    {
      url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg",
    },
    {
      url: "https://cdn.britannica.com/51/190751-131-B431C216/soccer-ball-goal.jpg",
    },
    {
      url: "https://www.instituteforgovernment.org.uk/sites/default/files/styles/16_9_desktop/public/2023-03/premier-league-football-1504x846px.jpg?h=dd1b06b1&itok=3dihrnpr",
    },
    {
      url: "https://facts.net/wp-content/uploads/2023/07/16-facts-about-football-1689928910.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section>
      <div className="max-w-[1000px] h-[580px] w-full m-auto py-5 px-4 relative group">
        <h1 className="text-5xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-BLACK mb-8 mt-5">
  Welcome to 5-A-Side-API
</h1>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          {/* left arrow */}
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <footer className=" fixed bottom-0 left-0 w-full bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024.{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              
            </a>
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Home;
