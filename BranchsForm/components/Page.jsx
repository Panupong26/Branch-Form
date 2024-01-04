import React from 'react'
import Logo from './Logo'
import Branch from './branch'

export default function Page({ branchs }) {
  return (
    <>
        <div className='mx-auto h-[1215px] my-0 py-8 flex justify-center border'>
          <div className='border border-black w-[21cm] h-[30.45cm] px-4 pb-4 relative'>
              <p className='text-end pr-4 absolute right-[-10px] top-[-22px]'>เอกสารแนบ</p>
              <div className='absolute left-1 top-1'>
                <Logo />
              </div>
              <div className='absolute right-1/2 translate-x-1/2 top-2 font-extrabold text-xl'>
                <p>รายละเอียดที่ตั้งสำนักงานสาขา</p>
              </div>
              {branchs?.map((el, index) => <Branch data={el} index={index}/>)}
          </div>
        </div>
    </>
  )
}
