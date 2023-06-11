import AddBar from './AddBar'
import AddList from './AddList'
import DischargeTailBar from './DischargeTailBar'


export default function OpdDischarge(prop) {
  const { orderList} = prop
  const orderType = {
      title: "Create New Order",
      type: [{ id: 1, name: "Drug" }, { id: 2, name: "Equip" }, { id: 3, name: "F/U" }]
  }


  return (
    <>
      <AddBar title={orderType.title}  type={orderType.type}/>
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
        <AddList list={orderList}  type={orderType.type}/>
      </div>

      <DischargeTailBar/>
    </>
  )
}
