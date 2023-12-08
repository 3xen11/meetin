'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HeartButton from './HeartButton';
import { NavigationTypes } from '../provider/store/types';
import { useSelector } from 'react-redux';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import { BsDoorOpen } from 'react-icons/bs';

const RoomCard = () => {
  const [isHeartChecked, setIsHeartChecked] = useState(false);

  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  const handleHeartClick = () => {
    setIsHeartChecked(!isHeartChecked);
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-darkMode-light' : 'bg-lightMode-light'
      }  w-11/12 mx-auto my-5 h-fit sm:h-72 xl:h-60 flex-col rounded-b-xl sm:rounded-none sm:rounded-r-xl flex flex-wrap overflow-hidden relative shadow-md`}
    >
      {/* -- HEART -- */}
      <div
        className={`${
          darkMode ? 'bg-darkMode-dark' : 'bg-white'
        } w-full sm:w-5/12 p-2 h-full  overflow-hidden  relative`}
      >
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
          <h5
            className={`${
              darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
            } text-lg sm:text-2xl font-bold cursor-pointer  `}
          >
            Polish Hip-Hop Festival 2024
          </h5>
          <p className={`text-xs sm:text-sm flex p-1 gap-2`}>
            <FaRegCalendarAlt
              className={`${
                darkMode ? 'fill-darkMode-text' : 'fill-lightMode-text'
              } h-5 w-5`}
            />{' '}
            <span
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              }`}
            >
              04/07/2024
            </span>
          </p>
          <p className={`text-xs sm:text-sm flex p-1 gap-2`}>
            <RiMapPinLine
              className={`${
                darkMode ? 'fill-darkMode-text' : 'fill-lightMode-text'
              } h-5 w-5`}
            />{' '}
            <span
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              }`}
            >
              Płock/Polska
            </span>
          </p>
          <p className={`text-xs sm:text-sm flex p-1 gap-2`}>
            {' '}
            <BsDoorOpen
              className={`${
                darkMode ? 'fill-darkMode-text' : 'fill-lightMode-text'
              } h-5 w-5`}
            />{' '}
            <span
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              }`}
            >
              Ilość pokoi: 25
            </span>
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-2 flex-wrap">
              <p
                className={` ${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                } cursor-pointer text-xs flex items-center text-center sm:text-sm text-darkMode-text`}
              >
                #plhhf
              </p>
              <p
                className={` ${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                } cursor-pointer text-xs flex items-center text-center sm:text-sm text-darkMode-text`}
              >
                #hiphop
              </p>
              <p
                className={` ${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                } cursor-pointer text-xs flex items-center text-center sm:text-sm text-darkMode-text`}
              >
                #koncert
              </p>
              <p
                className={` ${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                } cursor-pointer text-xs flex items-center text-center sm:text-sm text-darkMode-text`}
              >
                #muzyka
              </p>
            </div>
            <p
              className={` ${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              } text-center flex items-center text-darkMode-text w-fit p-1 h-fit text-sm sm:text-xl`}
            >
              9999 PLN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
