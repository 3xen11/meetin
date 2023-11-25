import React from 'react';
import Image from 'next/image';

const EventCard = () => {
  return (
    <div className="bg-[#d2e5f4] w-11/12 mx-auto my-5 h-44 md:h-60 rounded-xl flex flex-wrap ">
      <div className="bg-white w-4/12 hidden md:block">
        <Image
          src="/mountains.jpg"
          layout="fill"
          objectFit="cover"
          alt="Mountains"
        />
      </div>
      <div className="rounded-l-xl p-2 w-10/12 md:w-6/12 -ml-4 bg-[#d2e5f4]">
        <div className="h-5/6">
          {' '}
          <h5 className=" text-lg md:text-2xl text-[#2f85ca] font-bold cursor-pointer">
            Polish Hip-Hop Festival 2024
          </h5>
          <p className=" text-xs md:text-sm">04/07/2024</p>
          <p className=" text-xs md:text-sm">Płock</p>
          <div className="flex  mt-4 text-xs md:text-sm">
            {' '}
            [ikona]
            <p className=" text-xs md:text-sm">2/5</p>
          </div>
        </div>
        <div className=" flex gap-2">
          <p className="text-[#2f85ca] cursor-pointer">#tag</p>
          <p className="text-[#2f85ca] cursor-pointer">#tag</p>
          <p className="text-[#2f85ca] cursor-pointer">#tag</p>
          <p className="text-[#2f85ca] cursor-pointer">#tag</p>
        </div>
      </div>
      <div className="w-2/12 flex-col justify-between h-full flex py-2 border-l-2 border-[#519bd6]">
        <p className="py-2  text-xs md:text-sm -mb-1 md:mb-2 text-center">
          serce
        </p>
      </div>
    </div>
  );
};

export default EventCard;
