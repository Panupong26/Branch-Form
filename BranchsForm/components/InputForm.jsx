export default function InputForm({ input, setInput, showInput, isEdit }) {
  
  return (
   <> 
      <div>
        <p>สาขาที่</p>
        <input
          type="number"
          className='border-2 w-full'
          id='branchNo'
          onChange={e => setInput({...input, branchNo: e.target.value})}
          value={input.branchNo}
          disabled={!showInput && !isEdit}
        />
      </div>
      <div>
        <p>อาคาร</p>
        <input
          type='text'
          className='border-2 w-full'
          id='building'
          onChange={e => setInput({...input, building: e.target.value})}
          value={input.building}
          disabled={!showInput && !isEdit}
        />
      </div>
      <div>
        <p>เลขที่</p>
        <input
          type='number'
          className='border-2 w-full'
          id='buildingNo'
          onChange={e => setInput({...input, buildingNo: e.target.value})}
          value={input.buildingNo}
          disabled={!showInput && !isEdit}
        />
      </div>
      <div>
        <p>หมู่ที่</p>
        <input
          type='text'
          className='border-2 w-full'
          id='moo'
          onChange={e => setInput({...input, moo: e.target.value})}
          value={input.moo}
          disabled={!showInput && !isEdit}
        />
      </div>
      <div>
        <p> ชั้นที่ </p>
        <input
          type='number'
          className='border-2 w-full'
          id='floor'
          onChange={e => setInput({...input, floor: e.target.value})}
          value={input.floor}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>ตรอก/ซอย</p>
        <input
          type='text'
          className='border-2 w-full'
          id='alley'
          onChange={e => setInput({...input, alley: e.target.value})}
          value={input.alley}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>ถนน</p>
        <input
          type='text'
          className='border-2 w-full'
          id='street'
          onChange={e => setInput({...input, street: e.target.value})}
          value={input.street}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>ตำบล/แขวง</p>
        <input
          type='text'
          className='border-2 w-full'
          id='district'
          onChange={e => setInput({...input, district: e.target.value})}
          value={input.district}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>อำเภอ/เขต</p>
        <input
          type='text'
          className='border-2 w-full'
          id='prefecture'
          onChange={e => setInput({...input, prefecture: e.target.value})}
          value={input.prefecture}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>จังหวัด</p>
        <input
          type='text'
          className='border-2 w-full'
          id='province'
          onChange={e => setInput({...input, province: e.target.value})}
          value={input.province}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>รหัสไปรษณีย์</p>
        <input
          type='text'
          className='border-2 w-full'
          id='zipCode'
          onChange={e => setInput({...input, zipCode: e.target.value})}
          value={input.zipCode}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>โทรศัพท์สำนักงาน</p>
        <input
          type='text'
          className='border-2 w-full'
          id='companyPhoneNo'
          onChange={e => setInput({...input, companyPhoneNo: e.target.value})}
          value={input.companyPhoneNo}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>โทรศัพท์มือถือ</p>
        <input
          type='text'
          className='border-2 w-full'
          id='phoneNo'
          onChange={e => setInput({...input, phoneNo: e.target.value})}
          value={input.phoneNo}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>โทรสาร</p>
        <input
          type='text'
          className='border-2 w-full'
          id='fax'
          onChange={e => setInput({...input, fax: e.target.value})}
          value={input.fax}
          disabled={!showInput && !isEdit}
        />
      </div>
     
      <div>
        <p>อีเมล</p>
        <input
          type='text'
          className='border-2 w-full'
          id='email'
          onChange={e => setInput({...input, email: e.target.value})}
          value={input.email}
          disabled={!showInput && !isEdit}
        />
      </div>

      <div>
        <p>เว็บไซต์</p>
        <input
          type='text'
          className='border-2 w-full'
          id='website'
          onChange={e => setInput({...input, website: e.target.value})}
          value={input.website}
          disabled={!showInput && !isEdit}
        />
      </div>
    </>
  )
}
