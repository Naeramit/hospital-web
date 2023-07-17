import { useState } from 'react'
import CancelIcon from '../../../icons/cancel-button.svg'
import EditIcon from '../../../icons/edit.svg'


export default function AddList(prop) {
    const { list, type, status ,handleOnClickDelete, handleOnClickUpdateMode } = prop



    const AddList = list.map(add => {

        const objType = type.find(e => e?.id == add?.type)


 
        const objStatus = add?.type == 1  &&  status?.find(e => e?.id == add?.onset)



        return (
            <div className="w-[98%] h-[60px] bg-base-100  flex  justify-around items-center mt-1  ml-1 rounded-lg hover:bg-base-300" 
            key={add?.id} 
            value={add?.id}

            >

                <div className="flex  justify-start  ml-16 items-center min-w-[200px] min-h-[60px] h-[60px]">
                    <div className="text-1xl font-bold "> {objType?.name} </div>
                </div>

                <div className="flex  items-center  justify-start  ml-12  min-w-[700px] min-h-[60px] gap-4 ">
                    <div className="text-1xl font-bold"> {add?.diagnosis || (add?.drug?.name  + " " + add?.drugDescription?.description)} </div>
                    { add?.unitNumber &&
                        <div className="text-1xl "> # {add?.unitNumber} </div>
                    }

                </div>

                <div className="min-w-[100px] flex justify-start  ">
                    { objStatus &&
                        <div className='min-w-[22px] min-h-[16px] bg-base-200 rounded-md text-[16px] px-1'>
                            {objStatus?.name}
                        </div>
                    }
                </div>

                <div className="min-w-[50px] flex justify-start  ">
                    {add?.func?.update &&
                        <div className='min-w-[20px] min-h-[16px] bg-base-200 rounded-sm px-[2px]'
                        onClick={handleOnClickUpdateMode}
                        >
                             <img src={EditIcon} alt="edit" className='w-[20px] rounded-sm hover:bg-info hover:w-[22px]'
                                id={add.id}
                             />
                        </div>
                    }
                </div>

                <div className="min-w-[50px] flex justify-start  ">
                    {add?.func?.del &&
                        <div 
                        className='min-w-[20px] min-h-[16px] bg-base-200 rounded-sm px-[2px]'
                        onClick={handleOnClickDelete}
                        >
                            <img src={CancelIcon} alt="cancel" className='w-[20px] rounded-sm hover:bg-warning hover:w-[22px]'
                                id={add?.id}
                            />
                        </div>
                    }
                </div> 

            </div>

        )
    })
    return (
        <div className=" w-[1400px] max-h-[400px] h-[400px]  flex flex-col   overflow-auto ">
            {AddList}
        </div>
    )
}
