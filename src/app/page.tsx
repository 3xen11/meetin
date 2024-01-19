'use client';

import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import RoomCard from '../components/RoomCard';
import { useSelector } from 'react-redux';
import { NavigationTypes } from '../provider/store/types';
import PopularTags from '../components/PopularTags';
import Filtering from '../components/Filtering';

const Page = () => {
  const [view, setView] = useState(true);
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col ">
      {/* ------------------------------------------------- */}

      <div className="w-fit mx-auto mt-5 ">
        <button
          onClick={() => setView(!view)}
          className={`${
            darkMode
              ? 'text-[#f7fafd] after:bg-[#f7fafd]'
              : 'text-[#4b4b4b] after:bg-[#4b4b4b] '
          } font-bold text-2xl`}
        >
          {view ? 'Eksploruj' : 'Oficjalne wydarzenia'}
        </button>
      </div>

      {/* ----------------------------------- */}

      <div className="flex">
        <div className="w-3/12 hidden lg:flex flex-col">
          <PopularTags darkMode={darkMode} />
          {/* -------------------------- */}

          {/* filtrowanie */}
          <Filtering darkMode={darkMode} />

          {/* -------------------------- */}
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
