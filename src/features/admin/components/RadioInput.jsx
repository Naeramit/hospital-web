

export default function RadioInput(prop) {
    const { label, name, data , handleSelect } = prop

    const RadioArr = data.map(data => (
        <div key={data.id} className="flex items-center  w-[150px]">
            <input type="radio" name={name} className="radio radio-primary" value={data.id}  id={data.value} />
            <label className="label" htmlFor={data.id}  >
                <span className="label-text  text-xl"> {data.value}</span>
            </label>
        </div>
    )
    );

    return (
        <div className="flex  w-full justify-start items-center gap-6" onClick={handleSelect}>
            <label className="label w-[200px] ">
                <span className="label-text  text-xl"> {label}</span>
            </label>
            {RadioArr}
        </div>
    )
}
