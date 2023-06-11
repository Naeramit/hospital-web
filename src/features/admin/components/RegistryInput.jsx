export default function RegistryInput(prop) {
    const { label , type } = prop;

    return (
        <div className="flex w-full  gap-4 my-2  items-center justify-around ">
            <label className="label w-[200px] ">
                <span className="label-text  text-xl"> {label}</span>
            </label>
            <input type= {type} className="input input-bordered input-secondary w-[360px]  h-12 my-1 " />
        </div>
    );
}