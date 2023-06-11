

export default function RadioInput(prop) {
    const { name, data } = prop

    const RadioArr = data.map(data => (
        <div key={data.id} className="flex items-center  w-[150px]">
            <input type="radio" name={name} className="radio radio-primary" value={data.value}  id={data.id}/>
            <label className="label" htmlFor={data.id}  >
                <span className="label-text  text-xl"> {data.value}</span>
            </label>
        </div>
    ));

    return (
        <div className="flex  w-full justify-start items-center gap-6">
            <label className="label w-[200px] ">
                <span className="label-text  text-xl"> {name}</span>
            </label>
            {RadioArr}
        </div>
    )
}
