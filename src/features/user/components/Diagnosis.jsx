import AddBar from './AddBar'
import DiagList from './DiagList'

export default function Diagnosis(prop) {
  const { diagList } = prop

  return (
    <>
      <AddBar />
        <div className="w-[1400px] h-[30px] bg-base-200  flex  justify-around items-center mt-4">

          <div className="flex  justify-center  items-center min-w-[200px] h-[30px]">
            <div className="text-1xl font-bold "> TYPE </div>
          </div>

          <div className="flex  justify-around items-center  min-w-[900px] h-[30px]">
            <div className="text-1xl font-bold"> DIAGNOSIS </div>
          </div>

          <div className="min-w-[200px]">
          </div>

        </div>
        <div className=" w-[1400px] max-h-[400px] h-[400px]  flex flex-col  bg-white  shadow-lg rounded-b-lg  overflow-auto ">
            <DiagList list={diagList} />
        </div>

    </>
  )
}
