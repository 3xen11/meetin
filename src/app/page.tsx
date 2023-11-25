import React from 'react';
import EventCard from '../components/EventCard';
import RoomCard from '../components/RoomCard';

const page = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="h-12 gap-10 flex justify-center my-5">
        <button className="w-1/3 md:w-2/6 2xl:w-1/6 text-sm rounded-3xl bg-white hover:bg-yellow-500 border-solid border-2 border-yellow-500 hover:text-white md:text-lg font-lg transition-all text-slate-800">
          Oficjalne wydarzenia
        </button>
        <button className="w-1/3 md:w-2/6 2xl:w-1/6 text-sm rounded-3xl bg-white hover:bg-yellow-500 border-solid border-2 border-yellow-500 hover:text-white md:text-lg font-lg transition-all text-slate-800">
          Eksploruj
        </button>
      </div>
      <div className="flex">
        <div className="w-1/4 h-96 hidden lg:block bg-gray-300 mt-4">test</div>
        <div className="grow hidden">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div className="grow ">
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

export default page;
