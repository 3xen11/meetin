import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type darkModeType = {
  darkMode: boolean;
};

const Filtering: React.FC<darkModeType> = ({ darkMode }) => {
  const form = useForm();
  const { control, register, handleSubmit, setValue } = form;

  const todayDate = new Date().toISOString().substr(0, 10);

  return (
    <div
      className={`${
        darkMode ? 'bg-[#353535]' : 'bg-[#e4e4e4]'
      } w-full h-fit hidden lg:block  mt-5 flex-col mb-10`}
    >
      <div
        className={`${
          darkMode ? 'border-[#fff]' : 'border-[#4b4b4b]'
        } text-center border-b-2 h-12 flex items-center justify-center`}
      >
        <p className={`${darkMode ? 'text-white' : ''} text-xl font-bold`}>
          Filtrowanie
        </p>
      </div>
      <div className=" flex gap-3 flex-wrap p-4 overflow-hidden">
        <form className="flex flex-col w-full gap-2 ">
          {/* <label htmlFor="username">Username</label> */}

          <input
            type="text"
            id="search"
            {...register('search')}
            placeholder="Wyszukaj"
            className="px-2 w-full h-10"
          />

          <input
            type="text"
            id="country"
            //   to poniżej pozwala react-hook-form śledzić stany
            {...register('country')}
            placeholder="Podaj kraj"
            className="px-2 w-full h-10"
          />

          <input
            type="text"
            id="town"
            //   to poniżej pozwala react-hook-form śledzić stany
            {...register('town')}
            placeholder="Podaj miasto"
            className="px-2 w-full h-10"
          />

          <select
            id="gender"
            {...register('gender')}
            className="w-full h-10 px-2"
          >
            <option value="both">Obie</option>
            <option value="men">Mężczyzni</option>
            <option value="women">Kobiety</option>
          </select>

          <input
            className="w-full h-10 px-2"
            type="date"
            // value={todayDate}
            {...register('startDate')}
            min={todayDate}
          />
          <div className="flex gap-2 justify-between">
            <input
              type="number"
              className="w-1/2 h-10 px-2"
              id="minAge"
              {...register('minAge')}
              min="18"
              max="100"
            />
            <input
              type="number"
              className="w-1/2 h-10 px-2"
              id="maxAge"
              {...register('maxAge')}
              min="18"
              max="100"
            />
          </div>

          <Controller
            name="price"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <div className="">
                <input
                  className="w-full h-10"
                  type="range"
                  id="price"
                  {...field}
                  min="0"
                  max="5000"
                  step="10"
                  onChange={(e) => {
                    setValue('price', parseInt(e.target.value, 10), {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                />
                <p className=" -mt-4">
                  {' '}
                  {field.value === 0
                    ? 'Darmowe'
                    : field.value !== null
                    ? `Koszt do ${field.value} PLN`
                    : ''}
                </p>
              </div>
            )}
          />
          {/* <p>
            
          </p> */}

          <button className="bg-red-500 mt-6 h-10">Wyszukaj</button>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
};

export default Filtering;
