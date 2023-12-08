'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HeartButton from './HeartButton';

const RoomCard = () => {
  const [isHeartChecked, setIsHeartChecked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartChecked(!isHeartChecked);
  };

  return (
    <div className="bg-[#f3f1f1] w-11/12 mx-auto my-5 sm:h-60 flex-col rounded-b-xl sm:rounded-none sm:rounded-r-xl flex flex-wrap overflow-hidden relative shadow-md">
      {/* -- HEART -- */}
      <div className="bg-white w-full sm:w-5/12 p-2 h-full  overflow-hidden  relative">
        <HeartButton
          top={'top-4'}
          right={'right-5'}
          isChecked={isHeartChecked}
          onClick={handleHeartClick}
        />
        <Image
          src="/mountains.jpg"
          alt="Mountains"
          width={600}
          height={500}
          className=" h-60 sm:w-full sm:h-full "
        />
      </div>

      {/* -- DESCRIPTION -- */}
      <div className="z-10 w-full sm:w-7/12 h-full flex flex-col justify-between md:w-7/12 p-2">
        <div className="grow flex flex-col gap-2">
          {' '}
          <h5 className=" text-lg sm:text-2xl font-bold cursor-pointer ">
            Polish Hip-Hop Festival 2024
          </h5>
          <p className=" text-xs sm:text-sm ">[ikona] 04/07/2024</p>
          <p className=" text-xs sm:text-sm ">[ikona] Płock</p>
          <p className=" text-xs sm:text-sm ">[ikona]2/5</p>
        </div>

        <div className="flex flex-col">
          <p className="text-center text-end mt-5 sm:mt-0">9999pln</p>
          <div className="flex-wrap flex gap-2">
            <p className="cursor-pointer text-xs flex items-center text-center sm:text-sm">
              #plhhf
            </p>
            <p className="cursor-pointer text-xs flex items-center text-center sm:text-sm">
              #hiphop
            </p>
            <p className="cursor-pointer text-xs flex items-center text-center sm:text-sm">
              #koncert
            </p>
            <p className="cursor-pointer text-xs flex items-center text-center sm:text-sm">
              #muzyka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

// bg - [#cdbde0];
