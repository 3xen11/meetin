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
import Filtering from '@/src/components/Filtering';

const Page = () => {
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col">
      {/* ----------------------- OPIS EVENTU------------------------------- */}
      <div className="min-h-96 h-fit flex flex-col mt-10 drop-shadow-lg ">
        <div
          className={`flex flex-col w-full mx-auto bg-[url('/mountains.jpg')] bg-center ${
            darkMode ? ' bg-[#505050]' : 'bg-white'
          }`}
        >
          <div className=" flex flex-wrap items-center gap-4 justify-center p-4 ">
            <p
              className={`${
                darkMode
                  ? 'text-darkMode-text after:bg-white bg-darkMode-light'
                  : 'text-lightMode-text after:bg-[#4b4b4b] bg-white'
              } font-bold text-2xl text-center w-11/12 text-4xl font-bold p-4`}
            >
              Polish Hip-Hop Festival 2024
            </p>
            <p className=" text-xs sm:text-sm backdrop-blur-xl w-fit p-1 flex items-center gap-2">
              <FaRegCalendarAlt className={`fill-darkMode-text h-5 w-5`} />{' '}
              <span className={`text-white`}>04/07/2024</span>
            </p>
            <p className=" text-xs sm:text-sm backdrop-blur-xl w-fit p-1 flex items-center gap-2">
              <RiMapPinLine className={`fill-darkMode-text h-5 w-5`} />{' '}
              <span className={`text-white`}>Płock/Polska</span>
            </p>
            <p className=" text-xs sm:text-sm backdrop-blur-xl w-fit p-1 flex items-center gap-2">
              <BsDoorOpen className={`fill-darkMode-text h-5 w-5`} />{' '}
              <span className={`text-white`}>Ilość pokoi: 25</span>
            </p>
            <p className=" text-xs sm:text-sm backdrop-blur-xl w-fit p-1 flex items-center gap-2">
              <LiaMoneyBillWaveAltSolid
                className={`fill-darkMode-text h-5 w-5`}
              />{' '}
              <span className={`text-white`}>Koszt: 9999 PLN</span>
            </p>
          </div>
          <div
            className={`backdrop-blur-xl text-white w-11/12 px-2 py-10 h-fit text-center mx-auto`}
          >
            <p className="text-white">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              excepturi ducimus reprehenderit, perferendis porro et
              necessitatibus nemo quae velit tempora vitae explicabo aliquid
              commodi sequi odit nihil unde harum a. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor, excepturi ducimus
              reprehenderit, perferendis porro et necessitatibus nemo quae velit
              tempora vitae explicabo aliquid commodi sequi odit nihil unde
              harum a. nihil unde harum a. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor, excepturi ducimus
              reprehenderit, perferendis porro et necessitatibus nemo quae velit
              tempora vitae explicabo aliquid commodi sequi odit nihil unde
              harum a.
            </p>
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
              className={`backdrop-blur-xl text-white p-2 transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #plhhf
            </p>
            <p
              className={`backdrop-blur-xl text-white p-2 transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #hiphop
            </p>
            <p
              className={`backdrop-blur-xl text-white p-2 transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
            >
              #koncert
            </p>
            <p
              className={`backdrop-blur-xl text-white p-2 transition-all hover:scale-105 active:scale-100 hover:text-[#E37BFF] cursor-pointer font-bold`}
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

          <Filtering darkMode={darkMode} />

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
