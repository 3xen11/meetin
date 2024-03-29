'use client';
// DUMMY DATA
// import roomsData from '../../data/roomsData';
// REDUCERS
import {
  switchEventRoomsDisplay,
  toggleFavoriteButton,
} from '../provider/features/events/eventsSlice';
// TYPES
import { NavigationTypes, EventsTypes } from '../provider/store/types';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
// COMPONENTS
import PopularTags from '../components/PopularTags';
import Filtering from '../components/Filtering';
import EventCard from '../components/EventCard';
import RoomCard from '../components/RoomCard';

const Page = () => {
  const dispatch = useDispatch();

  const { eventsCardsDisplay, favoriteButtonChecked, roomsData } = useSelector(
    (store: EventsTypes) => store.events
  );

  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex flex-col ">
      {/* ROOMS / EVENTS SWITCH */}
      <div className="w-fit mx-auto mt-5 ">
        <button
          onClick={() => dispatch(switchEventRoomsDisplay())}
          className={`${
            darkMode
              ? 'text-[#f7fafd] after:bg-[#f7fafd]'
              : 'text-[#4b4b4b] after:bg-[#4b4b4b] '
          } font-bold text-2xl`}
        >
          {eventsCardsDisplay ? 'Eksploruj' : 'Oficjalne wydarzenia'}
        </button>
      </div>

      {/* MAIN SITE CONTENT */}
      <div className="flex">
        {/* ASIDE TAGS AND FILTERS */}
        <div className="w-3/12 hidden lg:flex flex-col">
          <PopularTags darkMode={darkMode} />
          <Filtering darkMode={darkMode} />
        </div>
        {/* ROOMS */}
        <div
          className={`w-11/12 lg:w-9/12 ${
            eventsCardsDisplay ? 'hidden' : ''
          } mx-auto`}
        >
          {Array.isArray(roomsData) ? (
            roomsData.map((roomData) => {
              const { id } = roomData;

              return (
                <RoomCard
                  key={id}
                  dispatch={dispatch}
                  toggleFavoriteButton={toggleFavoriteButton}
                  {...roomData}
                />
              );
            })
          ) : (
            <p>Error: roomsData is not an array</p>
          )}
        </div>
        {/* OFFICIAL EVENTS */}
        <div
          className={`w-full lg:w-9/12 ${
            eventsCardsDisplay ? '' : 'hidden'
          } mx-auto`}
        >
          <EventCard
            favoriteButtonChecked={favoriteButtonChecked}
            dispatch={dispatch}
            toggleFavoriteButton={toggleFavoriteButton}
          />
          <EventCard
            favoriteButtonChecked={favoriteButtonChecked}
            dispatch={dispatch}
            toggleFavoriteButton={toggleFavoriteButton}
          />
          <EventCard
            favoriteButtonChecked={favoriteButtonChecked}
            dispatch={dispatch}
            toggleFavoriteButton={toggleFavoriteButton}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
