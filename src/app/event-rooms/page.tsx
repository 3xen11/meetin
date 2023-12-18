'use client';

import React from 'react';
import EventRoomCard from '../../components/EventRoomCard';
import { useSelector } from 'react-redux';
import { NavigationTypes } from '../../provider/store/types';
import PopularTags from '../../components/PopularTags';
import Image from 'next/image';
import { BsDoorOpen } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia';

const Page = () => {
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col">
      {/* ----------------------- OPIS EVENTU------------------------------- */}
      <div className="min-h-96 h-fit flex flex-col mt-10 drop-shadow-lg ">
        <div
          className={`flex flex-col w-full lg:w-fullmx-auto ${
            darkMode ? ' bg-[#505050]' : 'bg-white'
          }`}
        >
          <p
            className={`${
              darkMode
                ? 'text-darkMode-text after:bg-[#f7fafd] bg-darkMode-light'
                : 'text-lightMode-text after:bg-[#4b4b4b] bg-lightMode-light'
            } font-bold text-2xl text-center w-full text-4xl font-bold p-4`}
          >
            Polish Hip-Hop Festival 2024
          </p>
          <div className=" p-4 flex flex-wrap items-center gap-4 justify-center p-4 ">
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
            <p className=" text-xs sm:text-sm  backdrop-blur-xl w-fit p-1 flex items-center gap-2">
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
            <p className=" text-xs sm:text-sm  backdrop-blur-xl w-fit p-1 flex items-center gap-2">
              <LiaMoneyBillWaveAltSolid
                className={`${
                  darkMode ? 'fill-darkMode-text' : 'fill-lightMode-text'
                } h-5 w-5`}
              />{' '}
              <span
                className={`${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                }`}
              >
                Koszt: 9999 PLN
              </span>
            </p>
          </div>
          <div
            className={`${
              darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
            } p-4 py-10 h-fit`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            excepturi ducimus reprehenderit, perferendis porro et necessitatibus
            nemo quae velit tempora vitae explicabo aliquid commodi sequi odit
            nihil unde harum a. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, excepturi ducimus reprehenderit,
            perferendis porro et necessitatibus nemo quae velit tempora vitae
            explicabo aliquid commodi sequi odit nihil unde harum a. nihil unde
            harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, excepturi ducimus reprehenderit, perferendis porro et
            necessitatibus nemo quae velit tempora vitae explicabo aliquid
            commodi sequi odit nihil unde harum a.
          </div>
          <div className="p-4 flex flex-wrap items-center gap-8 justify-center">
            {/* <p className="text-center w-24">STRONA</p> */}
            <Image
              src="/web.png"
              alt="website"
              width={100}
              height={100}
              className="h-8 w-8 hover:scale-105 active:scale-100 transition-all cursor-pointer"
              title="website"
            />
            {/* <p className="text-center w-24">INSTAGRAM</p> */}
            <Image
              src="/instagram.png"
              alt="instagram"
              width={100}
              height={100}
              className="h-8 w-8 hover:scale-105 active:scale-100 transition-all cursor-pointer"
              title="instagram"
            />
            {/* <p className="text-center w-24">FACEBOOK</p> */}
            <Image
              src="/facebook.png"
              alt="facebook"
              width={100}
              height={100}
              className="h-8 w-8 hover:scale-105 active:scale-100 transition-all cursor-pointer"
              title="facebook"
            />
            {/* <p className="text-center w-24">TWITTER</p> */}
            <Image
              src="/x.png"
              alt="x"
              width={100}
              height={100}
              className="h-9 w-9 hover:scale-105 active:scale-100 transition-all cursor-pointer"
              title="x"
            />
          </div>
          <div className="flex flex flex-wrap items-center gap-4 justify-center p-4">
            <p
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              } transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #plhhf
            </p>
            <p
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              } transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #hiphop
            </p>
            <p
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              } transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #koncert
            </p>
            <p
              className={`${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              } transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #muzyka
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------------------------- */}

      {/* ------------------- FILTROWANIE ------------------- */}

      <div className="flex">
        <div className="w-3/12 hidden lg:flex flex-col">
          <PopularTags darkMode={darkMode} />
          {/* -------------------------- */}

          <div
            className={`${
              darkMode ? 'bg-[#353535]' : 'bg-[#e4e4e4]'
            } w-full h-fit hidden lg:block  mt-5 flex-col`}
          >
            <div
              className={`${
                darkMode ? 'border-[#fff]' : 'border-[#4b4b4b]'
              } text-center border-b-2 h-12 flex items-center justify-center`}
            >
              <p
                className={`${darkMode ? 'text-white' : ''} text-xl font-bold`}
              >
                Filtrowanie
              </p>
            </div>
            <div className=" flex gap-3 flex-wrap p-4 overflow-hidden">
              <p>wyszukiwanie</p>
              <p>płeć</p>
              <p>miasto</p>
              <p>kraj</p>
              <p>cena</p>
              <p>data</p>
              <p>wiek</p>
              <p></p>
            </div>
          </div>

          {/* -------------------------- */}
        </div>

        <div className={`w-11/12 lg:w-9/12 mx-auto`}>
          <EventRoomCard />
          <EventRoomCard />
          <EventRoomCard />
          <EventRoomCard />
          <EventRoomCard />
          <EventRoomCard />
        </div>
      </div>
    </section>
  );
};

export default Page;
