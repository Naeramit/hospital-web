import PatientList from "./PatientList"
import { Link } from 'react-router-dom';

export default function OpdDoctor(prop) {
    const {patientList} = prop



    return (
        <>
            <div className="w-[80%] min-h-[500px] flex-col justify-start items-center  min-w-[1100px]  shadow-lg bg-white rounded-lg ">


                <div className="w-[100%] h-[90px] bg-base-300  flex  justify-around items-center gap-5   rounded-t-lg">
                    <div className="flex  flex-col justify-start w-[26%] ml-4">
                        <div className="text-1xl font-bold"> From Date </div>
                        <div className="h-[44px] bg-base-100  rounded ">
                            <input type="date" className="min-w-full min-h-[44px] bg-base-100  rounded p-2"/>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-start w-[28%] ">
                        <div className="text-1xl font-bold"> STATUS </div>
                        <div className="h-[50px] rounded ">
                            <select className="select select-bordered select-base min-w-full max-w-xs">
                                <option>Unattend</option>
                                <option>Attend</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-start w-[48%] mr-4">
                        <div className="text-1xl font-bold"> Seach By Patient ID or Fullname </div>
                        <div className="h-[50px] rounded ">
                            <input type="text" placeholder="Type here" className="input input-bordered input-base min-w-full  " />
                        </div>
                    </div>
                </div>



                <div className="w-[100%] h-[30px] bg-info  flex  justify-around items-center mt-2">
                    <div className="flex  justify-center  items-center min-w-[300px] h-[30px]">
                        <div className="text-1xl font-bold "> CONSULTATION DATE</div>
                    </div>
                    <div className="flex  justify-center  items-center  min-w-[100px] h-[30px]">
                        <div className="text-1xl font-bold"> STATUS </div>
                    </div>
                    <div className="flex  justify-center  items-center  min-w-[200px] h-[30px]">
                        <div className="text-1xl font-bold"> PATEINT ID </div>
                    </div>
                    <div className="flex  justify-around items-center  min-w-[500px] h-[30px]">
                        <div className="text-1xl font-bold"> FULLNAME </div>
                    </div>
                </div>


                <div className=" max-h-[350px]  h-[350px]  overflow-auto">
                    <PatientList list={patientList}/> 
                </div>




            </div>
            <div className="w-[80%] flex justify-end mt-4">
                <Link  to={'/doctor/'}>
                <button className="btn hover:bg-success font-bold hover:text-white"> Back to My Workspace </button>                
                </Link>
            </div>
        </>
    )
}
