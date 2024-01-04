import React from 'react'

export default function GuideInput({ input }) {
  return (
      <div>
        <div  className={`flex h-8 mt-16`}>
          <span className='font-extrabold flex items-end text-xl'>
            สาขาที่
          </span>
          <span className='h-6 border-b-[1.5px] w-[100px] border-black border-dotted text-center'>{input.branchNo}</span>
        </div>

        <div className='flex h-6 mt-0'>
          <span className='ml-4 items-end text-xl font-thin'>
            ที่ตั้งสำนักงาน
          </span>
        </div>

        <div className='flex h-fit mt-[-2px] content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            อาคาร
          </span>
          <span className='h-6 border-b-[1.5px] w-[300px] border-black border-dotted text-center'>{input.building}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            เลขที่
          </span>
          <span className='h-6 border-b-[1.5px] w-[150px] border-black border-dotted text-center'>{input.buildingNo}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            หมู่ที่
          </span>
          <span className='h-6 border-b-[1.5px] w-[80px] border-black border-dotted text-center'>{input.moo}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            ชั้นที่
          </span>
          <span className='h-6 border-b-[1.5px] w-[80px] border-black border-dotted text-center'>{input.floor}</span>
        </div>

        <div className='flex h-fit mt-[-2px] content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            ตรอก/ซอย
          </span>
          <span className='h-6 border-b-[1.5px] w-[276px] border-black border-dotted text-center'>{input.alley}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            ถนน
          </span>
          <span className='h-6 border-b-[1.5px] w-[363px] border-black border-dotted text-center'>{input.street}</span>
        </div>

        <div className='flex h-fit mt-[-2px] content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            ตำบล/แขวง
          </span>
          <span className='h-6 border-b-[1.5px] w-[271px] border-black border-dotted text-center'>{input.district}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            อำเภอ/เขต
          </span>
          <span className='h-6 border-b-[1.5px] w-[328px] border-black border-dotted text-center'>{input.prefecture}</span>
        </div>

        <div className='flex h-fit mt-[-2px] content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            จังหวัด
          </span>
          <span className='h-6 border-b-[1.5px] w-[298px] border-black border-dotted text-center'>{input.province}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            รหัสไปรษณีย์
          </span>
          <span className='h-6 border-b-[1.5px] w-[160px] border-black border-dotted text-center'>{input.zipCode}</span>
        </div>

        <div className='flex h-fit mt-[-2px] content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            โทรศัพท์สำนักงาน
          </span>
          <span className='h-6 border-b-[1.5px] w-[210px] border-black border-dotted text-center'>{input.companyPhoneNo}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            โทรศัพท์มือถือ
          </span>
          <span className='h-6 border-b-[1.5px] w-[160px] border-black border-dotted text-center'>{input.phoneNo}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            โทรสาร
          </span>
          <span className='h-6 border-b-[1.5px] w-[137px] border-black border-dotted text-center'>{input.fax}</span>
        </div>

        <div className='flex h-fit mt-0 content-end p-0'>
          <span className='h-fit ml-4 text-xl font-thin my-auto pt-1'>
            อีเมล
          </span>
          <span className='h-6 border-b-[1.5px] w-[378px] border-black border-dotted text-center'>{input.email}</span>
          <span className='h-fit text-xl font-thin my-auto pt-1'>
            เว็บไซต์
          </span>
          <span className='h-6 border-b-[1.5px] w-[276px] border-black border-dotted text-center'>{input.website}</span>
        </div>
    </div>
  )
}