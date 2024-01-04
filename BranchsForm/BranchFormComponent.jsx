import { useState, useRef } from 'react'
import InputForm from './components/InputForm'
import Form from './components/Form'
import Logo from './components/Logo'
import { useReactToPrint } from 'react-to-print'
import { useEffect } from 'react'
import GuideInput from './components/GuideInput'

const initialInput = {
  branchNo: '',
  building: '',
  buildingNo: '',
  moo: '',
  floor: '',
  alley: '',
  street: '',
  district: '' ,
  prefecture: '',
  province: '',
  zipCode: '',
  companyPhoneNo: '',
  phoneNo: '',
  fax: '',
  email: '',
  website: ''
}

export default function BranchFormComponent() {
  const [input, setInput] = useState(initialInput)

  const [branchs, setBranchs] = useState([]);
  const [page, setPage] = useState([[]]); 
  const [showInput, setShowInput] = useState(true);
  const [editDropdown, setEditDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [offset, setOffset] = useState(34)




  
  const addBranch = () => {
    setBranchs([...branchs, input]);
    setInput(initialInput);
    setShowInput(false);
  }

  const setEditBranchs = (index) => {
    let newArr = [...branchs];
    newArr[index] = input;
    setBranchs([...newArr]);
    setInput(initialInput);
    setIsEdit(false);
  }

  const deleteBranch = (index) => {
    let newArr = branchs.filter((e, i) => i !== index);
    setBranchs([...newArr]);
    setInput(initialInput);
    setIsEdit(false);
  }


  const handleAddBranch = () => {
    setShowInput(true);
    if(page[page.length-1].length === 4) {
      setPage([...page, []]);
    }
  }

  const handleEditButton = (index) => {
    setIsEdit(true);
    setInput({...branchs[index]});
    setEditIndex(index);
  }
  

  const printRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })

  useEffect(() => {
    if(branchs.length > 0) {
      let pageArr = [];
      let branchArr = [];
      branchs.forEach((el,index) => {
        if(branchArr.length < 4) {
          branchArr.push(el);
          if((index + 1) === branchs.length) {
            pageArr.push([...branchArr]);
          }
        } else if(branchArr.length === 4) {
          pageArr.push([...branchArr]);
          branchArr = [];
          branchArr.push(el);
          if((index + 1) === branchs.length) {
            pageArr.push([...branchArr]);
          }
        }
      })
      setPage([...pageArr]);
    }
  }, [branchs])

  useEffect(() => {
    let offset = 0;
    switch (page[page.length-1].length) {
      case 0 : 
        offset = (page.length-1)*1215 + 34 ;
        break;
      case 1 :
        offset = (page.length-1)*1215 + 292 ;
        break;
      case 2 :
        offset = (page.length-1)*1215 + 550 ;
        break;
      case 3 :
        offset = (page.length-1)*1215 + 808 ;
        break;
      default :
        offset = (page.length)*1215 + 34 ;
        break;
    }

    setOffset(offset);
  }, [page])

  return (
    <>
      <div className='overflow-auto flex justify-between h-screen'>
        <div className='w-2/5 min-w-[300px] mx-auto'>
          <Logo />  
          <div className='flex justify-between relative m-4'>
            <button className='bg-blue-300 p-1 rounded m-0 mb-0' onClick={() => setEditDropdown(true)}>แก้ไข ↓</button> 
           
            {editDropdown &&
            <div className='w-max h-max max-h-[100px] overflow-y-auto absolute top-[35px] left-0 bg-white shadow-md' onMouseLeave={() => setEditDropdown(false)}>
              {branchs.map((e, index) => <div role="button" className='bg-blue-300 rounded-md w-[100px] h-max m-1 flex justify-center content-center' onClick={() => handleEditButton(index)}><p className='text-lg'>สาขาที่ {e.branchNo}</p></div>)}
            </div>}

            <button className='bg-blue-300 p-1 rounded m-0 mb-0' onClick={handlePrint}>Print</button>
          </div>

          <h1 className='text-center mb-2'>InputForm</h1>
          <div className={`mt-0 px-4 h-[calc(100vh-210px)] max-h-[840px] overflow-y-auto`}>
            <InputForm input={input} setInput={setInput} showInput={showInput} isEdit={isEdit}/>
          </div>
          <div className='flex justify-end'>
            {!showInput && !isEdit && <button className='bg-blue-300 p-1 rounded m-4' onClick={handleAddBranch}>เพิ่มสาขา</button>}
            {showInput && !isEdit && <button className='bg-blue-300 p-1 rounded m-4' onClick={addBranch}>เสร็จสิ้น</button>}
            {isEdit && 
            <>
              <button className='bg-blue-300 p-1 rounded mx-1 my-4' onClick={() => setEditBranchs(editIndex)}>เสร็จสิ้น</button>
              <button className='bg-blue-300 p-1 rounded mx-1 my-4' onClick={() => deleteBranch(editIndex)}>ลบออก</button>
            </>
            }
          </div>
        </div>
        <div className='ml-2 flex-auto w-3/5 min-w-fit mx-auto flex justify-center h-screen overflow-y-auto'>
          <div className='w-[860px] h-max relative' ref={printRef}>
            <Form page={page}/>
            {showInput && <div className={`absolute left-[51px]`} style={{top: `${offset}px`}}><GuideInput input={input}/></div>}
          </div>
        </div>
      </div> 
    </>
  )
}
