import React from 'react';
import { NavigationTypes } from '../../../provider/store/types';
import { useSelector } from 'react-redux';
import Image from 'next/image';

// ICONS
import { BsDoorOpen } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia';
import { ImMan } from 'react-icons/im';
import { ImWoman } from 'react-icons/im';
import { BsHourglassSplit } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';

const page = ({ params }: { params: { roomId: string } }) => {
  // const { darkMode } = useSelector(
  //   (store: NavigationTypes) => store.navigation
  // );
  return (
    <div className="w-full flex gap-4 flex-col lg:flex-row mt-10">
      {/* INFORMACJE */}
      <div className="w-full lg:w-2/3 h-fit flex flex-col mb-5 bg-white shadow-md rounded-lg">
        <div className="w-full flex justify-between mt-10">
          <div className=" h-32 w-32">
            <Image
              src="/mountains.jpg"
              alt="Mountains"
              width={600}
              height={500}
              className="w-24 h-24 mx-auto mt-1 rounded-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row grow justify-between">
            <div className="lg:flex-col  flex  w-fit h-fit pr-10 bg-white">
              <div className="p-1 grow flex items-center">
                <p className="p-1 text-xl font-bold cursor-pointer">Dawid</p>
                <p className="p-1 flex items-center">
                  <span>5.0</span> <FaStar className="fill-[#E37BFF] ml-2" />
                </p>
              </div>
              <div className="p-1 ml-1 flex items-center grow">
                <FaUserFriends
                  className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all"
                  title="Dodaj do znajomych"
                />
                <GoMail
                  className="text-xl cursor-pointer ml-4 hover:fill-[#E37BFF] transition-all"
                  title="Napisz wiadomość"
                />
              </div>
              <p
                className="p-1 ml-1 cursor-pointer"
                title="Dodaj notatkę o użytkowniku"
              >
                Notatka
              </p>
            </div>
            <div className="p-1 h-fit font-bold cursor-pointer mr-10 mt-2 hover:text-green-500 transition-all">
              Poproś o dodanie do pokoju
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2 mt-5 p-4">
          <h1 className="ml-2 p-2 text-2xl font-bold w-fit border-b-4 border-[#E37BFF]">
            Polish Hip-Hop Festival 2024
          </h1>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
            sollicitudin lacinia. Phasellus placerat velit pellentesque volutpat
            convallis. Curabitur turpis lectus, posuere non elementum sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
            sollicitudin lacinia. Phasellus placerat velit pellentesque volutpat
            convallis. Curabitur turpis lectus, posuere non elementum sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
            sollicitudin lacinia. Phasellus placerat velit pellentesque volutpat
            convallis. Curabitur turpis lectus, posuere non elementum sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
            sollicitudin lacinia. Phasellus placerat velit pellentesque volutpat
            convallis. Curabitur turpis lectus, posuere non elementum sit amet,
          </p>
          <div className="flex flex-wrap justify-center lg:justify-around gap-2 py-4">
            <p className="flex items-center gap-1 justify-center mb-1 border-b-2 border-[#E37BFF] font-bold text-sm p-2">
              <FaRegCalendarAlt /> 04/07/2024
            </p>
            <p className="flex items-center gap-1 justify-center mb-1 border-b-2 border-[#E37BFF] font-bold text-sm p-2">
              <RiMapPinLine />
              <span>Płock</span>/<span>Polska</span>
            </p>
            <p className="flex items-center gap-1 justify-center mb-1 border-b-2 border-[#E37BFF] font-bold text-sm p-2">
              miejsca: <span>2</span>/<span>10</span>
            </p>
            <p className="flex items-center gap-1 justify-center mb-1 border-b-2 border-[#E37BFF] font-bold text-sm p-2">
              <BsHourglassSplit /> <span>20</span>-<span>30</span>
            </p>
            <p className="flex items-center gap-1 justify-center mb-1 border-b-2 border-[#E37BFF] font-bold text-sm p-2">
              <LiaMoneyBillWaveAltSolid /> <span>4321</span>
              <span>PLN</span>
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2 px-2 py-1 justify-center items-center">
            <p className="py-1 px-2 h-fit cursor-pointer">#loremipsum</p>
            <p className="py-1 px-2 h-fit cursor-pointer">#loremipsum</p>
            <p className="py-1 px-2 h-fit cursor-pointer">#loremipsum</p>
            <p className="py-1 px-2 h-fit cursor-pointer">#loremipsum</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-11/12 lg:w-1/3  mx-auto p2">
        {/* MAPA */}
        <div className="h-96 bg-blue-500 rounded-lg">mapa</div>
        {/* UCZESTNICY */}
        <div className="h-[40rem] bg-white shadow-md my-5 rounded-lg">
          <div className="p-4 text-center font-bold">
            <p className="border-b-2 pb-2 border-[#E37BFF]">UCZESTNICY</p>
          </div>
          <div className=" px-2 h-full ">
            <div className=" h-[35rem] overflow-y-scroll no-scrollbar">
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all"
                      title="Dodaj do znajomych"
                    />
                    <GoMail
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all"
                      title="Napisz wiadomość"
                    />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p
                    className="cursor-pointer w-fit"
                    title="Dodaj notatkę o użytkowniku"
                  >
                    Notatka
                  </p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 p-4 flex hover:bg-gray-50 hover:shadow-md bg-white transition-all transition-all rounded-lg">
                <div className="h-14 w-14">
                  {' '}
                  <Image
                    src="/mountains.jpg"
                    alt="Mountains"
                    width={600}
                    height={500}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="px-2 flex flex-col justify-between">
                  <div className="flex gap-1">
                    <p className="font-bold cursor-pointer">Dawid</p>
                    <p>5.0</p>
                    <FaStar className="fill-[#E37BFF] mt-[2px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                    <GoMail className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all" />
                  </div>
                </div>
                <div className="text-sm text-end justify-between items-end flex flex-col grow">
                  <p className="cursor-pointer w-fit f">Notatka</p>
                  <p className="cursor-pointer w-fit hover:text-red-500">
                    Usuń uczestnika
                  </p>
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
