'use client';
import React, { useState } from 'react';
import { Dispatch } from 'react';
import HeartButton from './HeartButton';
// ICONS
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import { BsDoorOpen } from 'react-icons/bs';

type HeartState = {
  favoriteButtonChecked: boolean;
  dispatch: any;
  toggleFavoriteButton: Function;
};

const EventCard: React.FC<HeartState> = () => {
  const [isHeartChecked, setIsHeartChecked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartChecked(!isHeartChecked);
  };

  return (
    <div className="bg-[#e6e6e6] w-11/12 mx-auto lg:mx-0 lg:ml-auto my-5  sm:h-60 flex-col flex flex-wrap relative shadow-md bg-test hover:border-b-4 border-[#E37BFF] transition-all duration-75">
      {/* -- HEART -- */}

      <HeartButton
        top={'top-3'}
        right={'right-3'}
        isChecked={isHeartChecked}
        onClick={handleHeartClick}
      />

      {/* -- DESCRIPTION -- */}
      <div className="z-10 w-full h-full flex flex-col justify-between p-2">
        <div className="flex flex-col gap-2">
          {' '}
          <h5 className="w-fit p-1 max-w-[80%] sm:max-w-[90%] text-lg sm:text-2xl font-bold cursor-pointer backdrop-blur-xl text-white">
            Polish Hip-Hop Festival 2024
          </h5>
          <p className=" text-xs sm:text-sm  backdrop-blur-xl w-fit p-1 flex items-center gap-2">
            <FaRegCalendarAlt className="fill-white h-5 w-5" />{' '}
            <span className="text-white">04/07/2024</span>
          </p>
          <p className=" text-xs sm:text-sm  backdrop-blur-xl w-fit p-1 flex items-center gap-2">
            <RiMapPinLine className="fill-white h-5 w-5" />{' '}
            <span className="text-white">Płock/Polska</span>
          </p>
          <p className=" text-xs sm:text-sm  backdrop-blur-xl w-fit p-1 flex items-center gap-2">
            <BsDoorOpen className="fill-white h-5 w-5" />{' '}
            <span className="text-white">Ilość pokoi: 25</span>
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className=" flex flex-wrap gap-2 mt-2 sm:mt-0">
            <p className="cursor-pointer flex items-center text-center text-xs sm:text-sm backdrop-blur-xl p-1 text-white">
              #plhhf
            </p>
            <p className="cursor-pointer flex items-center text-center text-xs sm:text-sm backdrop-blur-xl p-1 text-white">
              #hip-hop
            </p>
            <p className="cursor-pointer flex items-center text-center text-xs sm:text-sm backdrop-blur-xl p-1 text-white">
              #koncert
            </p>
            <p className="cursor-pointer flex items-center text-center text-xs sm:text-sm backdrop-blur-xl p-1 text-white">
              #muzyka
            </p>
          </div>
          <p className="text-center text-center flex items-center backdrop-blur-xl text-white w-fit p-1 h-fit text-sm sm:text-2xl mt-2 ml-2">
            9999 PLN
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

// bg - [#cdbde0];
