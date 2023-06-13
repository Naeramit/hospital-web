

export default function CurrentHistory({history, handleOnChange, handleOnClick, recorded}) {
  const beforeRecord = "btn btn-success w-[400px] text-xl text-white "
  const afterRecord = "btn btn-base-300 w-[400px] text-xl"





  return (
    <div className=" bg-white  w-screen p-2 flex flex-col items-center">
      <form className=" w-full flex flex-col items-center">
        <div className="bg-base-100 w-[99%] h-8 rounded-lg p-2 flex items-center">
          <span className="bg-base-200 felx justify-center mr-2 ml-0  rounded-l-lg px-2 font-bold"> CC: </span> 
          <input type="text" className="bg-base-100 w-full"
            value={history.cc}
            name="cc"
            onChange={handleOnChange}
          />
        </div>
        <div className="bg-white w-[99%]  p-2 flex items-center justify-between">
          <div className="form-control w-[48%] min-h-[260px]">
            <label className="label py-1">
              <span className="label-text  font-bold">PI: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[260px]" 
            value={history.pi}
            name="pi"
            onChange={handleOnChange}
            > </textarea>
          </div>
          <div className="form-control w-[48%] min-h-[260px]">
            <label className="label py-1">
              <span className="label-text font-bold">PE: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[260px]"
            value={history.pe}
            name="pe"
            onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div className="bg-white w-[99%]  p-2 flex items-center justify-between">
          <div className="form-control w-[48%] min-h-[150px]">
            <label className="label py-1">
              <span className="label-text  font-bold">PH: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[150px]"
            value={history.ph}
            name="ph"
            onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="form-control w-[48%] min-h-[150px]">
            <label className="label py-1">
              <span className="label-text font-bold">Addition: </span>
            </label>
            <textarea className="textarea textarea-bordered min-h-[150px]"
            value={history.addition}
            name="addition"
            onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div className="flex w-full justify-end mt-2">
        <button type="submit" className={recorded ? afterRecord : beforeRecord}
        onClick={handleOnClick}
        >Save</button>
        </div>
      </form>
    </div>
  )
}
