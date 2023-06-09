

export default function DoctorOpd() {
    return (
        <>
            <div className="w-[80%] h-[70%] bg-white flex-col justify-start items-center ">
                <div className="w-[100%] h-[90px] bg-base-200  flex  justify-around items-center">
                    <div className="flex  flex-col justify-start">
                        <div className="text-1xl font-bold"> From Date </div>
                        <div className="w-[300px] h-[44px] bg-base-100  rounded ">
                            <input type="date" className="w-[298px] min-h-[44px] bg-base-100  rounded p-2"/>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-start ">
                        <div className="text-1xl font-bold"> STATUS </div>
                        <div className="w-[200px] h-[50px] rounded ">
                            <select className="select select-bordered select-base w-full max-w-xs">
                                <option>Unattend</option>
                                <option>Attend</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-start">
                        <div className="text-1xl font-bold"> Seach By Patient ID or Fullname </div>
                        <div className="w-[540px] h-[50px] rounded ">
                            <input type="text" placeholder="Type here" className="input input-bordered input-base w-full " />
                        </div>
                    </div>




                </div>
                <div className="w-[100%] h-[30px] bg-base-300  flex  justify-around items-center mt-6">
                    <div className="flex  justify-start  items-center w-[300px] h-[30px]">
                        <div className="text-1xl font-bold "> CONSULTATION DATE</div>
                    </div>
                    <div className="flex  justify-start items-center  w-[200px] h-[30px]">
                        <div className="text-1xl font-bold"> STATUS </div>
                    </div>
                    <div className="flex  justify-around items-center  w-[540px] h-[30px]">
                        <div className="text-1xl font-bold"> PATEINT ID</div>
                        <div className="text-1xl font-bold"> FULLNAME </div>
                    </div>




                </div>

            </div>
            <div className="w-[80%] flex justify-end mt-2">
                <button className="btn hover:bg-success hover:text-white"> Back to My Workspace </button>
            </div>
        </>
    )
}
