'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { LoginTypes } from '@/src/provider/store/types';
import { changeSignin } from '@/src/provider/features/login/loginSlice';
import { NavigationTypes } from '../../provider/store/types';
const Page = () => {
  const dispatch = useDispatch();
  const form = useForm();
  const { control, register, handleSubmit, setValue } = form;

  const { isSignin } = useSelector((store: LoginTypes) => store.login);

  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-4/5 lg:w-full xl:w-4/5 bg-white h-[34rem] rounded-lg flex shadow-lg">
        {/* LOGOWANIE */}
        <div
          className={`${isSignin ? 'flex w-full' : 'hidden'}  lg:w-1/2 lg:flex`}
        >
          <div
            className={`${
              isSignin ? 'hidden' : 'lg:block'
            } h-full w-full hidden`}
          >
            <Image
              src="/sign_in.png"
              alt="sign in"
              width={1000}
              height={1000}
              className="w-full mt-16"
            />

            <div className="">
              <p className="text-center mb-2 mt-4 mx-auto w-fit">
                Masz już konto?
              </p>
              <p
                className="text-center mx-auto w-fit cursor-pointer"
                onClick={() => dispatch(changeSignin())}
              >
                ZALOGUJ SIĘ
              </p>
            </div>
          </div>
          <form
            className={`${
              isSignin ? 'flex' : 'hidden'
            } flex-col w-full gap-2 justify-center items-center h-full`}
          >
            <label htmlFor="mail" className="text-start w-2/3">
              E-Mail:
            </label>
            <input
              type="text"
              id="mail"
              //   {...register('search')}

              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <label htmlFor="password" className="text-start w-2/3 mt-4">
              Hasło:
            </label>
            <input
              type="text"
              id="password"
              //   {...register('search')}

              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <p className="mt-4">Przypomnij hasło</p>
            <div className="lg:hidden">
              <p className="text-center mb-2 mt-4 mx-auto w-fit">
                Nie masz jeszcze konta?
              </p>
              <p
                className="text-center mx-auto w-fit cursor-pointer"
                onClick={() => dispatch(changeSignin())}
              >
                ZAREJESTRUJ SIĘ
              </p>
            </div>
            <button className="bg-red-500 mt-6 h-10 w-3/5">Zaloguj</button>
          </form>
        </div>
        {/* REJESTRACJA */}
        <div
          className={`${isSignin ? 'hidden' : 'flex w-full'}  lg:w-1/2 lg:flex`}
        >
          <div
            className={`${
              isSignin ? 'lg:block' : 'hidden'
            } hidden h-full w-full`}
          >
            <Image
              src="/sign_up.png"
              alt="sign up"
              width={1000}
              height={1000}
              className="w-[87%] mt-16 mx-auto"
            />

            <div className="">
              <p className="text-center mb-2 mt-4 mx-auto w-fit">
                Nie masz jeszcze konta?
              </p>
              <p
                className="text-center mx-auto w-fit cursor-pointer"
                onClick={() => dispatch(changeSignin())}
              >
                ZAREJESTRUJ SIĘ
              </p>
            </div>
          </div>
          <form
            className={`${
              isSignin ? 'hidden' : 'flex'
            } flex-col w-full gap-2 justify-center items-center h-full`}
          >
            <label htmlFor="reg-mail" className="text-start w-2/3">
              E-Mail:
            </label>
            <input
              type="text"
              id="reg-mail"
              //   {...register('search')}

              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <label htmlFor="reg-password" className="text-start w-2/3">
              Hasło:
            </label>
            <input
              type="text"
              id="reg-password"
              //   {...register('search')}
              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <label htmlFor="reg-repassword" className="text-start w-2/3">
              Powtórz hasło:
            </label>
            <input
              type="text"
              id="reg-repassword"
              //   {...register('search')}
              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <div className="lg:hidden">
              <p className="text-center mb-2 mt-4 mx-auto w-fit">
                Masz już konto?
              </p>
              <p
                className="text-center mx-auto w-fit cursor-pointer"
                onClick={() => dispatch(changeSignin())}
              >
                ZALOGUJ SIĘ
              </p>
            </div>

            <button className="bg-red-500 mt-6 h-10 w-3/5">Zarejestruj</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
