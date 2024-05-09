import React from 'react'
import { useTheme } from 'next-themes';

const Themeswitch = () => {
  const { setTheme } = useTheme();

  return (
    <div className='flex border rounded-lg dark:border-white gap-2 '>
      <button className='px-4 py-2 flex items-center justify-center hover:bg-red-400 rounded-lg' onClick={() => setTheme("dark")}>dark</button>
      <button className='px-4 py-2 flex items-center justify-center hover:bg-red-400 rounded-lg' onClick={() => setTheme("light")}>light</button>
    </div>
  )
}

export default Themeswitch