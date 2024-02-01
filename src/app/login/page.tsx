import React from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  //   const form = useForm();
  //   const { control, register, handleSubmit, setValue } = form;
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-4/5 bg-white h-[34rem] rounded-lg flex">
        {/* LOGOWANIE */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col w-full gap-2 justify-center items-center h-full">
            <label htmlFor="mail" className="text-start w-2/3">
              E-Mail:
            </label>
            <input
              type="text"
              id="mail"
              //   {...register('search')}

              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <label htmlFor="password" className="text-start w-2/3">
              Hasło:
            </label>
            <input
              type="text"
              id="password"
              //   {...register('search')}

              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />
            <p>Przypomnij hasło</p>

            <button className="bg-red-500 mt-6 h-10 w-3/5">Wyszukaj</button>
            <div className="">
              <p className="flex">Nie masz jeszcze konta?</p>
              <p className="text-center">ZAREJESTRUJ SIĘ</p>
            </div>
          </form>
        </div>
        {/* REJESTRACJA */}
        <div className="w-1/2 hidden md:block ">
          <form className="flex flex-col w-full gap-2 justify-center items-center h-full ">
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
              Hasło:
            </label>
            <input
              type="text"
              id="reg-repassword"
              //   {...register('search')}
              className="px-2 w-3/5 h-10 border-2 border-gray-500"
            />

            <button className="bg-red-500 mt-6 h-10 w-3/5">Wyszukaj</button>
            <div className="">
              <p className="flex">Masz już konto?</p>
              <p className="text-center">ZALOGUJ SIĘ</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
