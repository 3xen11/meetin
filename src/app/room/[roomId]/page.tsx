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
import { MdMailOutline } from 'react-icons/md';
import { FaRegStickyNote } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { PiUserSwitch } from 'react-icons/pi';

const page = ({ params }: { params: { roomId: string } }) => {
  // const { darkMode } = useSelector(
  //   (store: NavigationTypes) => store.navigation
  // );
  return (
    <div className="w-full flex flex-col lg:flex-row mt-10 flex-wrap">
      {/* INFORMACJE */}
      <div className="flex w-full flex-col lg:flex-row gap-4 ">
        <div className="w-full lg:grow h-full flex flex-col mb-5 bg-white shadow-md rounded-lg  overflow-hidden fade_bg">
          <div className="w-full flex sm:flex-row justify-between mt-10 flex-col">
            <div className="text-end mb-2 w-fit sm:hidden block self-end mr-4 sm:mr-0">
              ULUBIONE
            </div>
            <div className=" h-32 w-32 sm:w-24 sm:h-24 self-center mb-2 sm:mb-0 sm:ml-6 sm:mr-2">
              <Image
                src="/mountains.jpg"
                alt="Mountains"
                width={600}
                height={500}
                className="w-32 h-32 sm:w-24 sm:h-24 mx-auto rounded-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row grow justify-center sm:justify-between">
              <div className="flex-col w-full sm:w-fit items-center sm:items-start  flex h-fit sm:pr-10">
                <div className="p-1 grow flex items-center">
                  <p className="p-1 text-xl font-bold cursor-pointer">Dawid</p>
                  <p className="p-1 flex items-center">
                    <span>5.0</span>{' '}
                    <FaStar className="fill-[#E37BFF] ml-2 mb-1" />
                  </p>
                </div>
                <div className="p-1 ml-1 flex items-center grow">
                  <FaUserFriends
                    className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all hover:scale-110"
                    title="Dodaj do znajomych"
                  />
                  <MdMailOutline
                    className="text-xl cursor-pointer ml-4 hover:fill-[#E37BFF] transition-all scale-110 hover:scale-125"
                    title="Napisz wiadomość"
                  />

                  <FaRegStickyNote
                    className="text-xl cursor-pointer ml-4 hover:fill-[#E37BFF] transition-all scale-95 hover:scale-110"
                    title="NDodaj notatkę o użytkowniku"
                  />
                </div>
              </div>
              <div className="p-1 h-full font-bold justify-between items-end mr-2 lg:mr-10 flex flex-col items-center sm:items-end">
                <div className="text-end mb-2 w-fit hidden sm:block cursor-pointer ">
                  ULUBIONE
                </div>
                <div className="lg:hidden text-end mt-5 sm:mt-0 w-fit cursor-pointer ">
                  Pokaż uczestników
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col gap-2 mt-5 p-4">
            <h1 className="ml-2 p-2 text-2xl font-bold w-fit border-b-4 border-[#E37BFF]">
              Polish Hip-Hop Festival 2024
            </h1>
            <p className=" text-sm flex grow p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
              sollicitudin lacinia. Phasellus placerat velit pellentesque
              volutpat convallis. Curabitur turpis lectus, posuere non elementum
              sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque a condimentum justo. Ut efficitur ante velit, eget
              venenatis ipsum sollicitudin lacinia. Phasellus placerat velit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
              sollicitudin lacinia. Phasellus placerat velit pellentesque
              volutpat convallis. Curabitur turpis lectus, posuere non elementum
              sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque a condimentum justo. Ut efficitur ante velit, eget
              venenatis ipsum sollicitudin lacinia. Phasellus placerat velit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              condimentum justo. Ut efficitur ante velit, eget venenatis ipsum
              sollicitudin lacinia. Phasellus placerat velit pellentesque
              volutpat convallis. Curabitur turpis lectus, posuere non elementum
              s
            </p>
            <div className="flex flex-wrap justify-center lg:justify-around gap-2 py-4">
              <p className="flex items-center gap-1 justify-center mb-1 border-b-4 border-white bg-[#00000040] font-bold text-sm p-2 backdrop-blur-xl text-white">
                <FaRegCalendarAlt className="scale-150 mr-2 fill-white" />{' '}
                04/07/2024
              </p>
              <p className="flex items-center gap-1 justify-center mb-1 border-b-4 border-white bg-[#00000040] font-bold text-sm p-2 backdrop-blur-xl text-white">
                <RiMapPinLine className="scale-150 mr-2 fill-white" />
                <span className="text-white">Płock</span>/
                <span className="text-white">Polska</span>
              </p>
              <p className="flex items-center gap-1 justify-center mb-1 border-b-4 border-white bg-[#00000040] font-bold text-sm p-2 backdrop-blur-xl text-white">
                miejsca: <span className="text-white">2</span>/
                <span className="text-white">10</span>
              </p>
              <p className="flex items-center gap-1 justify-center mb-1 border-b-4 border-white bg-[#00000040] font-bold text-sm p-2 backdrop-blur-xl text-white">
                <BsHourglassSplit className="scale-150 mr-2 fill-white" />{' '}
                <span className="text-white">20</span>-
                <span className="text-white">30</span> LAT
              </p>
              <p className="flex items-center gap-1 justify-center mb-1 border-b-4 border-white bg-[#00000040] font-bold text-sm p-2 backdrop-blur-xl text-white">
                <LiaMoneyBillWaveAltSolid className="scale-150 mr-2 fill-white" />{' '}
                <span className="text-white">4321</span>
                <span className="text-white">PLN</span>
              </p>
            </div>
            <div className="flex flex-wrap w-full gap-2 px-2 py-1 justify-center items-center">
              <p className="py-1 px-2 h-fit cursor-pointer backdrop-blur-xl bg-[#00000040] text-white">
                #loremipsum
              </p>
              <p className="py-1 px-2 h-fit cursor-pointer backdrop-blur-xl bg-[#00000040] text-white">
                #loremipsum
              </p>
              <p className="py-1 px-2 h-fit cursor-pointer backdrop-blur-xl bg-[#00000040] text-white">
                #loremipsum
              </p>
              <p className="py-1 px-2 h-fit cursor-pointer backdrop-blur-xl bg-[#00000040] text-white">
                #loremipsum
              </p>
            </div>
          </div>
        </div>

        {/* UCZESTNICY */}
        <div className="h-[43rem] bg-white shadow-md lg:w-[32rem] rounded-lg hidden lg:flex flex-col ">
          <div className=" text-center font-bold flex justify-center items-end h-20 relative">
            <p className="border-b-2 border-gray-100 h-fit w-11/12 w-[98%] text-center pb-4">
              UCZESTNICY
            </p>
            <p className="absolute top-8 right-10">
              <PiUserSwitch className="scale-[1.8] hover:scale-[2] hover:fill-[#E37BFF] transition-all cursor-pointer" />
            </p>
          </div>
          <div className=" px-2 h-full ">
            <div className=" h-[35rem] overflow-y-scroll no-scrollbar">
              {/* UCZESTNIK */}
              <div className="mb-2 mt-2 px-2 py-4 flex hover:bg-gray-50 hover:shadow-md bg-white  transition-all rounded-lg">
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
                    <p className="font-bold cursor-pointer text-sm">
                      Maksymilian
                    </p>
                    <p className="text-sm">5.0</p>
                    <FaStar className="fill-[#E37BFF]" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserFriends
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all  hover:scale-110"
                      title="Dodaj do znajomych"
                    />
                    <MdMailOutline
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-110 hover:scale-125"
                      title="Napisz wiadomość"
                    />
                    <FaRegStickyNote
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-95 hover:scale-110"
                      title="Dodaj notatkę o użytkowniku"
                    />
                  </div>
                </div>
                <div className="text-end  items-end justify-end flex flex-col grow">
                  <IoPersonRemoveSharp
                    className="scale-125 hover:scale-150 hover:fill-red-500 transition-all cursor-pointer mb-2 mr-2"
                    title="Usuń uczestnika"
                  />
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 mt-2 px-2 py-4 flex hover:bg-gray-50 hover:shadow-md bg-white  transition-all rounded-lg">
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
                    <p className="font-bold cursor-pointer text-sm">
                      Maksymilian
                    </p>
                    <p className="text-sm">5.0</p>
                    <FaStar className="fill-[#E37BFF]" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserFriends
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all  hover:scale-110"
                      title="Dodaj do znajomych"
                    />
                    <MdMailOutline
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-110 hover:scale-125"
                      title="Napisz wiadomość"
                    />
                    <FaRegStickyNote
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-95 hover:scale-110"
                      title="Dodaj notatkę o użytkowniku"
                    />
                  </div>
                </div>
                <div className="text-end  items-end justify-end flex flex-col grow">
                  <IoPersonRemoveSharp
                    className="scale-125 hover:scale-150 hover:fill-red-500 transition-all cursor-pointer mb-2 mr-2"
                    title="Usuń uczestnika"
                  />
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
              {/* UCZESTNIK */}
              <div className="mb-2 mt-2 px-2 py-4 flex hover:bg-gray-50 hover:shadow-md bg-white  transition-all rounded-lg">
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
                    <p className="font-bold cursor-pointer text-sm">
                      Maksymilian
                    </p>
                    <p className="text-sm">5.0</p>
                    <FaStar className="fill-[#E37BFF]" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserFriends
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all  hover:scale-110"
                      title="Dodaj do znajomych"
                    />
                    <MdMailOutline
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-110 hover:scale-125"
                      title="Napisz wiadomość"
                    />
                    <FaRegStickyNote
                      className="text-xl cursor-pointer hover:fill-[#E37BFF] transition-all scale-95 hover:scale-110"
                      title="Dodaj notatkę o użytkowniku"
                    />
                  </div>
                </div>
                <div className="text-end  items-end justify-end flex flex-col grow">
                  <IoPersonRemoveSharp
                    className="scale-125 hover:scale-150 hover:fill-red-500 transition-all cursor-pointer mb-2 mr-2"
                    title="Usuń uczestnika"
                  />
                </div>
              </div>
              {/* KONIEC UCZESTNIKA */}
            </div>
            <div className="border-t-2 border-gray-100">
              <p className="hover:text-green-500 transition-all text-center mt-2 mx-auto w-fit cursor-pointer p-2 font-bold ">
                Poproś o dodanie do pokoju
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* START MAPA */}
      <div className="bg-white shadow-lg my-4 h-96 w-1/3 rounded-lg">MAPA</div>
      {/* KONIEC MAPA */}
      <div className="flex flex-wrap justify-center w-full mt-4 gap-4 mb-5">
        {/* CZAT */}
        <div className="min-h-[24rem] max-h-[50rem] grow p-3 bg-white shadow-lg rounded-lg order-2 lg:order-1  flex justify-center items-center flex-col">
          <div className="w-full h-full flex-col rounded-lg no-scrollbar overflow-y-scroll flex justify-start  p-2 bg-slate-200">
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
            {/* WIADOMOŚĆ START */}
            <div className="w-full h-fit mb-2 flex bg-gray-50 rounded-lg shadow-lg p-2">
              <div className="h-[6rem] min-w-[5rem] mt-1 pl-3">
                {' '}
                <Image
                  src="/mountains.jpg"
                  alt="Mountains"
                  width={600}
                  height={500}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="grow h-full flex flex-col ml-3">
                <div className="flex py-1 gap-3 text-sm items-center">
                  <p className="cursor-pointer text-base text-[#E37BFF] font-bold">
                    Dawid
                  </p>
                  <p>31.01.2024</p> -<p>15:43</p>
                </div>
                <div className="grow flex flex-col text-sm">
                  <p className="py-2">
                    {' '}
                    sum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                    ipsum sollicitudin lacinia. Phasellus placerat velit Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
                    condimentum justo. Ut efficitur ante velit, eget venenatis
                  </p>
                  <div className="flex py-1 gap-3 text-sm">
                    <p className="cursor-pointer">odpowiedz</p>
                    <p className="cursor-pointer">zgłoś</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WIADOMOŚĆ KONIEC */}
          </div>
          {/* WPISYWANIE WIADOMOŚCI */}
          <div className=" h-96 bg-white rounded-lg w-1/3 lg:order-2 order-1 w-11/12 lg:w-[32rem] flex px-1 flex-col justify-start items-center mt-10">
            <div className="flex justify-center gap-2 text-sm items-center pb-2">
              <p>Zalogowano jako:</p>
              <p className="font-bold text-base text-[#E37BFF]">Dawid</p>
            </div>
            <textarea className="grow w-11/12 ml-2 resize-none text-sm p-2 rounded-lg border-2 border-[#a8a8a8]" />
            <button className="p-2 w-fit text-[#4b4b4b] text-base font-bold">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
