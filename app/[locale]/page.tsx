"use client";
import { decrement, increment } from '@/lib/features/todos/counterSlice';
import {useTranslations} from 'next-intl';
import Themeswitch from '@/components/swich/themeswitch';
import { useDispatch, useSelector } from "react-redux";
import Languageswitch from '@/components/swich/languageswitch';
import {useRouter} from 'next/navigation'

 
export default function Index() {
  const t = useTranslations('Index');
  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeLanguage = (e:any) => {
    const locale = e.target.value;
    router.push(locale);
  };

  return (
  <div className='h-screen w-full flex flex-col items-center justify-center dark:bg-black dark:text-white'>
    <h2 className='text-red-400'>selected language</h2>
    <div className='flex'>
      <h1>{t('title')}</h1>
      {/* <Languageswitch router={router} /> */}
      <select onChange={handleChangeLanguage} defaultValue={'en'}>
      <option value="en">English</option>
      <option value="tr">türkçe</option>
      {/* Diğer diller için gerekli seçenekleri buraya ekleyin */}
    </select>
    </div>
    <h2 className='text-red-400'>redux toolkit</h2>
    <div className='flex items-center justify-center gap-1'>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button className='px-4 py-2 flex items-center justify-center hover:bg-red-400 rounded-lg border hover:border-white' onClick={() => dispatch(increment())}>Increment</button>
      <button className='px-4 py-2 flex items-center justify-center hover:bg-red-400 rounded-lg border hover:border-white' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    <h2 className='text-red-400'>dark light mode</h2>
    <Themeswitch />
  </div>
);
}




