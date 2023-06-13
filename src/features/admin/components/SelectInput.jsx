

export default function SelectInput(prop) {
    const { label, name, data, handleSelect } = prop

    const selectArr = data.map(data => (
         <option 
         key={data.id}  
         value={data.id} 
         > 
         {data.value}
         </option>
    ));


    return (
        <div className="flex  w-full  justify-around items-center gap-6 my-2">
            <label className="label w-[200px] ">
                <span className="label-text  text-xl"> {label}</span>
            </label>
            <select className="select select-primary w-[360px] "
            id="role"
            name={name}
            > 
            {selectArr} 
            </select>
        </div>
    )
}
