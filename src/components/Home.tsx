// import React from "react";
// import { baseUrl } from "../config";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { useState } from "react";

function Home() {
  const slides = [
    {
      url: "https://media.istockphoto.com/id/508945446/photo/black-and-white-football-ball-on-white.jpg?s=1024x1024&w=is&k=20&c=lOXlpi8q_ngdoMIebqk0V8K5W98-ApxAZCRg6ZeQa_E=",
    },
    {
      url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg",
    },
    {
      url: "https://cdn.britannica.com/51/190751-131-B431C216/soccer-ball-goal.jpg",
    },
    {
      url: "https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/",
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
    <div className="max-w-[1000px] h-[680px] w-full m-auto py-16 px-4 relative group">
      <h1 className="mb-5 ">5 A Side API</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
  );
}

export default Home;

//  const [player, setPlayer] = React.useState<any>([]);

//   function getRandomPlayerId() {
//     const randomNumber = Math.floor(Math.random() * 4) + 1;
//     console.log(randomNumber);
//     return randomNumber;
//   }

//   async function fetchPlayer() {
//     const randomNumber = getRandomPlayerId();
//     const resp = await fetch(
//       `${baseUrl}/players/${randomNumber}`
//     );
//     const playerData = await resp.json();
//     setPlayer(playerData);
//   }
//   React.useEffect(() => {
//     fetchPlayer();
//   }, []);

//  <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           My Footballers Database
//         </h1>
//         <p className="text-lg text-gray-700 mb-4">The footballer DB!</p>
//         <div className="flex justify-center items-center h-screen mb-5">
//           <div className="w-2/3 h-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
//             {/* <!-- Image container --> */}
//             <div className="w-full h-2/3 overflow-hidden">
//               <img
//                 className="w-full h-full object-center"
//                 src={player && player.image}
//                 alt="Image"
//               />
//             </div>
//             {/* <!-- Name container --> */}
//             <div className="w-full h-1/3 p-4">
//               <h2 className="text-xl font-semibold">{player && player.name}</h2>
//               <h3 className="text-l font-semibold">{player && player.club}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
