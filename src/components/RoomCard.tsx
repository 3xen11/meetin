'use client';
import Image from 'next/image';
import HeartButton from './HeartButton';
import { NavigationTypes } from '../provider/store/types';
import { useSelector } from 'react-redux';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import { ImMan } from 'react-icons/im';
import { ImWoman } from 'react-icons/im';
import { BsHourglassSplit } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

type ToggleFavoriteAction = {
  type: 'TOGGLE_FAVORITE';
  payload: {
    id: string;
  };
};

type HeartState = {
  favoriteButtonChecked: boolean;
  dispatch: React.Dispatch<ToggleFavoriteAction>;
  toggleFavoriteButton: any;
};

type RoomsType = {
  id: string;
  creator: string;
  title: string;
  date: string;
  city: string;
  country: string;
  gender: string;
  spots: number;
  taken_spots: number;
  min_age: number;
  max_age: number;
  tags: string[];
  price: number;
  currency: string;
  favorite: boolean;
};

interface RoomCardProps extends HeartState, RoomsType {}

const RoomCard: React.FC<RoomCardProps> = ({
  toggleFavoriteButton,
  id,
  creator,
  title,
  date,
  city,
  country,
  gender,
  spots,
  taken_spots,
  min_age,
  max_age,
  tags,
  price,
  currency,
  favorite,
  dispatch,
}) => {
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <div
      className={`${
        darkMode ? 'bg-darkMode-light' : 'bg-lightMode-light'
      }  w-full lg:w-11/12 ml-auto my-5 h-fit sm:h-[18rem] xl:h-60 flex-col rounded-b-xl sm:rounded-none sm:rounded-r-xl flex flex-wrap relative shadow-md hover:scale-[1.01] transition-all`}
    >
      {/* -- HEART -- */}
      <div
        className={`${
          darkMode ? 'bg-darkMode-dark' : 'bg-white'
        } w-full sm:w-5/12 p-2 h-full relative`}
      >
        <HeartButton
          top={'top-4'}
          right={'right-5'}
          toggleFavoriteButton={() => toggleFavoriteButton({ id })}
          favorite={favorite}
          id={id}
          dispatch={dispatch}
        />
        <Image
          src="/mountains.jpg"
          alt="Mountains"
          width={600}
          height={500}
          className=" h-60 sm:w-full sm:h-full object-cover"
        />
      </div>

      {/* -- DESCRIPTION -- */}
      <div className="z-10 w-full sm:w-7/12 h-full flex flex-col justify-between md:w-7/12 p-2">
        <div className="grow flex flex-col">
          {' '}
          <h5
            className={`${
              darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
            } text-lg sm:text-2xl font-bold cursor-pointer  `}
          >
            {title}
          </h5>
          <div className="flex items-center">
            {' '}
            <p className="my-1 mr-2">{creator}</p>
            <p className="text-sm">5.0</p>
            <FaStar className="fill-[#E37BFF] ml-1 mb-1" />
          </div>
          <div className="flex flex-col my-auto">
            <p className={`text-xs sm:text-sm flex p-1 gap-2 flex`}>
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
                {date}
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
                {city}/{country}
              </span>
            </p>
            <div className={`text-xs sm:text-sm flex p-1 gap-2`}>
              {gender === 'male' ? (
                <ImMan
                  className={`${
                    darkMode ? 'fill-blue-500' : 'fill-blue-500'
                  } h-5 w-5`}
                />
              ) : gender === 'female' ? (
                <ImWoman
                  className={`${
                    darkMode ? 'fill-pink-500' : 'fill-pink-500'
                  } h-5 w-5`}
                />
              ) : (
                <div className="flex">
                  <ImMan
                    className={`${
                      darkMode ? 'fill-blue-500' : 'fill-blue-500'
                    } h-5 w-5 -ml-1`}
                  />
                  <ImWoman
                    className={`${
                      darkMode ? 'fill-pink-500' : 'fill-pink-500'
                    } h-5 w-5 -ml-2`}
                  />
                </div>
              )}

              <span
                className={`${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                }`}
              >
                Miejsca: {taken_spots}/{spots}
              </span>
            </div>
            {/* wiek */}
            <p className={`text-xs sm:text-sm flex p-1 gap-2`}>
              <BsHourglassSplit
                className={`${
                  darkMode ? 'fill-darkMode-text' : 'fill-lightMode-text'
                } h-5 w-5`}
              />{' '}
              <span
                className={`${
                  darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                }`}
              >
                Wiek: {min_age}-{max_age}
              </span>
            </p>
            {/* wiek */}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => {
                return (
                  <p
                    key={i}
                    className={` ${
                      darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
                    } cursor-pointer text-xs flex items-center text-center sm:text-sm text-darkMode-text`}
                  >
                    #{tag}
                  </p>
                );
              })}
            </div>
            <p
              className={` ${
                darkMode ? 'text-darkMode-text' : 'text-lightMode-text'
              }  flex items-center justify-center text-darkMode-text w-fit p-1 h-fit text-sm sm:text-lg min-w-fit`}
            >
              {price} {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
