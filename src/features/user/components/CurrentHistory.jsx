

export default function CurrentHistory() {
  return (
    <div className=" bg-white  w-screen p-2 flex flex-col items-center">
      <form className=" w-full flex flex-col items-center">
        <div className="bg-base-100 w-[99%] h-8 rounded-lg p-2 flex items-center">
          <span className="bg-base-200 felx justify-center mr-2 ml-0  rounded-l-lg px-2 font-bold"> CC: </span> 
          <input type="text" value=" ปวดศีรษะ 1 dPTA" className="bg-base-100 w-full"/>
        </div>
        <div className="bg-white w-[99%]  p-2 flex items-center justify-between">
          <div className="form-control w-[48%] min-h-[260px]">
            <label className="label py-1">
              <span className="label-text  font-bold">PI: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[260px]"></textarea>
          </div>
          <div className="form-control w-[48%] min-h-[260px]">
            <label className="label py-1">
              <span className="label-text font-bold">PE: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[260px]"></textarea>
          </div>
        </div>
        <div className="bg-white w-[99%]  p-2 flex items-center justify-between">
          <div className="form-control w-[48%] min-h-[150px]">
            <label className="label py-1">
              <span className="label-text  font-bold">PH: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[150px]"></textarea>
          </div>
          <div className="form-control w-[48%] min-h-[150px]">
            <label className="label py-1">
              <span className="label-text font-bold">Addition: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[150px]"></textarea>
          </div>
        </div>
        <div className="flex w-full justify-end mt-4">
        <button className="btn btn-success w-[600px] text-xl text-white ">Save</button>
        </div>
      </form>
    </div>
  )
}
