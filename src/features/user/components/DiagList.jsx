export default function DiagList(prop) {
    const { list } = prop
    const diagList = list.map(diag => (

        <div className="w-[98%] h-[60px] bg-base-100  flex  justify-around items-center mt-1  ml-1 rounded-lg hover:bg-base-300" key={diag.id} id={diag.id}>

            <div className="flex  justify-start  ml-12 items-center min-w-[200px] min-h-[60px] h-[60px]">
                <div className="text-1xl font-bold "> {diag.id == 1 ? "Principle" : diag.id == 2 ? "Comorbid" : diag.id == 3 ? "Complication" : null} </div>
            </div>

            <div className="flex  justify-around items-center  min-w-[900px] min-h-[60px] h-[60px]">
                <div className="text-1xl font-bold"> {diag.name} </div>
            </div>

            <div className="min-w-[200px] ">
            </div>

        </div>

    )
    )
    return (
        <div className=" w-[1400px] max-h-[380px] h-[380px]  flex flex-col   overflow-auto ">
            {diagList}
        </div>
    )
}
