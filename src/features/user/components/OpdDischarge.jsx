import AddBar from './AddBar'
import AddList from './AddList'



export default function OpdDischarge({orderList, handleOnChange,handleOnClickAddOrder, handleOnClickDelete, handleOnClickUpdateMode, addBar, defaultAdd, err, editId}) {

  const title = "Create New Order"
  const type = [{ id: 1, name: "Drug" }, { id: 2, name: "Equip" }, { id: 3, name: "F/U" }]
  const status = [{id:1 , name: "stat"}, {id:2 , name: "discharge"} , {id:3 , name: "admit"}]

  const  list = orderList.map( order => {
    return {...order,  func: {update: true, del: true}}
  })


  return (
    <>
      <AddBar title={title}  type={type} handleOnChange={handleOnChange} handleOnClickAdd={handleOnClickAddOrder} addBar={addBar} defaultAdd={defaultAdd} err={err} editId={editId}/>
      <div className="w-[1400px] h-[30px] bg-base-200  flex  justify-around items-center mt-4">
        <div className="flex  justify-center  items-center min-w-[200px] h-[30px]">
          <div className="text-1xl font-bold "> TYPE </div>
        </div>

        <div className="flex  justify-around items-center  min-w-[700px] h-[30px]">
          <div className="text-1xl font-bold"> ORDER </div>
        </div>

        <div className="min-w-[400px]">
        </div>
      </div>

      <div className=" w-[1400px] max-h-[400px]  h-[400px]  flex flex-col  bg-white  shadow-lg rounded-b-lg  overflow-auto ">
        <AddList list={list}  type={type} status={status} handleOnClickDelete={handleOnClickDelete} handleOnClickUpdateMode={handleOnClickUpdateMode}/>
      </div>

    </>
  )
}
