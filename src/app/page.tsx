'use client';

import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import RoomCard from '../components/RoomCard';
import { useSelector } from 'react-redux';
import { NavigationTypes } from '../provider/store/types';

const Page = () => {
  const [view, setView] = useState(true);
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col">
      {/* ------------------------------------------------- */}

      <div className="w-fit mx-auto mt-5">
        <button
          onClick={() => setView(!view)}
          className={`${
            darkMode
              ? 'text-[#f7fafd] after:bg-[#f7fafd]'
              : 'text-[#4b4b4b] after:bg-[#4b4b4b] '
          } font-bold text-2xl `}
        >
          {view ? 'Eksploruj' : 'Oficjalne wydarzenia'}
        </button>
      </div>

      {/* ----------------------------------- */}

      <div className="flex">
        <div
          className={`${
            darkMode ? 'bg-[#353535]' : 'bg-[#e4e4e4]'
          } w-3/12 h-fit hidden lg:block  mt-5 flex-col`}
        >
          <div
            className={`${
              darkMode ? 'border-[#fff]' : 'border-[#4b4b4b]'
            } text-center border-b-2 h-12 flex items-center justify-center`}
          >
            <p className={`${darkMode ? 'text-white' : ''} text-xl font-bold`}>
              Popularne tagi
            </p>
          </div>
          <div className=" flex gap-3 flex-wrap p-4 overflow-hidden">
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #góry
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #morze
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #koncert
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #turcja
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #malta
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #włochy
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #sport
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #piłka_nożna
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #standup
            </p>
            <p
              className={` ${
                darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
              }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
            >
              #klub
            </p>
          </div>
        </div>
        <div className={`w-11/12 lg:w-9/12 ${view ? 'hidden' : ''} mx-auto`}>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div className={`w-full lg:w-9/12 ${view ? '' : 'hidden'} mx-auto`}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
};

export default Page;
