'use client';

import React from 'react';
import EventRoomCard from '../../components/EventRoomCard';
import { useSelector } from 'react-redux';
import { NavigationTypes } from '../../provider/store/types';
import PopularTags from '../../components/PopularTags';

const Page = () => {
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col">
      {/* ----------------------- OPIS EVENTU------------------------------- */}
      <div className="bg-red-500">test</div>
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
