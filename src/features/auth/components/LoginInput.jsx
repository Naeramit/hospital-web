export default function LoginInput(prop) {
    const { 
        label, 
        type,
        value,
        onChange
    } = prop;

    return (
        <div className="form-control w-full my-6">
            <label className="label ">
                <span className="label-text  text-2xl"> {label}</span>
            </label>
            <input 
            type={type ? type : "text"} 
            className="input input-bordered input-primary  w-full max-w-xs "
            value={value}
            onChange={onChange}
             />
        </div>
    );
}