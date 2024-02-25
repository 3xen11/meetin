'use client';

import React from 'react';
import Link from 'next/link';
// ICONS
import { IoSearch } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { VscAccount } from 'react-icons/vsc';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
// TYPES
import { NavigationTypes, LoginTypes } from '../provider/store/types';
// REDUCRES
import {
  switchDarkMode,
  showSearching,
  showMobileMenu,
} from '../provider/features/navigation/navigationSlice';
import { setLogout } from '../provider/features/login/loginSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const { darkMode, mobileMenu } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  const { isLogged } = useSelector((store: LoginTypes) => store.login);

  return (
    <nav
      className={`${
        darkMode ? 'bg-[#2c2c2c] border-[#E37BFF]' : 'bg-white'
      } w-full h-16 border-b-2 z-50`}
    >
      <div className="w-11/12 max-w-[1500px] mx-auto h-full flex items-center justify-between ">
        <div
          className={`${
            darkMode ? 'text-white' : ''
          } font-bold text-2xl cursor-pointer`}
        >
          <Link href="/">
            MEET<span className="text-[#E37BFF] ">IN</span>
          </Link>
        </div>
        {/* ------------------------------------------------- */}

        <div className="flex justify-between items-center gap-5">
          {/* ------------------ DARK MODE ------------------ */}
          <div className="w-fit -mr-2 hover:scale-110 active:scale-100 transition-all">
            <label
              className=" h-12 w-12 rounded-full grid place-items-center cursor-pointer  leading-4"
              htmlFor="switch"
            >
              <input
                id="switch"
                className="hidden"
                type="checkbox"
                onClick={() => dispatch(switchDarkMode())}
              />
              <div className="icon icon--moon ">
                <svg
                  height="32"
                  width="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-[#E37BFF]"
                >
                  <path
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div className="icon icon--sun ">
                <svg
                  height="32"
                  width="32"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-[#E37BFF]"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
              </div>
            </label>
          </div>
          {/* ------------- WYSZUKIWANIE --------------------- */}
          <IoSearch
            className={`lg:hidden ${
              darkMode ? 'fill-white' : ''
            } w-7 h-7 hover:fill-[#E37BFF] cursor-pointer hover:scale-110 transition-all active:scale-100 font-bold`}
            onClick={() => dispatch(showSearching())}
          />
          {/* ------------- MOBILE MENU ----------------- */}
          <div id="menuToggle" className="sm:hidden">
            <input id="checkbox" type="checkbox" />
            <label
              className="toggle"
              htmlFor="checkbox"
              onClick={() => {
                dispatch(showMobileMenu());
              }}
            >
              <div
                className={`bar bar--top ${
                  darkMode ? 'bg-white' : 'bg-[#4b4b4b]'
                } `}
              ></div>
              <div
                className={`bar bar--middle ${
                  darkMode ? 'bg-white' : 'bg-[#4b4b4b]'
                } `}
              ></div>
              <div
                className={`bar bar--bottom ${
                  darkMode ? 'bg-white' : 'bg-[#4b4b4b]'
                } `}
              ></div>
            </label>
          </div>
          {/* ------------------------------------------------- */}

          <div className="hidden sm:flex gap-5 items-center">
            <div
              className={`group  flex gap-2 cursor-pointer hover:scale-105 transition-all active:scale-100 items-center`}
            >
              <GoMail
                className={` w-7 h-7 text-[#E37BFF] ${
                  darkMode ? 'fill-white' : ''
                } group-hover:fill-[#E37BFF] `}
              />
              <p
                className={`group-hover:text-[#E37BFF] ${
                  darkMode ? 'text-white' : ''
                }`}
              >
                Wiadomości
              </p>
            </div>
            <div
              className={`relative group flex gap-2 cursor-pointer hover:scale-105 transition-all active:scale-100 items-center`}
            >
              <VscAccount
                className={` w-7 h-7 text-[#E37BFF] ${
                  darkMode ? 'fill-white' : ''
                } group-hover:fill-[#E37BFF] `}
              />
              <p
                className={`group-hover:text-[#E37BFF]  ${
                  darkMode ? 'text-white' : ''
                }`}
              >
                Moje konto
              </p>
              <div className="absolute w-60 -ml-4 top-0 z-50">
                {isLogged ? (
                  <ul className="shadow-lg mt-12 text-center hidden group-hover:block leading-10">
                    <li className="hover:text-[#E37BFF] bg-white w-full h-10 hover:bg-slate-100">
                      <Link href="/account">Monika - kliknij mnie :|</Link>
                    </li>
                    <li className="hover:text-[#E37BFF] bg-white w-full h-10 hover:bg-slate-100">
                      Moje pokoje
                    </li>
                    <li className="hover:text-[#E37BFF] bg-white w-full h-10 hover:bg-slate-100">
                      Ustawienia
                    </li>
                    <li
                      className="hover:text-[#E37BFF] bg-white w-full h-10 hover:bg-slate-100"
                      onClick={() => dispatch(setLogout())}
                    >
                      Wyloguj się
                    </li>
                  </ul>
                ) : (
                  <ul className="shadow-lg mt-12 text-center hidden group-hover:block leading-10">
                    <li className="hover:text-[#E37BFF] bg-white w-full h-10 hover:bg-slate-100">
                      <Link href="/login">Zaloguj się</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${mobileMenu ? 'flex' : 'hidden'} ${
          darkMode ? 'bg-[#4b4b4b]' : 'bg-[#e2e2e2]'
        } z-40 h-screen w-screen fixed top-16 left-0 justify-center  sm:hidden overflow-scroll `}
      >
        <ul className="w-full flex flex-col gap-5 h-fit justify-center items-center overflow-scroll">
          <li
            className={`${
              darkMode ? 'text-white' : ''
            } text-3xl w-3/4 text-center py-2 mt-20`}
          >
            moje konto
          </li>
          <li
            className={`${
              darkMode ? 'text-white' : ''
            } text-3xl w-3/4 text-center py-2`}
          >
            moje pokoje
          </li>
          <li
            className={`${
              darkMode ? 'text-white' : ''
            } text-3xl w-3/4 text-center py-2`}
          >
            wiadomości
          </li>
          <li
            className={`${
              darkMode ? 'text-white' : ''
            } text-3xl w-3/4 text-center py-2`}
          >
            opcje
          </li>
          <li
            className={`${
              darkMode ? 'text-white' : ''
            } text-3xl w-3/4 text-center py-2`}
          >
            wyloguj
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
