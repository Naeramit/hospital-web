import AddBar from './AddBar'
import AddList from './AddList'

export default function OpdDiagnosis({diagList, handleOnChange, handleOnClickAddDiag, handleOnClickDelete, handleOnClickUpdateMode,handleOnClickUpdate , addbar, defaultAdd, err , editId}) {
  const diagType = {
    title: "Create New Diagnosis",
    type :[{id: 1 , name: "Principle"} , {id: 2 , name: "Comorbid"} , {id: 3 , name: "Complicated"}]
  }
  const  list = diagList.map( diag => {
    return {...diag,  func: {update: true, del: true}}
  })



  return (
    <>
      <AddBar title={diagType.title}  type={diagType.type} handleOnChange={handleOnChange}  handleOnClickAdd ={handleOnClickAddDiag}  handleOnClickUpdate={handleOnClickUpdate} addbar={addbar} defaultAdd={defaultAdd} err={err} editId={editId}/>
        <div className="w-[1400px] h-[30px] bg-base-200  flex  justify-around items-center mt-4">

          <div className="flex  justify-center  items-center min-w-[200px] h-[30px]">
            <div className="text-1xl font-bold "> TYPE </div>
          </div>

          <div className="flex  justify-around items-center  min-w-[700px] h-[30px]">
            <div className="text-1xl font-bold"> DIAGNOSIS </div>
          </div>

          <div className="min-w-[400px]">
          </div>

        </div>
        <div className=" w-[1400px] max-h-[320px] h-[320px]  flex flex-col  bg-white  shadow-lg rounded-b-lg  overflow-auto ">
            <AddList list={list} type={diagType.type}  handleOnClickDelete={handleOnClickDelete} handleOnClickUpdateMode={handleOnClickUpdateMode} />
        </div>

    </>
  )
}
